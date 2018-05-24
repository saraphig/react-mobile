import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Icon } from 'antd-mobile';

import './agreement.scss';
class Agreement extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="container">
				{/* <p className="content-title">
					<Icon type="cross" className="icon icon-cross" size="lg" onClick={this.props._onClick}/>
					<span className="title">
						<FormattedMessage id={'agreement.theme'} />
					</span>
					<Icon className="icon icon-cross" size="lg" />
				</p> */}
				<div className="container-wrapper">
					<div className="item">
						<div className="title introduce">
							<FormattedMessage id="agreement.introduce1" />
						</div>
						<div className="title introduce">
							<FormattedMessage id="agreement.introduce2" />
						</div>
						<div className="title introduce">
							<FormattedMessage id="agreement.introduce3" />
						</div>
					</div>
					<div className="item">
						<div className="titles">
							<FormattedMessage id="agreement.p1" />
						</div>
						<div className="content">
							<FormattedMessage id="agreement.p1.c1" />
						</div>
						<div className="content">
							<FormattedMessage id="agreement.p1.c2" />
						</div>
					</div>
					<div className="item">
						<div className="titles">
							<FormattedMessage id="agreement.p2" />
						</div>
						<div className="content duan">
							<FormattedMessage id="agreement.p2_1" />
						</div>
						<div className="content">
							<FormattedMessage id="agreement.p2_1.content" />
						</div>
						<div className="content duan">
							<FormattedMessage id="agreement.p2_2" />
						</div>
						<div className="content">
							<FormattedMessage id="agreement.p2_2.content" />
						</div>
						<div className="content duan">
							<FormattedMessage id="agreement.p2_3" />
						</div>
						<div className="content">
							<FormattedMessage id="agreement.p2_3.content" />
						</div>
						<div className="content duan">
							<FormattedMessage id="agreement.p2_4" />
						</div>
						<div className="content">
							<FormattedMessage id="agreement.p2_4.content" />
						</div>
					</div>
					<div className="item">
						<p className="titles">
							<FormattedMessage id="agreement.p3" />
						</p>
						<p className="content">
							<FormattedMessage id="agreement.p3_1.content" />
						</p>
					</div>
					<div className="item">
						<p className="titles ">
							<FormattedMessage id="agreement.p4" />
						</p>
						<p className="content ">
							<FormattedMessage id="agreement.p4_1.content" />
						</p>
						<p className="content">
							<FormattedMessage id="agreement.p4_2.content" />
						</p>
					</div>
					<div className="item">
						<p className="titles ">
							<FormattedMessage id="agreement.p5" />
						</p>
						<p className="content">
							<FormattedMessage id="agreement.p5_1.content" />
						</p>
						<p className="content">
							<FormattedMessage id="agreement.p5_2.content" />
						</p>
						<p className="content">
							<FormattedMessage id="agreement.p5_3.content" />
						</p>
					</div>
					<div className="item">
						<p className="titles ">
							<FormattedMessage id="agreement.p6" />
						</p>
						<p className="content">
							<FormattedMessage id="agreement.p6_1.content" />
						</p>
						<p className="content">
							<FormattedMessage id="agreement.p6_2.content" />
						</p>
						<p className="content">
							<FormattedMessage id="agreement.p6_3.content" />
						</p>
						<p className="content">
							<FormattedMessage id="agreement.p6_4.content" />
						</p>
						<p className="content">
							<FormattedMessage id="agreement.p6_5.content" />
						</p>
					</div>
					<div className="item">
						<p className="titles ">
							<FormattedMessage id="agreement.p7" />
						</p>
						<p className="content">
							<FormattedMessage id="agreement.p7.content" />
						</p>
					</div>
				</div>
				{/* <Buttons
					buttonText={btnText}
					className="close"
					_onClick={showAgreement}
				/> */}
			</div>
		);
	}
}

export default injectIntl(Agreement);
