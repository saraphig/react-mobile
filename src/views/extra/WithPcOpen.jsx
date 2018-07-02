import React from 'react';
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl';
import WithPcOpenComp from 'components/extra/WithPcOpen';

class WithPcOpen extends React.Component {

  render() {
    return (
      <div>
        <WithPcOpenComp history={this.props.history}/>
      </div>
    );
  }
}

export default connect()(injectIntl(WithPcOpen));
