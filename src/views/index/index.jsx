import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { actionType as loginSaga } from 'models/sagas/login.js';
import { actionType as tradeSaga } from 'models/sagas/trading';
import wsRequest from 'utils/wsRequest';
import IndexComp from 'components/index/index';

class Index extends React.Component {
	constructor(props) {
		super(props);
		// this.props.dispatch({
		//     type: loginSaga.setToken,
		//     payload: '3245353'
		// })
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
		this.props.dispatch({type: tradeSaga.setPrice})
		this.interval = setInterval(() => {
			this.props.dispatch({type: tradeSaga.setPrice})
		}, 10000)
	}

	componentDidMount() {
		// 挂载完成
		this.openSocket();
	}

	componentWillReceiveProps(nextprops) {
		// 接收到nextprops触发
		console.log('==', nextprops.token);
		// console.log('price:', this.props.priceETH)
		this.setState({
			priceETH: this.props.priceETH
		})
	}

	componentWillUnmount() {
		this.dataWs.close();
		if (this.interval) {
	       clearInterval(this.interval)
	    }
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
					console.log('----', result)
					this.setState({
						initData: result
					})
					const dataWs = [
						{ method: 'server.ping', params: ['coinKind'], id: 1 }
					];
					this.dataWs = wsRequest(dataWs, this.wsMessage, this.error);
					// console.log('8888',this.dataWs)
				},
				fail: err => {
					console.log(err);
				}
			}
		});
	};

	wsMessage = data => {
		// console.log(data, this.dataWs);
		const { method, params, id, result, error } = data;
		let arrName = []
		this.props.market.forEach(el => {
			arrName.push(el.name)
		})
		if (id === 1) {
			let query = {
				method: 'status.subscribe',
				params: arrName,
				id: 3
			};
			this.dataWs.send(JSON.stringify(query));
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

		return (
			<div>
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
