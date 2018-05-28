import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Icon } from 'antd-mobile';
import { localeList, setLang } from '../../config';
import './404.scss';
class NotFound extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				<p className="content-title">
					<Icon
						type="left"
						className="icon icon-left"
						size="lg"
						onClick={this.props._onClick}
					/>
					<span className="title">404</span>
					<Icon className="icon icon-cross" size="lg" />
				</p>
				<div className="content-mid">
					<img
						className="page-404"
						src={require('assets/images/satoshi.png')}
						alt="404"
					/>
					<div className="content-mid-text">
						<p className="text-one">
							<FormattedMessage id={'404.tips1'} />
						</p>
						<p>
							<FormattedMessage id={'404.tips2'} />
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default injectIntl(NotFound);
