import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import TestComp from 'components/comComponent/ListView';

class Test extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// 挂载完成
	}

	componentWillReceiveProps(nextprops) {
		// 接收到nextprops触发
		console.log('==', nextprops.token);
	}

	render() {
		const {
			intl: { formatMessage }
		} = this.props;

		return (
			<div>
				<TestComp />
			</div>
		);
	}
}

// export default Index;
export default injectIntl(Test);
