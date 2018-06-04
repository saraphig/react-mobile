import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import Header from 'components/comComponent/header/Header';
import Drawers from 'components/container/Drawers';
import { Buttons } from '../comComponent/common';
import './download.scss';

class DownloadComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			downLoadUrl: '',
			msg: false, //是否为微信浏览器
			msgTips: null,
			isChrome: false,
			isXiaoMi: false,
			bgImg: '', //背景图片判断
			iconfont: '', //icon图标判断
			isIos: false, //是否为ios系统
			tutorialUrl: '' //下载教程地址
		};
	}

	componentDidMount() {
		// this.start();
		//设备识别;
		let u = navigator.userAgent;

		let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
		let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
		let isMsg = /micromessenger/.test(u.toLowerCase());
		let isChrome = u.toLowerCase().indexOf('chrome') !== -1; //谷歌浏览器
		let isXiaoMi = u.toLowerCase().indexOf('xiaomi') !== -1; //小米浏览器
		let lang = localStorage.getItem('language');
		// let isqq = u.match(/\sQQ/i) == 'qq';
		// let isqq = /qq/.test(u.toLowerCase());
		this.setState({ isChrome, isXiaoMi });
		switch (true) {
			case isAndroid:
				this.setState({
					downLoadUrl:
						`${window.location.origin}` +
						'/lib/download/androidapp/TOPONE.apk',
					bgImg: require('assets/images/android@2x.png'),
					iconfont: 'icon-anzhuo',
					isIos: false
				});
				this.tellTutorialUrl('android', lang);
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
						'/lib/download/iosapp/manifest.plist',
					bgImg: require('assets/images/iphone@2x.png'),
					iconfont: 'icon-pingguo',
					isIos: true
				});
				this.tellTutorialUrl('ios', lang);
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

	tellTutorialUrl(type, lang) {
		const tutorialAnZhUrl =
				'https://toponehelp.zendesk.com/hc/zh-cn/articles/360004318251',
			tutorialAnEnUrl =
				'https://toponehelp.zendesk.com/hc/en-us/articles/360004318251-How-to-install-TOP-ONE-Andriod-APP-',
			tutorialIosZhUrl =
				'https://toponehelp.zendesk.com/hc/zh-cn/articles/360004252692',
			tutorialIosEnUrl =
				'https://toponehelp.zendesk.com/hc/en-us/articles/360004252692';

		if (type == 'android') {
			switch (lang) {
				case 'zh':
					this.setState({
						tutorialUrl: tutorialAnZhUrl
					});
					break;
				case 'en':
					this.setState({
						tutorialUrl: tutorialAnEnUrl
					});
					break;
				default:
					break;
			}
		} else {
			switch (lang) {
				case 'zh':
					this.setState({
						tutorialUrl: tutorialIosZhUrl
					});
					break;
				case 'en':
					this.setState({
						tutorialUrl: tutorialIosEnUrl
					});
					break;
				default:
					break;
			}
		}
	}

	//点击去往下载教程
	_onClick = type => {
		window.open(this.state.tutorialUrl, '_blank');
	};

	render() {
		const {
			intl: { formatMessage }
		} = this.props;
		const { bgImg, iconfont, msg, isIos } = this.state;
		let box = (
			<Buttons
				buttonText={formatMessage({ id: 'download.install' })}
				_onClick={() => {
					// window.open(this.state.downLoadUrl);
					window.location.href = this.state.downLoadUrl;
				}}
				className="download-btn"
			/>
		);
		/* if(this.state.isChrome && this.state.isXiaoMi){
    	box = (<a
        href={this.state.downLoadUrl}
        download={true}
        className="download-btn"
      >
        {formatMessage({ id: 'download.install' })}
      </a>);
		}*/
		return (
			<div className="download-page">
				<div className="download-middleContent">
					<img className="download-phone" src={bgImg} />
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
				{!this.state.msg ? (
					box
				) : (
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
				)*/ <span className="download-btn-disabled">
						{formatMessage({ id: 'download.install' })}
					</span>
				)}
				<p
					className="download-tutorial"
					onClick={() => this._onClick()}
				>
					<i
						className={`iconfont ${iconfont}`}
						style={{ color: '#dcb276' }}
					/>
					{!isIos ? (
						<span>{formatMessage({ id: 'download.android' })}</span>
					) : (
						<span>{formatMessage({ id: 'download.ios' })}</span>
					)}
				</p>
			</div>
		);
	}
}

export default injectIntl(DownloadComp);
