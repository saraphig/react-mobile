import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './chooseLanguage.scss';
import { List, Item } from 'antd-mobile';
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

class ChooseLanguageComp extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		return (
			<div className="chooseLanguage">
				<Header />
				<div className="chooseLanguage-middleContent">
					<MidText
						text="选择语言"
						className="chooseLanguage-midText-transfrom"
					/>
					<div className="inform-items language-content">
						<span className="inform-item one language-items">
							<p>
								<span className="language-icon">
									<img
										src="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
										alt=""
									/>
								</span>
								<span style={{ color: '#fff' }}>中文</span>
							</p>
						</span>
						<span className="inform-item two" />
						<span className="inform-item three" />
					</div>
					<div className="inform-items language-content">
						<span className="inform-item one language-items">
							<p>
								<span className="language-icon">
									<img
										src="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
										alt=""
									/>
								</span>
								<span style={{ color: '#fff' }}>中文</span>
							</p>
						</span>
						<span className="inform-item two" />
						<span className="inform-item three" />
					</div>
				</div>
			</div>
		);
	}
}

export default injectIntl(ChooseLanguageComp);
