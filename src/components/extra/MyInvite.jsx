import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './myInvite.scss';
import Header from 'components/comComponent/header/Header';
import {
	MidText,
	Input,
	Buttons,
	BottomTips,
	ServerTips,
	Validate,
	Navbars,
	sidebars
} from '../comComponent/common';
import { Icon, Drawer } from 'antd-mobile';

class MyInviteComp extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		return (
			<div className="myInvite">
				<div className="myInvite-bg">
					<Header className="myInvite-header" _onClick={this.props._onOpenChange}/>
					<Drawer
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
					>
						<Navbars
							title="我的邀请"
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
								<span className="myInvite-url">
									{this.props.inviteUrl}
								</span>
							</span>
							<span className="myInvite-url-btn">
								<Buttons
									className="myInvite-btn-copy"
									buttonText="复制"
									_onClick={this.props._onClick}
								/>
							</span>
						</div>
						<Navbars
							title="邀请好友"
							className="myInvite-title invite-friend"
							_rightContent={[
								<img
									key="1"
									src={require('assets/images/erwei.png')}
								/>
							]}
						/>
						<div className="myInvite-friend-content ">
							<span className="myInvite-content-code">
								<img
									src={require('assets/images/code.png')}
									alt="二维码"
								/>
							</span>
						</div>
						<div className="myInvite-content-items">
							<div className="myInvite-item">
								<div className="myInvite-item-T">T1</div>
								<div className="myInvite-item-num">100</div>
							</div>
							<div className="myInvite-item">
								<div className="myInvite-item-T">T2</div>
								<div className="myInvite-item-num">100</div>
							</div>
							<div className="myInvite-item">
								<div className="myInvite-item-T">T3</div>
								<div className="myInvite-item-num">100</div>
							</div>
							<div className="myInvite-item">
								<div className="myInvite-item-T">T4</div>
								<div className="myInvite-item-num">100</div>
							</div>
							<div className="myInvite-item">
								<div className="myInvite-item-T">T5</div>
								<div className="myInvite-item-num">100</div>
							</div>
						</div>
						<div className="myInvite-content-introduce">
							<p className="myInvite-content-introduce-name">
								活动细则
							</p>
							<ol className="myInvite-content-introduce-detail">
								<li className="myInvite-content-introduce-detail-item">
									1.
									被邀请人及其邀请的用戶成功完成的每笔交易，您均可获得其交易手续费的15%作为奖励。
								</li>
								<li className="myInvite-content-introduce-detail-item">
									2. 好友通过邀请链接完成注册计入邀请数。
								</li>
								<li className="myInvite-content-introduce-detail-item">
									3.
									预注册及返利活动的时间及奖励比例未來將会根据实际情况进行调整。
								</li>
								<li className="myInvite-content-introduce-detail-item">
									4. 同一用户仅能被邀请一次。
								</li>
								<li className="myInvite-content-introduce-detail-item">
									5.
									重复或虚假账户，以及共享自己的行为，一经发现，将不会支付返佣。
								</li>
								<li className="myInvite-content-introduce-detail-item">
									6. TOP.ONE
									保留法律范围内允许的对活动的解释权。
								</li>
							</ol>
						</div>
					</Drawer>
				</div>
			</div>
		);
	}
}

export default injectIntl(MyInviteComp);
