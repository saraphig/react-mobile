import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './register.scss';
import Header from 'components/comComponent/header/Header';
import MiddleContent from 'components/comComponent/middleContent/MiddleContent';
import { MidText, Input, Button, BottomTips } from '../comComponent/common';

class RegisterComp extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		return (
			<div className="register">
				<Header />
				<div className="middleContent">
					<MidText
						text="手机绑定"
						style={{
							marginTop: 64,
							marginBottom: 10
						}}
					/>
					<Input placeholder="手机号码" />
					<Input placeholder="输入验证码" types={1} text='发送验证码'/>
					<Input placeholder="推荐码(选填)" />
					<Button style={{ marginTop: 30 }} buttonText="下一步" />
					<BottomTips
						BottomTips1="尚未注册"
						BottomTips2="立即注册"
						style={{ marginTop: 138 }}
						pathName="/login"
					/>
				</div>
			</div>
		);
	}
}

export default injectIntl(RegisterComp);
