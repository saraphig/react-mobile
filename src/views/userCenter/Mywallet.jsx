import React from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { actionType as tradingSaga } from 'models/sagas/trading';
import { actionType as userCenterSaga } from 'models/sagas/userCenter';
import { actionType as tradeSaga } from 'models/sagas/trading';
import MyWalletComp from 'components/userCenter/MyWallet';
import { getCookie, topToast} from "utils/comFunction";
import wsSocket from 'utils/webSocketUtil';

class MyWallet extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
            iconList: {},
        };
        this.dataWs = null;
	}
	componentWillMount() {
		const token = getCookie('token');
		if(token){
            // this.props.dispatch({type: tradeSaga.setPrice})
            // this.interval = setInterval(() => {
            //     this.props.dispatch({type: tradeSaga.setPrice})
            // }, 10000);
            this.openSocket()
            this.props.dispatch({
                type: tradingSaga.tradeAssets,
                payload: {
                    query: {
                        method: 'balance.query',
                        params: [token],
                        id: 0
                    },
                    success: result => {
                    	// 将资产信息存储在store
                        this.props.dispatch({
                            type: userCenterSaga.setMyCoinAccount,
                            payload: {
                                query: {
                                    result,
                                    value: 'ethvalue',
                                },
                            },
                        });
                    },
                    fail: err => {
                        // console.log(err);
                        //token 失效
                        if(Number(err.code) == 10003) {
                            this.props.history.push('/login');
                        }
                    }
                }
            });

            // 获取资产币种图标
            this.props.dispatch({
                type: userCenterSaga.iconList,
                payload: {
                    query: {
                    },
                    success: data => {
                        this.setState({
                            iconList: eval('('+data.list+')'),
                        });
                    },
                    fail: err => {
                        //token 失效
                        if(Number(err.code) == 10003) {
                            this.props.history.push('/login');
                        }
                    }
                }
            });
		} else {
			window.location.href='/login';
		}
	}
    componentWillUnmount() {
        // if (this.interval) {
        //     clearInterval(this.interval)
        // }
		if (this.dataWs){
            // 销毁前取消订阅
            this.dataWs.sendData(JSON.stringify({method:"prices.unsubscribe",params:[],"id":0}));
            this.dataWs.destroy();
          }
          this.dataWs = null;
    }

    // 连接ws
    openSocket = () => {
        const dataWs = [
            { method: 'server.ping', params: ['coinKind'], id: 1 }
        ];
        // this.dataWs = wsRequest(dataWs, this.wsMessage, this.error);
        this.dataWs = wsSocket(dataWs, this.wsMessage, this.error);
    }

    // 请求失败
    error = (err) => {
		// alert('网络异常，请求失败',err)
		// console.log(err)
	const {
		intl: { formatMessage }
	} = this.props;
	topToast(formatMessage({ id: 'serverError' }));
	// this.setIsRefreshCaptcha();
    };
    
    // 获取ws推送数据
    wsMessage = data => {
		// console.log(data, this.dataWs);
		const { method, params, id, result, error } = data;
		if (id === 1) {
			// 订阅法币价格
			let query2 = {
				method: 'prices.subscribe',
				params: [],
				id: 0
			};
			this.dataWs.sendData(JSON.stringify(query2));
		}

		if (method === 'prices.update') {
            // let eth = null
            // params.forEach(el => {
            //     if (Object.keys(el)[0] === 'eth') {
            //         eth = el
            //     }
            // })
			this.props.dispatch({type: tradeSaga.setPrice, payload: params[0]})
        }
    }

	// 抽屉显示
	_onOpenChange = () => {
		this.setState({ open: !this.state.open });
	};

	render() {
		const { open,iconList } = this.state;
		return (
			<div>
				<MyWalletComp
					_onOpenChange={this._onOpenChange}
					_open={open}
                    iconList={iconList}
				/>
			</div>
		);
	}
}

export default connect()(injectIntl(MyWallet));
