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
import Drawers from 'components/container/Drawers';

class ConfirmEmailComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// validate: '798689'
      validate: ''
		};
	}

	componentDidMount() {}

	_onClickBTn() {
		// alert(this.state.validate);
		this.props._onClickBTn(this.state.validate);
	}

	render() {
		const {
			intl: { formatMessage }
		} = this.props;

		const content = (
			<div className="confirmEmail-middleContent">
				<MidText
					text={formatMessage({
						id: 'withdrawVerify.validate'
					})}
					className="midText-confirmEmail-transfrom"
				/>
				<Validate
					className="validate-confirmEmail-transfrom"
					onChange={val => {
						console.log(val);
						this.setState({ validate: val });
					}}
				/>
				<Buttons
					className="buttons-confirmEmail-transfrom"
					buttonText={formatMessage({ id: 'public.sure' })}
					_onClick={() => this._onClickBTn()}
				/>
				<BottomTips
					className="bottomTips-confirmEmail-transfrom"
					BottomTips1={formatMessage({ id: 'noValidate' })}
					BottomTips2={formatMessage({
						id: 'resendEmail.resend'
					})}
          onClick={() => { this.props.resendEmail() }}
					// pathName="/#"
				/>
			</div>
		);
		return (
			<div className="confirmEmail">
				<Header _onClick={this.props._onOpenChange} />
				<Drawers
					childrenNode={content}
					_onOpenChange={this.props._onOpenChange}
					_open={this.props._open}
				/>
			</div>
		);
	}
}

export default injectIntl(ConfirmEmailComp);
