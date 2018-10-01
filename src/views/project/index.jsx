import React from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
// import wsRequest from 'utils/wsRequest';
import ProjectComp from 'components/project/index';

// const wsURL = url.websocketUri;

class Project extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};

	}

	
	render() {
		return (
			<div>
				
				<ProjectComp   history={this.props.history}/>
			</div>
		);
	}
}



// export default Index;
export default injectIntl(Project);
