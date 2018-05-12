import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './chooseLanguage.scss';
import { List, Item, Radio, Checkbox } from 'antd-mobile';
import Header from 'components/comComponent/header/Header';
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

class ChooseLanguageComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0
		};
	}

	componentDidMount() {}

	onChange = value => {
		console.log('checkbox');
		this.setState({
			value
		});
	};

	render() {
		const { value } = this.state;
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
		return (
			<div className="chooseLanguage">
				<Header />
				<div className="chooseLanguage-middleContent">
					<MidText
						text="选择语言"
						className="chooseLanguage-midText-transfrom"
					/>
					<div className="inform-items language-content">
						{/* <div className="inform-item one language-items">
							<span className="language-icon">
								<img
									src={require('assets/images/china.png')}
									alt=""
								/>
							</span>
							<span style={{ color: '#fff' }}>中文</span>
						</div>
						<div>
							<Checkbox className="language-checkbox" />
						</div> */}
						<List>
							{data.map(i => {
								return (
									<RadioItem
										key={i.value}
										checked={value === i.value}
										onChange={() => this.onChange(i.value)}
									>
										<img src={i.url} />
										{i.label}
									</RadioItem>
								);
							})}
						</List>
					</div>
				</div>
			</div>
		);
	}
}

export default injectIntl(ChooseLanguageComp);
