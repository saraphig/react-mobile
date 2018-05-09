import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './index.scss';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import Header from 'components/comComponent/header/Header';
import {
	MidText,
	Input,
	Buttons,
	BottomTips,
	ServerTips,
	Validate
} from '../comComponent/common';

class IndexComp extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(this.props);
	}

	// onClickMenu = () => {
	// 	console.log(34);
	// };

	render() {
		const sidebar = (
			<List>
				{/* {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
					(i, index) => {
						if (index === 0) {
							return (
								<List.Item
									key={index}
									thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
									multipleLine
								>
									Category
								</List.Item>
							);
						}
						return (
							<List.Item
								key={index}
								thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
							>
								Category{index}
							</List.Item>
						);
					}
				)} */}
				<List.Item
					key={1}
					thumb={require('assets/images/iconman.png')}
				>
					Category1
				</List.Item>
				<List.Item
					key={2}
					thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
				>
					Category2
				</List.Item>
				<List.Item
					key={3}
					thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
				>
					Category{3}
				</List.Item>
				<List.Item
					key={4}
					thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
				>
					Category{4}
				</List.Item>
			</List>
		);
		return (
			<div className="indexPage">
				<Header _onClick={this.props._onOpenChange} />
				<Drawer
					className="my-drawer"
					style={{ minHeight: document.documentElement.clientHeight }}
					enableDragHandle
					contentStyle={{
						color: '#A6A6A6',
						textAlign: 'center',
						paddingTop: 42
					}}
					position="right"
					sidebar={sidebar}
					open={this.props._open}
					onOpenChange={this.props._onOpenChange}
				>
					<div className="index-middleContent">
						<MidText
							text="谷歌验证"
							style={{
								marginTop: 64,
								marginBottom: 41
							}}
						/>
						<Input placeholder="谷歌验证码" />
						<Buttons style={{ marginTop: 30 }} buttonText="提交" />
					</div>
				</Drawer>
			</div>
		);
	}
}

export default injectIntl(IndexComp);
