import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { actionType as userCenterSaga } from 'models/sagas/userCenter';
import { getCookie } from 'utils/comFunction.js';
import MyInviteComp from 'components/extra/MyInvite';

class MyInvite extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			TGroup: []
		};
	}

	componentDidMount() {
		const token = getCookie('token');
		let query = {
			token: token
		};
		console.log(userCenterSaga);

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
					console.log(data);
					this.setState({
						info: data.data
					});
				},
				fail: this.fail,
				error: this.error
			}
		});
	}
	_onClick = () => {
		console.log(324);
	};

	_onOpenChange = () => {
		this.setState({ open: !this.state.open });
	};

	render() {
		const { open, TGroup } = this.state;
		return (
			<div>
				<MyInviteComp
					_onClick={this._onClick}
					inviteUrl="http://top.one/?inviter=5a6e91d30ac3dwefwkgnwiungowinfownfiufiofiuwbfiuqbf"
					_onOpenChange={this._onOpenChange}
					_open={open}
					TGroup={TGroup}
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
