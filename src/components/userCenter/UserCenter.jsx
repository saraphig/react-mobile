import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './userCenter.scss';
import Header from 'components/comComponent/header/Header';
import Drawers from 'components/container/Drawers';
import {
	MidText,
	Navbars,
	UserTop,
	WhiteBlock,
	ListItem,
	SwitchItem
} from '../comComponent/common';

class UserCenterComp extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		const content = (
			<div>
				<UserTop />
				<WhiteBlock />
				<SwitchItem
					classNameList="switch-list"
					className="switch-item"
					_onClick={this.props._onClick}
					_check={this.props._check}
				/>
				<WhiteBlock />
				<ListItem
					classNameItemline="first-item-line"
					title={<FormattedMessage id="userCenter.inviteFriends" />}
				/>
				<WhiteBlock />
				<ListItem
					classNameItemline="item-line"
					svg={[
						<img key={1} src={require('assets/images/G2F.png')} />
					]}
					title={<FormattedMessage id="userCenter.validate" />}
				/>
				<ListItem
					classNameItemline="item-line"
					svg={[
						<svg
							key={1}
							aria-hidden="true"
							className="item-line-G2F"
						>
							<use xlinkHref="#icon-phone" />
						</svg>
					]}
					title={<FormattedMessage id="userCenter.phoneValidate" />}
				/>
				<ListItem
					classNameItemline="item-line last-item"
					svg={[
						<svg
							key={1}
							aria-hidden="true"
							className="item-line-G2F"
						>
							<use xlinkHref="#icon-mima" />
						</svg>
					]}
					title={
						<FormattedMessage id="changeLoginPassword.changePassword" />
					}
				/>
			</div>
		);
		return (
			<div className="myWallet">
				<div className="myWallet-bg">
					<Header
						className="myWallet-header"
						_onClick={this.props._onOpenChange}
					/>
					<Drawers
						childrenNode={content}
						_onOpenChange={this.props._onOpenChange}
						_open={this.props._open}
					/>
				</div>
			</div>
		);
	}
}

export default injectIntl(UserCenterComp);
