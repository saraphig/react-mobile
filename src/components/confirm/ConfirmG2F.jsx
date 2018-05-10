import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './confirmG2f.scss';
import Header from 'components/comComponent/header/Header';
import {
	MidText,
	Input,
	Buttons,
	BottomTips,
	ServerTips,
	Validate
} from '../comComponent/common';

class ConfirmG2FComp extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		return (
			<div className="confirmG2f">
				<Header />
				<div className="confirmG2f-middleContent">
					<MidText text="谷歌验证" className="midText-transfrom" />
					<Input placeholder="谷歌验证码" />
					<Buttons className="buttons-transform" buttonText="提交" />
				</div>
			</div>
		);
	}
}

export default injectIntl(ConfirmG2FComp);
