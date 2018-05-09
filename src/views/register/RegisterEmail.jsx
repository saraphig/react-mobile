import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { actionType as loginSaga } from 'models/sagas/login.js';
import RegisterEmailComp from 'components/register/RegisterEmail';

class RegisterEmail extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// this.props.dispatch({
		//     type: loginSaga.setToken,
		//     paylod: '3245353'
		// })
		// console.log(this.props.token);
	}

	//按钮提交跳转事件
	_onClickBTn = () => {
		console.log(this.props);
		//TODO: for the featrue
		this.props.history.push('/confirmEmail');
	};

	render() {
		return (
			<div>
				<RegisterEmailComp _onClickBTn={this._onClickBTn}/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	token: state.login.token
});

// export default Index;
export default connect(mapStateToProps)(injectIntl(RegisterEmail));
