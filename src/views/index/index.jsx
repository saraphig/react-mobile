import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
// import wsRequest from 'utils/wsRequest';
import wsSocket from 'utils/webSocketUtil';
import IndexComp from 'components/index/index';


class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};

	}

	componentWillMount() {

	}

	componentDidMount() {

	}


	componentWillUnmount() {

	}






	render() {

		return (
			<div>
				{/* {box} */}
				<IndexComp  history={this.props.history}/>
			</div>
		);
	}
}

const mapStateToProps = state => ({

});

// export default Index;
export default connect(mapStateToProps)(injectIntl(Index));
