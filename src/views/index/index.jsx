import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { actionType as loginSaga } from 'models/sagas/login.js';
import IndexComp from 'components/index/Index';

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.props.dispatch({
			type: loginSaga.setToken,
			payload: '3245353'
		});
	}

	componentDidMount() {
		// 挂载完成

	}

	componentWillReceiveProps(nextprops) {
		// 接收到nextprops触发
		// console.log('==',nextprops.token)
	}

	test() {
		this.props.dispatch({
			type: loginSaga.setToken,
			payload: '3245353'
		});
	}

	_onClickMenu = () => {
		console.log(32452)
	};

	render() {
		const {
			intl: { formatMessage }
		} = this.props;
		return (
			<div>
				<IndexComp _onClickMenu={this._onClickMenu} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	token: state.login.token
});

// export default Index;
export default connect(mapStateToProps)(injectIntl(Index));
