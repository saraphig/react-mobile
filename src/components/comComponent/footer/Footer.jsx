import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import './index.scss';
class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentWillMount() {}

	componentWillUpdate() {}

	
	render() {
		
		return (
			<div className='home-footer modoular-top'>
						<div className='footer-content'>
							<div className='footer-code'>
								<div><img src={require('assets/images/weChat.png')}alt=""/></div>
								<p>扫码关注<br/>
									微信公众号</p>
							</div>
							<div className='footer-code'>
								<div><img src={require('assets/images/customer-service.png')} alt=""/></div>
								<p>扫码添加<br/>
									客服微信</p>
							</div>
							<div className='clearfix'></div>
							<div className='footer-email'>
								<i className='iconfont icon-youxiangtubiao'></i><span>market@waterblock.io</span>
							</div>
							<div className='footer-content-bottom'>
					©COPYRIGHT ©2018 WATERBLOCK.IO 
					</div>
						</div>
						
			</div>
		);
	}
}



export default injectIntl(Footer);

