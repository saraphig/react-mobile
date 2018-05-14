import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
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
                        this.props.dispatch({
                            type: userCenterSaga.setMyCoinAccount,
                            payload: {
                                query: {
                                    result,
                                    value: 'ethvalue',
                                },
                            },
                        });
                        //this.setState({ coinList: assetArr});
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

	//drawer
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

export function mapStateToProps(state) {
    return {
        //myAssets: state.userCenter.myAssets,
    };
}

// export default Index;
export default connect(mapStateToProps)(injectIntl(MyWallet));
