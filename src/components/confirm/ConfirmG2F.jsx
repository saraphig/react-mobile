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
    const {
      intl: { formatMessage }
    } = this.props;
		return (
			<div className="confirmG2f">
				<Header />
				<div className="confirmG2f-middleContent">
					<MidText text={formatMessage({id: 'public.validate'})} className="midText-transfrom" />
					<Input placeholder={formatMessage({id: 'public.enterValidate'})} />
					<Buttons className="buttons-transform" buttonText={formatMessage({id: 'depositWithdraw.submit'})} />
				</div>
			</div>
		);
	}
}

export default injectIntl(ConfirmG2FComp);
