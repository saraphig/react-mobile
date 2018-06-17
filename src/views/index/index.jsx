import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { actionType as loginSaga } from 'models/sagas/login.js';
import { actionType as tradeSaga } from 'models/sagas/trading';
// import wsRequest from 'utils/wsRequest';
import wsSocket from 'utils/webSocketUtil';
import IndexComp from 'components/index/index';
import { topToast } from 'utils/comFunction'
import Loading from 'components/comComponent/loading'

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			initData: [],
			updateData: [],
			priceETH: null
		};

		this.dataWs = null;
		this.interval = null // 定时获取对于价格（人民币和美元）
	}

	componentWillMount(){
		// this.props.dispatch({type: tradeSaga.setPrice})
		// this.interval = setInterval(() => {
		// 	this.props.dispatch({type: tradeSaga.setPrice})
		// }, 10000)
	}

	componentDidMount() {
		// 挂载完成
		this.openSocket();
	}

	componentWillReceiveProps(nextprops) {
		// 接收到nextprops触发
		// console.log('==', nextprops.token);
		// console.log('price:', this.props.priceETH)
		this.setState({
			priceETH: this.props.priceETH
		})
	}

	componentWillUnmount() {
		// this.dataWs.close();
		if (this.dataWs){
		  // 销毁前取消订阅
		  this.dataWs.sendData(JSON.stringify({method:"status.unsubscribe",params:[],"id":0}));
		  this.dataWs.sendData(JSON.stringify({method:"prices.unsubscribe",params:[],"id":0}));
		  this.dataWs.destroy();
		}
		this.dataWs = null;
		// if (this.interval) {
	    //    clearInterval(this.interval)
	    // }
	}

	openSocket = () => {
		this.props.dispatch({
			type: tradeSaga.tradeApi,
			payload: {
				query: {
					method: 'market.list',
					params: [],
					id: 0
				},
				success: result => {
					// console.log('----', result)
					this.setState({
						initData: result
					})
					const dataWs = [
						{ method: 'server.ping', params: ['coinKind'], id: 1 }
					];
					// this.dataWs = wsRequest(dataWs, this.wsMessage, this.error);
					this.dataWs = wsSocket(dataWs, this.wsMessage, this.error);
					// console.log('8888',this.dataWs)
				},
				fail: this.fail,
				error: this.error
			}
		});
	};

	//请求返回失败code
	fail = (err_code) => {
	const {
		intl: { formatMessage }
	} = this.props;
	topToast(formatMessage({ id: `code_${err_code}` }));
	// this.setIsRefreshCaptcha();
		// alert(err_code)
	};
	
	// 网络异常，请求失败
	error = (err) => {
		// alert('网络异常，请求失败',err)
		// console.log(err)
	const {
		intl: { formatMessage }
	} = this.props;
	topToast(formatMessage({ id: 'serverError' }));
	// this.setIsRefreshCaptcha();
	};

	wsMessage = data => {
		// console.log(data, this.dataWs);
		const { method, params, id, result, error } = data;
		let arrName = []
		this.props.market.forEach(el => {
			arrName.push(el.name)
		})
		if (id === 1) {
			// 订阅法币价格
			let query2 = {
				method: 'prices.subscribe',
				params: [],
				id: 0
			};
			this.dataWs.sendData(JSON.stringify(query2));
			let query = {
				method: 'status.subscribe',
				params: arrName,
				id: 3
			};
			// this.dataWs.send(JSON.stringify(query));
			this.dataWs.sendData(JSON.stringify(query));
		}

		if (method === 'prices.update') {
			// console.log('prices.update', params[0])
			this.props.dispatch({type: tradeSaga.setPrice, payload: params[0]})
		}

		if (method === 'daystatus.update') {
			this.props.dispatch({
				type: tradeSaga.setMarketData,
				params
			})
			this.setState({
				updateData: params
			})
		}
	};

	_onOpenChange = () => {
		this.setState({ open: !this.state.open });
	};

	render() {
		const {
			intl: { formatMessage }
		} = this.props;
		const { open } = this.state;

		// let box = <Loading/>
		// if (this.state.updateData.length > 0) {
		// 	box = null
		// }
		return (
			<div>
				{/* {box} */}
				<IndexComp 
				  _onOpenChange={this._onOpenChange} 
				  _open={open}
				  initData={this.state.initData}
				  updateData={this.state.updateData}
				  market={this.props.market}
				  marketData={this.props.marketData}
				  priceETH={this.props.priceETH}
			    />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	token: state.login.token,
	market: state.trade.market,
	marketData: state.trade.marketData,
	priceETH: state.trade.price
});

// export default Index;
export default connect(mapStateToProps)(injectIntl(Index));
