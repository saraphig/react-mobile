import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './login.scss';
import Header from 'components/comComponent/header/Header';
import MiddleContent from 'components/comComponent/middleContent/MiddleContent';

class LoginComp extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		return (
			<div className="login">
				<Header />
				<MiddleContent types='login' text='欢迎登录'/>
			</div>
		);
	}
}

export default injectIntl(LoginComp);
