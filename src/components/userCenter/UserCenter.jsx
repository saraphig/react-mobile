import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './userCenter.scss';
import Header from 'components/comComponent/header/Header';
import Drawers from 'components/container/Drawers';
import { Modal } from 'antd-mobile';
// import AlertModal from 'components/container/AlertModal';
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
			modal1: false
		};
	}

	componentDidMount() {
		// console.log(this.props._allProps);
	}

	_onClickListItem(type) {
		switch (type) {
			case 'myInvite':
				this.props._allProps.history.push('myInvite');
				break;
			default:
				this.showModal();
				break;
		}
	}

	showModal = e => {
		// e.preventDefault(); // 修复 Android 上点击穿透
		this.setState({
			modal1: true
		});
	};

	_onClickAlert = () => {
		this._onClose();
	};

	_onClose = () => {
		this.setState({
			modal1: false
		});
	};

	_onWrapTouchStart = e => {
		// fix touch to scroll background page on iOS
		if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
			return;
		}
		const pNode = closest(e.target, '.am-modal-content');
		if (!pNode) {
			e.preventDefault();
		}
	};

	render() {
		let content = (
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
					_onClick={this._onClickListItem.bind(this, 'myInvite')}
				/>
				<WhiteBlock />
				<ListItem
					classNameItemline="item-line"
					svg={[
						<img key={1} src={require('assets/images/G2F.png')} />
					]}
					title={<FormattedMessage id="userCenter.validate" />}
					_onClick={this._onClickListItem.bind(this)}
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
					_onClick={this._onClickListItem.bind(this)}
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
					_onClick={this._onClickListItem.bind(this)}
				/>
				{/* <Modal
					visible={this.state.modal1}
					transparent
					maskClosable={false}
					onClose={this.onClose()}
					title="Title"
					footer={[
						{
							text: 'Ok',
							onPress: () => {
								console.log('ok');
								this.onClose()();
							}
						}
					]}
					wrapProps={{ onTouchStart: this.onWrapTouchStart }}
				>
					
				</Modal> */}
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
					<Modal
						visible={this.state.modal1}
						transparent
						maskClosable={false}
						onClose={this._onClose}
						wrapProps={{
							onTouchStart: this._onWrapTouchStart
						}}
					>
						<AlertModal
							isOpen={this.state.modal1}
							_onClick={this._onClickAlert}
						/>
					</Modal>
				</div>
			</div>
		);
	}
}

export default injectIntl(UserCenterComp);
