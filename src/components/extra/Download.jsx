import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './download.scss';
import Header from 'components/comComponent/header/Header';
import Drawers from 'components/container/Drawers';
import { Buttons } from '../comComponent/common';

class DownloadComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			downLoadUrl: '',
			msg: false, //是否为微信浏览器
			msgTips: null,
      isChrome: ''
		};
	}

	componentDidMount() {
		// this.start();
		//设备识别;
		let u = navigator.userAgent;

		let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
		let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
		let isMsg = /micromessenger/.test(u.toLowerCase());
		let isChrome = u.toLowerCase().indexOf("chrome") !== -1;  //谷歌浏览器
		// let isqq = u.match(/\sQQ/i) == 'qq';
		// let isqq = /qq/.test(u.toLowerCase());
		this.setState({isChrome});
		switch (true) {
			case isAndroid:
				this.setState({
					downLoadUrl:
						`${window.location.origin}` +
						'/lib/download/androidapp/TOPONE.apk'
				});
				if (isMsg) {
					this.setState({
						msg: true
					});
				}

				break;
			case isiOS:
				this.setState({
					downLoadUrl:
						'itms-services://?action=download-manifest&url=' +
						`${window.location.origin}` +
						'/lib/download/iosapp/manifest.plist'
				});
				if (isMsg) {
					this.setState({
						msg: true
					});
				}
				break;
			default:
				break;
		}
	}

	render() {
		const {
			intl: { formatMessage }
		} = this.props;
    let box = (<Buttons
        buttonText={formatMessage({ id: 'download.install' })}
        _onClick={() => {
        	window.open(this.state.downLoadUrl);
          // window.location.href = this.state.downLoadUrl
        }}
        className="download-btn"
      />);
    alert(navigator.userAgent);
    alert(this.state.isChrome);
    if(this.state.isChrome){
    	box = (<a
        href={this.state.downLoadUrl}
        download={true}
        className="download-btn"
      >
        {formatMessage({ id: 'download.install' })}
      </a>);
		}
		return (
			<div className="download-page">
				<div className="download-middleContent">
					<img
						className="download-phone"
						src={require('assets/images/iphone@2x.png')}
					/>
					<img
						src={require('assets/images/TOP.ONE@2x.png')}
						className="download-logo"
					/>
					{this.state.msg ? (
						<img
							className="download-tips"
							src={require('assets/images/tips@2x.png')}
						/>
					) : null}
				</div>
				<div className="download-info">
					<p className="download-version">Version：1.0.0</p>
					<p className="update-time">
						{formatMessage({ id: 'download.update' })}：2018-05-30
						14:00
					</p>
				</div>
				{!this.state.msg ?
						box
					/*!isChrome ?
						(<Buttons
						buttonText={formatMessage({ id: 'download.install' })}
						_onClick={() => {
							// window.open(this.state.downLoadUrl);
							window.location.href = this.state.downLoadUrl
						}}
						className="download-btn"
					/>) :
						(<a
						href={this.state.downLoadUrl}
						download={true}
						className="download-btn"
					>
						{formatMessage({ id: 'download.install' })}
					</a>)
				)*/ : (
					<span className="download-btn-disabled">
						{formatMessage({ id: 'download.install' })}
					</span>
				)}
			</div>
		);
	}
}

export default injectIntl(DownloadComp);
