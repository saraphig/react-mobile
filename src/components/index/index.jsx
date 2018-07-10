import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
import { List, NavBar, Icon } from 'antd-mobile';
import ReactLoading from 'react-loading';
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
import './index.scss';

class IndexComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			initData: [],
			updateData: [],
			data: [], // 当前展示数据
			dataAll: [], // 所有数据
			sortBy: 'volume', // 按照成交量排序
			isAsc: true, // 是否按照降序排列
			orderStatus: false,
			orderStatus2: false,
			orderStatus3: false,
			finishdata: 'current-none',
			basicsToken: 'ETH', // 基础代币
			// orderName: 'volume'
		};
	}

	componentWillReceiveProps(nextProps) {
		// console.log('updateData:', typeof nextProps.updateData)
		// 如果初始值（交易对列表）没拿到，先调用接口拿初始值
		if (this.state.initData.length == 0) {
			let arr = [...nextProps.initData];
			// nextProps.initData.forEach(el => {
			//     arr.push(el.name);
			// });
			this.setState({
				initData: arr
			});
			let arrDataAll = [];
			let arrData = []
			arr.forEach(el => {
				arrDataAll.push({
					name: el.name,
					volume: '',
					last: '',
					price: 0,
					change: '',
					money: el.money
				});
				if (el.money === this.state.basicsToken) {
					arrData.push({
						name: el.name,
						volume: '',
						last: '',
						price: 0,
						change: '',
						money: el.money
					});
				}
			});
			this.setState({
				data: arrData,
				dataAll: arrDataAll
			});
		}

		// 如果有初始值并且有更新数据(updateData)，那么更新显示数据（data）
		if (
			(nextProps.updateData.length != 0 &&
				this.state.initData.length != 0) ||
			(this.state.updateData.length != 0 &&
				this.state.initData.length != 0 &&
				nextProps.price != null)
		) {
			let obj = [...this.state.data];
			let objAll = [...this.state.dataAll];
			let price = 0;
			let unit = '';
			let basicsToken = this.state.basicsToken
			// if (nextProps.price) {
			// 	let priceObj = null
			// 	nextProps.priceAll.forEach(el => {
			// 		if (basicsToken.toLowerCase() === Object.keys(el)[0]) {
			// 			// console.log('Object.values(el)[0]',Object.values(el)[0])
			// 			priceObj = Object.values(el)[0]
			// 		}
			// 	})
			// 	price =
			// 		localStorage.getItem('language') == 'zh'
			// 			? priceObj.cny
			// 			: priceObj.usd;
				unit = localStorage.getItem('language') == 'zh' ? '￥' : '$';
			// }
			obj.forEach(el => {
				// console.log('哈哈', nextProps.price)
				
				if (nextProps.price) {
					// console.log('哈哈',this.state.ethPrice[el.money.toLowerCase()])
					let priceObj = nextProps.price[el.money.toLowerCase()]
					price =
					localStorage.getItem('language') == 'zh'
					  ? priceObj.cny
					  : priceObj.usd;
					// unit = localStorage.getItem('language') == 'zh' ? '￥' : '$';
				}

				if (el.name === nextProps.updateData[0]) {
					// console.log('===',nextProps.updateData[0])
					el.volume = (nextProps.updateData[1][0][6] * 1).toFixed(2);
					el.last = nextProps.updateData[1][0][2];
					el.price =
						unit +
						(nextProps.updateData[1][0][2] * price).toFixed(6);
					el.change = (
						(nextProps.updateData[1][0][2] -
							nextProps.updateData[1][0][1]) /
						nextProps.updateData[1][0][1] *
						100
					).toFixed(2);
				}
			});
			objAll.forEach(el => {

				if (nextProps.price) {
					// console.log('哈哈',this.state.ethPrice[el.money.toLowerCase()])
					let priceObj = nextProps.price[el.money.toLowerCase()]
					price =
					localStorage.getItem('language') == 'zh'
					  ? priceObj.cny
					  : priceObj.usd;
					// unit = localStorage.getItem('language') == 'zh' ? '￥' : '$';
				}
				if (el.name === nextProps.updateData[0]) {
					// console.log('===',nextProps.updateData[0])
					el.volume = (nextProps.updateData[1][0][6] * 1).toFixed(2);
					el.last = nextProps.updateData[1][0][2];
					el.price =
						unit +
						(nextProps.updateData[1][0][2] * price).toFixed(6);
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
				objAll = objAll.sort((b, a) =>
					this.sortDeal(a[this.state.sortBy], b[this.state.sortBy])
				);
			} else {
				obj = obj.sort((a, b) =>
					this.sortDeal(a[this.state.sortBy], b[this.state.sortBy])
				);
				objAll = objAll.sort((a, b) =>
					this.sortDeal(a[this.state.sortBy], b[this.state.sortBy])
				);
			}
			this.setState({
				data: obj,
				dataAll: objAll,
				finishdata: ''
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

	// 切换基础货币
	handleChange = (val) => {
		this.setState({
			basicsToken: val
		})
		let arr = []
		this.state.dataAll.forEach(el => {
			if (el.money === val) {
				arr.push(el)
			}
		})
		// console.log(arr,'--==--',val)
		this.setState({
			data: arr
		})
	}

	render() {
		const {
			data,
			orderStatus,
			sortBy,
			orderStatus2,
			orderStatus3
		} = this.state;
		const appDownLoadBar = (
			<div className="index-download-appbar">
				<div className="download-content">
					<img
						src={require('assets/images/app.png')}
						alt="top.one app"
						className="download-icon"
					/>
					<div style={{ flex: 1 }}>
						<p className="download-title">TOP.ONE APP</p>
						<p className="download-info">
							全语种孵化型数字货币交易所
						</p>
					</div>
					<Buttons buttonText="Download" className="download-btn" />
				</div>
				<span />
			</div>
		);
		let content = <div />;
		if (this.state.data.length > 0 && this.state.finishdata === '') {
			content = (
				<div className="index-middleContent">
					<CoinTabs
						data={data}
						sortData={(val, status) => this.sortData(val, status)}
						orderStatus={orderStatus}
						orderStatus2={orderStatus2}
						orderStatus3={orderStatus3}
						orderName={sortBy}
						handleChange={this.handleChange}
					/>
					{/* {appDownLoadBar} */}
				</div>
			);
		} else {
			content = (
				<div className="index-middleContent loading">
					<ReactLoading
						type="cylon"
						color="#dcb277"
						height={100}
						width={100}
					/>
				</div>
			);
		}
		return (
			// ${this.state.finishdata}
			<div className={`indexPage`}>
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

const mapStateToProps = state => ({
	// token: state.login.token,
	// market: state.trade.market,
	// marketData: state.trade.marketData,
	price: state.trade.price,
	priceAll: state.trade.priceAll
});

export default connect(mapStateToProps)(injectIntl(IndexComp));
