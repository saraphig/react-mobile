import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { actionType as userCenterSaga } from 'models/sagas/userCenter';
import { getCookie, topToast } from 'utils/comFunction.js';
import MyInviteComp from 'components/extra/MyInvite';
import copy from 'copy-to-clipboard';
import jrQrcode from 'jr-qrcode';

class MyInvite extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			TGroup: [],
			info: [],
		  	inviteUrl: '', //邀请链接
		  	inviteSrc: '', //链接图片
            feeBackNum: 0,
		};
	}

	componentDidMount() {
		const token = getCookie('token');
		let query = {
			token: token
		};
		// console.log(userCenterSaga);

		this.props.dispatch({
			type: userCenterSaga.getInviteInfo,
			payload: {
				query,
				success: data => {
					this.setState({
						TGroup: data.data
					});
				},
				fail: this.fail,
				error: this.error
			}
		});

		this.props.dispatch({
			type: userCenterSaga.getUserInfo,
			payload: {
				query,
				success: data => {
					this.setState({
						info: data.info.user_info,
            inviteUrl: `${window.location.origin}/register?inviter=${data.info.user_info.invite_code}`,
            inviteSrc: jrQrcode.getQrBase64(`${window.location.origin}/register?inviter=${data.info.user_info.invite_code}`)
					});
				},
				fail: this.fail,
				error: this.error
			}
		});
        this.props.dispatch({
            type: userCenterSaga.getFeeBack,
            payload: {
                query,
                success: data => {
                    this.setState({
                        feeBackNum: data.feeBackTotal,
                    });
                },
                fail: this.fail,
                error: this.error
            }
        });
	}

	fail = () => {
	  this.props.history.push('login')
  };

	error = () => {
    const {
      intl: { formatMessage }
    } = this.props;
    topToast(formatMessage({ id: 'serverError' }));
  };

	_onClick = () => {
    let url = this.state.inviteUrl;
    copy(url);
    topToast(this.props.intl.formatMessage({id: 'code_08'}));
	};

	_onOpenChange = () => {
		this.setState({ open: !this.state.open });
	};

	render() {
		const { open, TGroup, info, inviteUrl, inviteSrc, feeBackNum } = this.state;
		return (
			<div>
				<MyInviteComp
					_onClick={this._onClick}
					inviteUrl={inviteUrl}
          inviteSrc={inviteSrc}
					_onOpenChange={this._onOpenChange}
					_open={open}
					TGroup={TGroup}
					info={info}
                    feeBackNum={feeBackNum}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	token: state.login.token
});

// export default Index;
export default connect(mapStateToProps)(injectIntl(MyInvite));
