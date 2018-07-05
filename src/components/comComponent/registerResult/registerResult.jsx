import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import Header from 'components/comComponent/header/Header';
import Drawers from 'components/container/Drawers';
import { MidText, Input, Buttons } from '../common';
import { Link } from 'react-router-dom';
import './registerResult.scss';

class RegisterResultComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			goUrl: '',
			btnLabel: '',
			showImg: '',
			registerStatus: '',
			showtips: '',
			showBtn: false
		};
	}

	componentDidMount() {}

	render() {
		let {
			intl: { formatMessage },
			_code,
			_displayType
		} = this.props;
		let {
			goUrl,
			btnLabel,
			showImg,
			registerStatus,
			showtips,
			showBtn
		} = this.state;

		switch (_displayType) {
			case 'error':
				showImg = require('assets/images/fail@2x.jpg');
				registerStatus = formatMessage({ id: 'errorPage.status' });
				showtips = formatMessage({ id: _code });
				break;
			case 'success':
				showImg = require('assets/images/success@2x.jpg');
				registerStatus = formatMessage({ id: 'successPage.status' });
				showtips = formatMessage({ id: _code });
				break;
			default:
				break;
		}

		switch (_code) {
			case 'code_30106':
				showBtn = true;
				goUrl = '/register';
				btnLabel = formatMessage({ id: 'register.goRegister' });
				break;
			case 'code_30107':
				showBtn = true;
				goUrl = '/resendEmail?type=1';
				btnLabel = formatMessage({ id: 'register.goSendEmail' });
				break;
			case 'code_30108':
				showBtn = true;
				goUrl = '/resendEmail?type=0';
				btnLabel = formatMessage({ id: 'register.goSendEmail' });
				break;
			case 'code_30105':
				showBtn = true;
				goUrl = '/login';
				btnLabel = formatMessage({ id: 'register.goLogin' });
				break;
			case 'code_30104':
				showBtn = true;
				goUrl = '/login';
				btnLabel = formatMessage({ id: 'register.goLogin' });
				break;
			default:
				break;
		}
		console.log(btnLabel);

		const content = (
			<div className="register-result-middleContent">
				<div className="middleContent-top">
					<img
						className="middleContent-top-img"
						src={showImg}
						alt={_displayType}
					/>
				</div>
				<div className="middleContent-bottom">
					<p className="middleContent-bottom-tips1">
						{registerStatus}
					</p>
					<p className="middleContent-bottom-tips2">{showtips}</p>
					{showBtn ? (
						<Link to={goUrl} className="buttons-confirm">
							<span>{btnLabel}</span>
						</Link>
					) : null}
				</div>
			</div>
		);

		return (
			<div className="register-result">
				<Header
					_onClick={this.props._onOpenChange}
					_open={this.props._open}
				/>
				<Drawers
					childrenNode={content}
					_onOpenChange={this.props._onOpenChange}
					_open={this.props._open}
				/>
			</div>
		);
	}
}

export default injectIntl(RegisterResultComp);
