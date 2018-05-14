import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './userCenter.scss';
import Header from 'components/comComponent/header/Header';
import Drawers from 'components/container/Drawers';
import { connect } from 'react-redux';
import {
	MidText,
	Navbars,
	UserTop,
	WhiteBlock,
	ListItem,
	SwitchItem,
} from '../comComponent/common';

class UserCenterComp extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount(){

	}
	componentDidMount() {

	}
    _onClick = () => {
		window.location.href = '/myinvite';
	}
	render() {
		const content = (
			<div>
				<UserTop
					info={this.props.info}
				/>
				<WhiteBlock />
				<SwitchItem
					classNameList="switch-list"
					className="switch-item"
                    _topForFeeSwitch={this.props._topForFeeSwitch}
                    _isTopForFee={this.props._isTopForFee}
				/>
				<WhiteBlock />
				<ListItem
					classNameItemline="first-item-line"
					title={<FormattedMessage id="userCenter.inviteFriends" />}
                    inviterCode={this.props.info}
                    _onClick={this._onClick}
				/>
				<WhiteBlock />
				<ListItem
					classNameItemline="item-line"
					svg={[
						<img key={1} src={require('assets/images/G2F.png')} />
					]}
					title={<FormattedMessage id="userCenter.validate" />}
                    googleValidate={this.props.info}
                    _onClick={this._onClick}
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
                    _onClick={this._onClick}
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
                    _onClick={this._onClick}
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
export function mapStateToProps(state) {
    return {
        info: state.userCenter.info,
    };
}
export default connect(mapStateToProps)(injectIntl(UserCenterComp));
