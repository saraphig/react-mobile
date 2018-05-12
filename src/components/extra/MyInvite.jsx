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
	Navbars
} from '../comComponent/common';
import { Icon } from 'antd-mobile';

class MyInviteComp extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
    const {
      intl: { formatMessage }
    } = this.props;
		return (
			<div className="myInvite">
				<div className="myInvite-bg">
					<Header className="myInvite-header" />
					<Navbars
						title={formatMessage({id: 'userCenter.inviteFriends'})}
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
								buttonText={formatMessage({id: 'candyDetail.copy'})}
								_onClick={this.props._onClick}
							/>
						</span>
					</div>
					<Navbars
						title={formatMessage({id: 'candyDetail.inviteFriends'})}
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
								alt={formatMessage({id: 'candyDetail.qrDode'})}
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
              {formatMessage({id: 'candy.detail'})}
						</p>
						<ol className="myInvite-content-introduce-detail">
							<li className="myInvite-content-introduce-detail-item">
                {formatMessage({id: 'candy.detail.first'})}
							</li>
							<li className="myInvite-content-introduce-detail-item">
                {formatMessage({id: 'candy.detail.second'})}
							</li>
							<li className="myInvite-content-introduce-detail-item">
                {formatMessage({id: 'candy.detail.third'})}
							</li>
							<li className="myInvite-content-introduce-detail-item">
                {formatMessage({id: 'candy.detail.fourth'})}
							</li>
							<li className="myInvite-content-introduce-detail-item">
                {formatMessage({id: 'candy.detail.fifth'})}
							</li>
							<li className="myInvite-content-introduce-detail-item">
                {formatMessage({id: 'candy.detail.sixth'})}
							</li>
						</ol>
					</div>
				</div>
			</div>
		);
	}
}

export default injectIntl(MyInviteComp);
