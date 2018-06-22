import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Icon } from 'antd-mobile';
import './404.scss';
class WithPcOpen extends React.Component {

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.props.history.push('/index');
    }, 5000);
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    return (
      <div className="container">
        <p className="content-title">
          <Icon
            type="left"
            className="icon icon-left"
            size="lg"
            onClick={() => { this.props.history.push("/login") }}
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
              <FormattedMessage id={'withPcOpen.fromPc'} />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default injectIntl(WithPcOpen);
