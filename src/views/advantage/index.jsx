import React from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
// import wsRequest from 'utils/wsRequest';
import AdvantageComp from 'components/advantage/index';

// const wsURL = url.websocketUri;

class Advantage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div>
				<AdvantageComp   history={this.props.history}/>
			</div>
		);
	}
}



// export default Index;
export default injectIntl(Advantage);
