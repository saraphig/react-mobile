import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import './middleContent.scss';
import { midText } from '../common';

class MiddleContent extends React.Component {
	constructor(props) {
		super();
		this.state = {};
	}

	render() {
		let text = this.props.text;
		return (
			<div>
				<div className="middleContent">
					{this.props.types === 'login' ? (
						<p className="middleContent-img-logo">
							<img
								className="middleContent-logo"
								src={require('assets/images/TOP.ONE@logo.png')}
								alt="top.one"
							/>
						</p>
					) : null}
					{midText(text)}
				</div>
			</div>
		);
	}
}
export default injectIntl(MiddleContent);
