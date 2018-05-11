import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './confirmEmail.scss';
import Header from 'components/comComponent/header/Header';
import {
	MidText,
	Input,
	Buttons,
	BottomTips,
	ServerTips,
	Validate
} from '../comComponent/common';

class ConfirmEmailComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			validate: '798689'
		}
	}

	componentDidMount() {}

	_onClickBTn(){
		this.props._onClickBTn(this.state.validate)
	}

	render() {
		return (
			<div className="confirmEmail">
				<Header />
				<div className="confirmEmail-middleContent">
					<MidText
						text="邮箱验证"
						className="midText-confirmEmail-transfrom"
					/>
					<Validate className="validate-confirmEmail-transfrom" />
					<Buttons
						className="buttons-confirmEmail-transfrom"
						buttonText="完成"
						_onClick={() => this._onClickBTn()}
					/>
					<BottomTips
						className="bottomTips-confirmEmail-transfrom"
						BottomTips1="没收到验证码"
						BottomTips2="重新发送"
						pathName="/#"
					/>
				</div>
			</div>
		);
	}
}

export default injectIntl(ConfirmEmailComp);
