import React from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { actionType as userCenterSaga } from 'models/sagas/userCenter';
import { getCookie, topToast } from 'utils/comFunction';
import MyInviteComp from 'components/userCenter/MyInvite';

class MyInvite extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
      inviteInfo: [],
			info: [],
			inviteUrl: '', //邀请链接
      myPosterLink: '', //专属海报
		};
	}

  componentDidMount() {
    const token = getCookie('token');
    let query = {
      token: token
    };

    this.props.dispatch({
      type: userCenterSaga.getUserInfo,
      payload: {
        query,
        success: data => {
          this.setState({
            info: data.info.user_info,
            inviteUrl: `${window.location.origin}/register?inviter=${data.info.user_info.invite_code}`,
            myPosterLink: `https://fortop.one/share/?inviteCode=${data.info.user_info.invite_code}`
          });
        },
        fail: this.fail,
        error: this.error
      }
    });

    this.props.dispatch({
      type: userCenterSaga.getInviteInfo,
      payload: {
        query,
        success: data => {
          this.setState({
            inviteInfo: data.data
          });
        },
        fail: this.fail,
        error: this.error
      }
    });
  }

	fail = () => {
		this.props.history.push('login');
	};

	error = () => {
		const {
			intl: { formatMessage }
		} = this.props;
		topToast(formatMessage({ id: 'serverError' }));
	};

	_onOpenChange = () => {
		this.setState({ open: !this.state.open });
	};

	render() {
		const { open, inviteInfo, inviteUrl, myPosterLink } = this.state;
		return (
			<div>
				<MyInviteComp
					inviteUrl={inviteUrl}
          myPosterLink={myPosterLink}
					_onOpenChange={this._onOpenChange}
					_open={open}
          inviteInfo={inviteInfo}
				/>
			</div>
		);
	}
}

export default connect()(injectIntl(MyInvite));
