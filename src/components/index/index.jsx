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
			sortBy: 'volume', // 按照成交量排序
			isAsc: true, // 是否按照降序排列
			orderStatus: false,
			orderStatus2: false,
			orderStatus3: false
			// orderName: 'volume'
		};
	}

	componentWillReceiveProps(nextProps) {
		// console.log('updateData:', typeof nextProps.updateData)
		// 如果初始值（交易对列表）没拿到，先调用接口拿初始值
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

		// 如果有初始值并且有更新数据(updateData)，那么更新显示数据（data）
		if (
			(nextProps.updateData.length != 0 &&
				this.state.initData.length != 0) ||
			(this.state.updateData.length != 0 &&
				this.state.initData.length != 0 &&
				nextProps.priceETH != null)
		) {
			let obj = [...this.state.data];
			let price = 0;
			let unit = '';
			if (nextProps.priceETH != null) {
				price =
					localStorage.getItem('language') == 'zh'
						? nextProps.priceETH.eth.cny
						: nextProps.priceETH.eth.usd;
				unit = localStorage.getItem('language') == 'zh' ? '￥' : '$';
			}
			obj.forEach(el => {
				if (el.name === nextProps.updateData[0]) {
					// console.log('===',nextProps.updateData[0])
					el.volume = (nextProps.updateData[1][0][6] * 1).toFixed(2);
					el.last = nextProps.updateData[1][0][2];
					el.price =
						unit +
						(nextProps.updateData[1][0][2] * price).toFixed(8);
					el.change = (
						(nextProps.updateData[1][0][2] -
							nextProps.updateData[1][0][1]) /
						nextProps.updateData[1][0][1] *
						100
					).toFixed(2);
				}
			});
			//判断升降序来给数据排序
			if (this.state.isAsc) {
				obj = obj.sort((b, a) =>
					this.sortDeal(a[this.state.sortBy], b[this.state.sortBy])
				);
			} else {
				obj = obj.sort((a, b) =>
					this.sortDeal(a[this.state.sortBy], b[this.state.sortBy])
				);
			}
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

	/**
	 *
	 * @param {*} val
	 * @param {*} status true 为升序，false 为降序
	 *
	 * TODO: need for optimized
	 */
	sortData(val, status) {
		switch (val) {
			case 'volume':
				this.setState({
					orderStatus: !status,
					orderStatus2: false,
					orderStatus3: false
				});
				break;
			case 'last':
				this.setState({
					orderStatus2: !status,
					orderStatus: false,
					orderStatus3: false
				});
				break;
			case 'change':
				this.setState({
					orderStatus3: !status,
					orderStatus2: false,
					orderStatus: false
				});
				break;
			default:
				break;
		}
		this.setState({
			sortBy: val,
			isAsc: status
			// orderName: val
		});

		//数据处理
		let obj = [...this.state.data];
		if (status) {
			obj = obj.sort((b, a) => this.sortDeal(a[val], b[val]));
		} else {
			obj = obj.sort((a, b) => this.sortDeal(a[val], b[val]));
		}
		this.setState({
			data: obj
		});
	}

	render() {
		const {
			data,
			orderStatus,
			sortBy,
			orderStatus2,
			orderStatus3
		} = this.state;
		let content = <div />;
		if (this.state.data.length > 0) {
			content = (
				<div className="index-middleContent">
					<CoinTabs
						data={data}
						sortData={(val, status) => this.sortData(val, status)}
						orderStatus={orderStatus}
						orderStatus2={orderStatus2}
						orderStatus3={orderStatus3}
						orderName={sortBy}
					/>
				</div>
			);
		}
		return (
			<div className="indexPage">
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

export default injectIntl(IndexComp);
