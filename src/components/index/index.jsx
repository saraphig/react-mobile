import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './index.scss';
import { List, NavBar, Icon } from 'antd-mobile';
import Drawers from 'components/container/Drawers';
import Header from 'components/comComponent/header/Header';
import {
	MidText,
	Input,
	Buttons,
	BottomTips,
	ServerTips,
	Validate,
	CoinTabs
} from '../comComponent/common';

class IndexComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			initData: [],
			updateData: [],
			data: [],
			sortBy: 'volume' // 按照成交量排序
		};
	}

	componentWillReceiveProps(nextProps) {
		// console.log('data',this.state.data)
		// console.log('updateData',nextProps.updateData)
		// console.log('initData',this.state.initData)
		if (this.state.initData.length == 0) {
			let arr = [];
			nextProps.initData.forEach(el => {
				arr.push(el.name);
			});
			this.setState({
				initData: arr
			});
			let arr2 = [];
			arr.forEach(el => {
				arr2.push({
					name: el,
					volume: '',
					last: '',
					price: 0,
					change: ''
				});
			});
			this.setState({
				data: arr2
			});
		}
		if (
			nextProps.updateData.length != 0 &&
			this.state.initData.length != 0
		) {
			let obj = [...this.state.data];
			let price = 0
			let unit = ''
			if (nextProps.priceETH != null) {
				price = localStorage.getItem('language') == 'zh'
						? nextProps.priceETH.eth.cny
						: nextProps.priceETH.eth.usd;
				unit = localStorage.getItem('language') == 'zh' ? '￥' : '$';
			}
			obj.forEach(el => {
				if (el.name == nextProps.updateData[0]) {
					// console.log('===',nextProps.updateData[0])
					el.volume = (nextProps.updateData[1][0][6] * 1).toFixed(2);
					(el.last = nextProps.updateData[1][0][2]),
						(el.price =
							unit +
							(nextProps.updateData[1][0][2] * price).toFixed(8));
					el.change = (
						(nextProps.updateData[1][0][2] -
							nextProps.updateData[1][0][1]) /
						nextProps.updateData[1][0][1] *
						100
					).toFixed(2);
				}
			});
			obj = obj.sort((b, a) =>
				this.sortDeal(a[this.state.sortBy], b[this.state.sortBy])
			);
			this.setState({
				data: obj
			});
		}
	}

	componentWillUpdate() {
		// alert(this.state.sortBy)
		// let obj = [...this.state.data]
		// obj = obj.sort((b, a) => this.sortDeal(a[this.state.sortBy], b[this.state.sortBy]));
		// this.setState({
		// 	data: obj
		// })
	}

	//排序
	sortDeal = (a, b) => {
		if (a - b > 0) {
			// return -1;
			return 1;
		}
		if (a - b < 0) {
			// return 1;
			return -1;
		}
		return 0;
	};

	componentDidMount() {
		// console.log(this.props);
		// 取消原生滚动，因为antd的滚动和原生冲突
		document.body.className = 'body-no-scroll';
	}

	componentWillUnmount() {
		document.body.className = '';
	}

	render() {
		let content = <div />;
		if (this.state.data.length > 0) {
			content = (
				<div className="index-middleContent">
					<CoinTabs
						data={this.state.data}
						sortData={val => this.setState({ sortBy: val })}
					/>
				</div>
			);
		}
		return (
			<div className="indexPage">
				<Header _onClick={this.props._onOpenChange} />
				<Drawers
					childrenNode={content}
					_onOpenChange={this.props._onOpenChange}
					_open={this.props._open}
				/>
			</div>
		);
	}
}

export default injectIntl(IndexComp);
