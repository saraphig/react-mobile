import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import './header.scss';
import { getCookie } from 'utils/comFunction';

class Header extends React.Component {
	constructor(props) {
		super();
		const token = getCookie('token');
		this.state = {
			token: token
		};
	}

	render() {
		const {
			intl: { formatMessage }
		} = this.props;
		let box1,
			box2 = null;
		if (!this.state.token) {
			box1 = (
				<div>
					<Link to="/login" className={`${window.location.href.indexOf('login')>-1?'active':null} header-login`}>
						{formatMessage({ id: 'public.login' })}
					</Link>
				</div>
			);
			box2 = (
				<div>
					<Link to="/register" className={`${window.location.href.indexOf('register')>-1?'active':null} header-register`}>
						{formatMessage({ id: 'login.register' })}
					</Link>
				</div>
			);
		}
		return (
			<div>
				<div className={`header ${this.props.className}`}>
					<span className="header-left">
						<img
							className="header-topone"
							src={require('assets/images/TOP.ONE@2x.png')}
							alt="top.one"
						/>
					</span>
					<span className="header-right">
						{/* <Link to="/login" className="header-login">{formatMessage({id: 'public.login'})}</Link>
						<Link to="/register" className="header-register">{formatMessage({id: 'login.register'})}</Link> */}
						{box1 || <span className="header-login" />}
						{box2 || <span className="header-register" />}
						<span className="header-menus">
							<img
								className="header-menu"
								src={require('assets/images/menu@2x.png')}
								alt="menu"
								onClick={this.props._onClick}
							/>
						</span>
					</span>
				</div>
			</div>
		);
	}
}
export default injectIntl(Header);
