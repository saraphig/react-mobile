import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { actionType as loginSaga } from 'models/sagas/login.js';
import UserCenterComp from 'components/userCenter/UserCenter';

class UserCenter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			_check: true,
			open: false
		};
	}

	componentDidMount() {
		// this.props.dispatch({
		//     type: loginSaga.setToken,
		//     paylod: '3245353'
		// })
		console.log(this.props.token);
	}

	_onClick = () => {
		const { _check } = this.state;
		this.setState({
			_check: !_check
		});
	};

	//drawer
	_onOpenChange = () => {
		this.setState({ open: !this.state.open });
	};

	//点击item项
	_onClickListItem = type => {
		console.log(this.props);
	};

	render() {
		const { open } = this.state;
		return (
			<div>
				<UserCenterComp
					_onClick={this._onClick}
					_check={this.state._check}
					_onOpenChange={this._onOpenChange}
					_open={open}
					_onClickListItem={this._onClickListItem}
					_allProps={this.props}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	token: state.login.token
});

// export default Index;
export default connect(mapStateToProps)(injectIntl(UserCenter));
