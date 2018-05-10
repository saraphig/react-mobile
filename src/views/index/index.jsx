import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { actionType as loginSaga } from 'models/sagas/login.js';
import { actionType as tradeSaga } from 'models/sagas/trading';
import wsRequest from 'utils/wsRequest';
import IndexComp from 'components/index/Index';

class Index extends React.Component {
	constructor(props) {
		super(props);
		// this.props.dispatch({
		//     type: loginSaga.setToken,
		//     payload: '3245353'
		// })
		this.state = {
			open: false
		};

		this.dataWs = null;
	}

	componentDidMount() {
		// 挂载完成
		this.openSocket();
	}

	componentWillReceiveProps(nextprops) {
		// 接收到nextprops触发
		console.log('==', nextprops.token);
	}

	componentWillUnmount() {
		this.dataWs.close();
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
		console.log(data, this.dataWs);
		const { method, params, id, result, error } = data;
		if (id === 1) {
			let query = {
				method: 'status.subscribe',
				params: ['HOP/ETH', 'TOP/ETH', 'SEER/ETH', 'KEY/ETH'],
				id: 3
			};
			this.dataWs.send(JSON.stringify(query));
		}
	};

	test() {
		this.props.dispatch({
			type: loginSaga.setToken,
			payload: {
				query: {
					pwd: '89078',
					email: '789789'
				}
			}
		});
	}
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
				<IndexComp _onOpenChange={this._onOpenChange} _open={open} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	token: state.login.token
});

// export default Index;
export default connect(mapStateToProps)(injectIntl(Index));
