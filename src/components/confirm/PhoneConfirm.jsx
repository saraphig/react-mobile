import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './phoneConfirm.scss';
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
			<div className="phoneConfirm">
				<Header />
				<div className="phoneConfirm-middleContent">
					<MidText
						text={formatMessage({id: 'phoneConfirm'})}
						className="midText-phoneConfirm-transfrom"
					/>
					<Input placeholder={formatMessage({id: 'register.phone'})} />
					<Input
						placeholder={formatMessage({id: 'register.phoneValidate'})}
						types={1}
						text={formatMessage({id: 'register.postPhoneValidate'})}
					/>
					<Buttons className="buttons-phoneConfirm-transform" buttonText={formatMessage({id: 'depositWithdraw.submit'})} />
				</div>
			</div>
		);
	}
}

export default injectIntl(ConfirmG2FComp);
