import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './userCenter.scss';
import Header from 'components/comComponent/header/Header';
import Drawers from 'components/container/Drawers';
import { topToast } from 'utils/comFunction';
import { connect } from 'react-redux';
import { Modal } from 'antd-mobile';
import {
	MidText,
	Navbars,
	UserTop,
	WhiteBlock,
	ListItem,
	SwitchItem,
	AlertModal
} from '../comComponent/common';
function closest(el, selector) {
	const matchesSelector =
		el.matches ||
		el.webkitMatchesSelector ||
		el.mozMatchesSelector ||
		el.msMatchesSelector;
	while (el) {
		if (matchesSelector.call(el, selector)) {
			return el;
		}
		el = el.parentElement;
	}
	return null;
}

class UserCenterComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal1: false,
			_isOpen: false
		};
	}
	componentWillMount() {}
	componentDidMount() {
		// console.log(this.props.token);
	}
	_onClick(type) {
		//let that = this;

		let that = this;
		if (this.props.token) {
			switch (type) {
				case 'invite':
					window.location.href = '/myInvite';
					break;
				default:
					// console.log(3242);
					that.showModal();
					break;
			}
		} else {
			topToast('请先登录');
		}
	}

	showModal() {
		this.setState({
			_isOpen: true
		});
	}

	_close = () => {
		this.setState({
			_isOpen: false
		});
		// console.log(4242);
	};

	render() {
		const content = (
			<div>
				<UserTop info={this.props.info} />
				<WhiteBlock />
				<SwitchItem
					classNameList="switch-list"
					className="switch-item"
					_topForFeeSwitch={this.props._topForFeeSwitch}
					_isTopForFee={this.props._isTopForFee}
					disabled={this.props._disabled}
				/>
				<WhiteBlock />
				<ListItem
					classNameItemline="first-item-line"
					title={<FormattedMessage id="userCenter.inviteFriends" />}
					inviterCode={this.props.info}
					_onClick={this._onClick.bind(this, 'invite')}
				/>
				<WhiteBlock />
				<ListItem
					classNameItemline="item-line"
					svg={[
						<img key={1} src={require('assets/images/G2F.png')} />
					]}
					title={<FormattedMessage id="userCenter.validate" />}
					googleValidate={this.props.info}
					_onClick={this._onClick.bind(this)}
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
					phoneValidate={this.props.info}
					_onClick={this._onClick.bind(this)}
				/>
				<ListItem
					classNameItemline="item-line last-item"
					svg={[
						<svg
							key={1}
							aria-hidden="true"
							className="item-line-G2F"
						>
							<use xlinkHref="#icon-mima1" />
						</svg>
					]}
					title={
						<FormattedMessage id="changeLoginPassword.changePassword" />
					}
					_onClick={this._onClick.bind(this)}
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
					<AlertModal
						isOpen={this.state._isOpen}
						_close={this._close}
					/>
				</div>
			</div>
		);
	}
}
export function mapStateToProps(state) {
	return {
		info: state.userCenter.info
	};
}
export default connect(mapStateToProps)(injectIntl(UserCenterComp));
