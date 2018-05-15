import React from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { actionType as tradingSaga } from 'models/sagas/trading';
import { actionType as userCenterSaga } from 'models/sagas/userCenter';
import MyWalletComp from 'components/userCenter/MyWallet';
import { getCookie} from "../../utils/comFunction";

class MyWallet extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}
	componentDidMount() {
		const token = getCookie('token');
		if(token){
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
                        console.log(err);
                    }
                }
            });
		} else {
			window.location.href='/login';
		}
	}

	// 抽屉显示
	_onOpenChange = () => {
		this.setState({ open: !this.state.open });
	};

	render() {
		const { open } = this.state;
		return (
			<div>
				<MyWalletComp
					_onOpenChange={this._onOpenChange}
					_open={open}
				/>
			</div>
		);
	}
}

export default connect()(injectIntl(MyWallet));
