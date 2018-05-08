import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import './header.scss';

class Header extends React.Component {
	constructor(props) {
		super();
		this.state = {};
	}

	// onOpenChange = e => {
	// 	this.setState({ open: !this.state.open });
	// };
	// onClick = () => {
	// 	console.log(324);
	// };
	render() {
		// fix in codepen
		// const sidebar = (
		// 	<List>
		// 		{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
		// 			(i, index) => {
		// 				if (index === 0) {
		// 					return (
		// 						<List.Item
		// 							key={index}
		// 							thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
		// 							multipleLine
		// 						>
		// 							Category
		// 						</List.Item>
		// 					);
		// 				}
		// 				return (
		// 					<List.Item
		// 						key={index}
		// 						thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
		// 					>
		// 						Category{index}
		// 					</List.Item>
		// 				);
		// 			}
		// 		)}
		// 	</List>
		// );

		return (
			<div>
				<div className="main">
					<span className='main-left'>
						<img src="" alt="" />
					</span>
					<span className='main-right'>
						<span className='main-login'>登录</span>
						<span className='main-register'>注册</span>
						<span className='main-menu'><img src="" alt=""/></span>
					</span>
				</div>
				{/* <NavBar
					onLeftClick={this.onOpenChange}
					leftContent={[<Icon key="1" type="ellipsis" />]}
				>
					Basic
				</NavBar>
				<Drawer
					className="my-drawer"
					style={{ minHeight: document.documentElement.clientHeight }}
					enableDragHandle
					contentStyle={{
						color: '#A6A6A6',
						textAlign: 'center',
						paddingTop: 42
					}}
					sidebar={sidebar}
					open={this.state.open}
					onOpenChange={this.onOpenChange}
					position="top"
				>
					Click upper-left corner
				</Drawer> */}
			</div>
		);
	}
}
export default injectIntl(Header);
