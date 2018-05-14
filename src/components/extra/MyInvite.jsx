import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './myInvite.scss';
import Header from 'components/comComponent/header/Header';
import Drawers from 'components/container/Drawers';
import {
	MidText,
	Input,
	Buttons,
	BottomTips,
	ServerTips,
	Validate,
	Navbars
} from '../comComponent/common';
import QRCode from 'qrcode-react';

class MyInviteComp extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		const {
			intl: { formatMessage },
			TGroup,
			info
		} = this.props;

		const content = (
			<div>
				<Navbars
					title={formatMessage({
						id: 'userCenter.inviteFriends'
					})}
					className="myInvite-title"
					_rightContent={[
						<img
							key="1"
							src={require('assets/images/friend.png')}
						/>
					]}
				/>
				<div className="myInvite-content">
					<span>
						<span className="myInvite-url" id="foo">
							{this.props.inviteUrl}
						</span>
					</span>
					<Buttons
						className="myInvite-btn-copy"
						buttonText={formatMessage({
							id: 'candyDetail.copy'
						})}
						_onClick={this.props._onClick}
            data-clipboard-target="#foo"
					/>
				</div>
				<Navbars
					title={formatMessage({
						id: 'candyDetail.inviteFriends'
					})}
					className="myInvite-title invite-friend"
					_rightContent={[
						<img key="1" src={require('assets/images/erwei.png')} />
					]}
				/>
				<div className="myInvite-friend-content ">
					<span className="myInvite-content-code">
            <QRCode value={this.props.inviteUrl}/>
						{/*<img
							src={require('assets/images/code.png')}
							alt={formatMessage({
								id: 'candyDetail.qrDode'
							})}
						/>*/}
					</span>
				</div>
				<div className="myInvite-content-items">
					<div className="myInvite-item">
						<div className="myInvite-item-T">T1</div>
						<div className="myInvite-item-num">{TGroup.m1}</div>
					</div>
					<div className="myInvite-item">
						<div className="myInvite-item-T">T2</div>
						<div className="myInvite-item-num">{TGroup.m2}</div>
					</div>
					<div className="myInvite-item">
						<div className="myInvite-item-T">T3</div>
						<div className="myInvite-item-num">{TGroup.m3}</div>
					</div>
					<div className="myInvite-item">
						<div className="myInvite-item-T">T4</div>
						<div className="myInvite-item-num">{TGroup.m4}</div>
					</div>
					<div className="myInvite-item">
						<div className="myInvite-item-T">T5</div>
						<div className="myInvite-item-num">{TGroup.m5}</div>
					</div>
				</div>
				<div className="myInvite-content-introduce">
					<p className="myInvite-content-introduce-name">
						{formatMessage({ id: 'candy.detail' })}
					</p>
					<ol className="myInvite-content-introduce-detail">
						<li className="myInvite-content-introduce-detail-item">
							{formatMessage({
								id: 'candy.detail.first'
							})}
						</li>
						<li className="myInvite-content-introduce-detail-item">
							{formatMessage({
								id: 'candy.detail.second'
							})}
						</li>
						<li className="myInvite-content-introduce-detail-item">
							{formatMessage({
								id: 'candy.detail.third'
							})}
						</li>
						<li className="myInvite-content-introduce-detail-item">
							{formatMessage({
								id: 'candy.detail.fourth'
							})}
						</li>
						<li className="myInvite-content-introduce-detail-item">
							{formatMessage({
								id: 'candy.detail.fifth'
							})}
						</li>
						<li className="myInvite-content-introduce-detail-item">
							{formatMessage({
								id: 'candy.detail.sixth'
							})}
						</li>
					</ol>
				</div>
			</div>
		);
		return (
			<div className="myInvite">
				<div className="myInvite-bg">
					<Header
						className="myInvite-header"
						_onClick={this.props._onOpenChange}
					/>
					{/* <Drawer
						className="my-drawer"
						style={{
							minHeight: document.documentElement.clientHeight
						}}
						enableDragHandle={true}
						dragToggleDistance={0}
						position="right"
						sidebar={sidebars}
						open={this.props._open}
						onOpenChange={this.props._onOpenChange}
						sidebarStyle={{ background: '#1B1B1B' }}
					/> */}
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

export default injectIntl(MyInviteComp);
