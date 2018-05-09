import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { actionType as loginSaga } from 'models/sagas/login.js';
import RegisterComp from 'components/register/Register';

class Register extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	//按钮提交跳转事件
	_onClickBTn = () => {
		console.log(this.props);
		//TODO: for the featrue
		this.props.history.push('/registerEmail');
	};

	render() {
		return (
			<div>
				<RegisterComp _onClickBTn={this._onClickBTn} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	token: state.login.token
});

// export default Index;
export default connect(mapStateToProps)(injectIntl(Register));
