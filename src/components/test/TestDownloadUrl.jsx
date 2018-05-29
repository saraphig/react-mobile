import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './testDownloadUrl.scss';
import { List, Item, Radio, Checkbox } from 'antd-mobile';
import Header from 'components/comComponent/header/Header';
import Drawers from 'components/container/Drawers';
import {
	MidText,
	Input,
	Buttons,
	BottomTips,
	ServerTips,
	Validate
} from '../comComponent/common';
// const Item = List.Item;
const RadioItem = Radio.RadioItem;

class Test extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
			downLoadUrl: ''
		};
	}

	componentDidMount() {
		let u = navigator.userAgent;
		let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
		let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
		if (isAndroid) {
			this.setState({
				downLoadUrl:
					`${window.location.origin}` +
					'/lib/opticaltransportnetwork/TOPONE.apk'
			});
		} else if (isiOS) {
			this.setState({
				downLoadUrl:
					'itms-services://?action=download-manifest&url=' +
					`${window.location.origin}` +
					'/lib/opticaltransportnetwork/manifest.plist'
			});
		}
	}

	onChange = value => {
		// console.log('checkbox');
		this.setState({
			value
		});
	};

	render() {
		const { value, downLoadUrl } = this.state;
		const {
			intl: { formatMessage }
		} = this.props;

		const data = [
			{
				value: 0,
				label: '中文',
				url: '../src/assets/images/china.png'
			},
			{
				value: 1,
				label: 'English',
				url: '../src/assets/images/english.png'
			}
		];

		const content = (
			<div className="chooseLanguage-middleContent">
				{/* <MidText
					text={formatMessage({ id: 'choiceLanguage' })}
					className="chooseLanguage-midText-transfrom"
				/>
				<div className="inform-items language-content">
					<List>
						{data.map(i => {
							return (
								<RadioItem
									key={i.value}
									checked={value === i.value}
									onChange={() => this.onChange(i.value)}
								>
									<img src={i.url} />
									{i.label}fqefqef
								</RadioItem>
							);
						})}
					</List>
				</div> */}
				<div
					style={{
						color: '#fff',
						fontSize: 18,
						display: 'flex',
						alignItems: 'center'
					}}
				>
					<span
						onClick={() => {
							window.open(this.state.downLoadUrl, '_blank');
						}}
					>
						install app
					</span>
				</div>
			</div>
		);
		return (
			<div className="chooseLanguage">
				<Header
					_onClick={this.props._onOpenChange}
					_open={this.props._open}
				/>
				<Drawers
					childrenNode={content}
					_onOpenChange={this.props._onOpenChange}
					_open={this.props._open}
				/>
			</div>
		);
	}
}

export default injectIntl(Test);
