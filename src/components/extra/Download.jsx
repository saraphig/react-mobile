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
			msg: false,
			msgTips: null
		};
	}

	componentDidMount() {
		// this.start();
		//设备识别;
		let u = navigator.userAgent;
		console.log(u);
		let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
		let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
		let isMsg =
			u.indexOf('MicroMessenger') > -1 ||
			u.match(/MicroMessenger/i) === 'MicroMessenger';

		switch (true) {
			case isAndroid:
				console.log(23);
				this.setState({
					downLoadUrl:
						`${window.location.origin}` +
						'/lib/download/androidapp/TOPONE.apk'
				});
				break;
			case isiOS:
				console.log(45);
				this.setState({
					downLoadUrl:
						'itms-services://?action=download-manifest&url=' +
						`${window.location.origin}` +
						'/lib/download/iosapp/manifest.plist'
				});
				break;
			case isMsg:
				console.log(67);
				this.setState({
					msg: true,
					msgTips: (
						<div style={{ color: '#fff', fontSize: 15 }}>
							请前往浏览器中打开
						</div>
					)
				});
				break;
			default:
				break;
		}
	}

	_onClick = () => {
		console.log(32);
	};

	render() {
		const {
			intl: { formatMessage }
		} = this.props;

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
				</div>
				<div className="download-info">
					<p className="download-version">Version：1.0.0</p>
					<p className="update-time">
						{formatMessage({ id: 'download.update' })}：2018-05-30
						14:00
					</p>
				</div>
				<Buttons
					buttonText={formatMessage({ id: 'download.install' })}
					_onClick={() => {
						window.open(this.state.downLoadUrl, '_blank');
					}}
					className="download-btn"
				/>
			</div>
		);
	}
}

export default injectIntl(DownloadComp);