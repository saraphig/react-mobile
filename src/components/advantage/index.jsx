import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import Header from 'components/comComponent/header/Header';
import Footer from 'components/comComponent/footer/Footer';
import '../../../lib/iconfont/iconfont.js'

import './index.scss';

class IndexComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	componentWillUpdate() {
	}
	componentDidMount() {
		// 取消原生滚动，因为antd的滚动和原生冲突
		document.body.className = 'body-no-scroll';
	}
	componentWillUnmount() {
	}
	clickNav = (id) => {
		this.props.history.push({
			pathname: '/index',
			state: { indexid: id }
		})
	}
	render() {

		return (
			// ${this.state.finishdata}
			<div>
				<Header clickNav={this.clickNav} />

				{/*bannner*/}




				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	// token: state.login.token,
	// market: state.trade.market,
	// marketData: state.trade.marketData,

});

export default connect(mapStateToProps)(injectIntl(IndexComp));
