import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './doubleConfirm.scss';
import Header from 'components/comComponent/header/Header';
import {
	MidText,
	Input,
	Buttons,
	BottomTips,
	ServerTips,
	Validate,
	TopTabs
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
			<div className="DoubleConfirm">
				<Header />
				<div className="doubleConfirm-middleContent">
					<MidText
						text={formatMessage({id: 'doubleConfirm'})}
						className="midText-doubleConfirm-transfrom"
					/>
					<TopTabs />
					<Buttons className="buttons-doubleConfirm-transform" buttonText={formatMessage({id: 'depositWithdraw.submit'})} />
				</div>
			</div>
		);
	}
}

export default injectIntl(ConfirmG2FComp);
