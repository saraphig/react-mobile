import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './myWallet.scss';
import Header from 'components/comComponent/header/Header';
import {
	MidText,
	Input,
	Buttons,
	BottomTips,
	ServerTips,
	Validate,
	Navbars
} from '../comComponent/common';
import { Checkbox } from 'antd-mobile';
import Drawers from 'components/container/Drawers';

const CheckboxItem = Checkbox.CheckboxItem;

class MyWalletComp extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		const {
			intl: { formatMessage }
		} = this.props;

		const content = (
			<div>
				<Navbars
					title={formatMessage({ id: 'myAssets' })}
					className="myWallet-title"
				/>
				<div className="myWallet-money">
					<span className="myWallet-money-info guji">
						{formatMessage({ id: 'topMenu.totalBTC' })}
						<i className="iconfont icon-ai44" />
						<i className="iconfont icon-yincang" />
					</span>
					<span className="myWallet-money-info moneys">
						888888.88888888&nbsp;BTC<span className="myWallet-money-yuan">
							/¥23333.333333
						</span>
						{/* <span>******</span> */}
					</span>
					<span className="myWallet-money-info">
						{/* 资产总估值<i className="iconfont icon-ai44" /> */}
						<Checkbox>
							&nbsp;&nbsp;{formatMessage({
								id: 'depositWithdraw.filterZero'
							})}
						</Checkbox>
					</span>
				</div>
				<div className="myWallet-money-card-all">
					<div className="myWallet-money-card">
						<div className="myWallet-card">
							<div className="myWallet-card-title">
								<div>
									<img
										src={require('assets/images/btc.png')}
										alt="btc"
									/>
									<span>BTC</span>
								</div>
								<div className="myWallet-card-title-right">
									{formatMessage({
										id: 'depositWithdraw.candy'
									})}: <span>200000000000</span>
								</div>
							</div>
							<div className="myWallet-card-item">
								<div className="myWallet-card-item-left">
									<span>
										{formatMessage({
											id: 'orderTable.total'
										})}
									</span>
								</div>
								<div className="myWallet-card-item-right">
									<span>20000000000</span>
								</div>
							</div>
							<div className="myWallet-card-item">
								<div className="myWallet-card-item-left">
									<span>
										{formatMessage({
											id: 'orderTable.available'
										})}
									</span>
								</div>
								<div className="myWallet-card-item-right">
									<span>20000000000</span>
								</div>
							</div>
							<div className="myWallet-card-item">
								<div className="myWallet-card-item-left">
									<span>
										{formatMessage({
											id: 'orderTable.freeze'
										})}
									</span>
								</div>
								<div className="myWallet-card-item-right">
									<span>20000000000</span>
								</div>
							</div>
							<div className="myWallet-card-item">
								<div className="myWallet-card-item-left">
									<span>
										{formatMessage({
											id: 'depositWithdraw.total'
										})}
									</span>
								</div>
								<div className="myWallet-card-item-right">
									<span>20000000000</span>
								</div>
							</div>
						</div>
					</div>
					<div className="myWallet-money-card">
						<div className="myWallet-card">
							<div className="myWallet-card-title">
								<div>
									<img
										src={require('assets/images/btc.png')}
										alt="btc"
									/>
									<span>BTC</span>
								</div>
								<div className="myWallet-card-title-right">
									{formatMessage({
										id: 'depositWithdraw.candy'
									})}: <span>200000000000</span>
								</div>
							</div>
							<div className="myWallet-card-item">
								<div className="myWallet-card-item-left">
									<span>
										{formatMessage({
											id: 'orderTable.total'
										})}
									</span>
								</div>
								<div className="myWallet-card-item-right">
									<span>20000000000</span>
								</div>
							</div>
							<div className="myWallet-card-item">
								<div className="myWallet-card-item-left">
									<span>
										{formatMessage({
											id: 'orderTable.available'
										})}
									</span>
								</div>
								<div className="myWallet-card-item-right">
									<span>20000000000</span>
								</div>
							</div>
							<div className="myWallet-card-item">
								<div className="myWallet-card-item-left">
									<span>
										{formatMessage({
											id: 'orderTable.freeze'
										})}
									</span>
								</div>
								<div className="myWallet-card-item-right">
									<span>20000000000</span>
								</div>
							</div>
							<div className="myWallet-card-item">
								<div className="myWallet-card-item-left">
									<span>
										{formatMessage({
											id: 'depositWithdraw.total'
										})}
									</span>
								</div>
								<div className="myWallet-card-item-right">
									<span>20000000000</span>
								</div>
							</div>
						</div>
					</div>
					<div className="myWallet-money-card">
						<div className="myWallet-card">
							<div className="myWallet-card-title">
								<div>
									<img
										src={require('assets/images/btc.png')}
										alt="btc"
									/>
									<span>BTC</span>
								</div>
								<div className="myWallet-card-title-right">
									{formatMessage({
										id: 'depositWithdraw.candy'
									})}: <span>200000000000</span>
								</div>
							</div>
							<div className="myWallet-card-item">
								<div className="myWallet-card-item-left">
									<span>
										{formatMessage({
											id: 'orderTable.total'
										})}
									</span>
								</div>
								<div className="myWallet-card-item-right">
									<span>20000000000</span>
								</div>
							</div>
							<div className="myWallet-card-item">
								<div className="myWallet-card-item-left">
									<span>
										{formatMessage({
											id: 'orderTable.available'
										})}
									</span>
								</div>
								<div className="myWallet-card-item-right">
									<span>20000000000</span>
								</div>
							</div>
							<div className="myWallet-card-item">
								<div className="myWallet-card-item-left">
									<span>
										{formatMessage({
											id: 'orderTable.freeze'
										})}
									</span>
								</div>
								<div className="myWallet-card-item-right">
									<span>20000000000</span>
								</div>
							</div>
							<div className="myWallet-card-item">
								<div className="myWallet-card-item-left">
									<span>
										{formatMessage({
											id: 'depositWithdraw.total'
										})}
									</span>
								</div>
								<div className="myWallet-card-item-right">
									<span>20000000000</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
		return (
			<div className="myWallet">
				<div className="myWallet-bg">
					<Header
						className="myWallet-header"
						_onClick={this.props._onOpenChange}
					/>
					<Drawers
						childrenNode={content}
						_onOpenChange={this.props._onOpenChange}
						_open={this.props._open}
					/>
				</div>
			</div>
		);
	}
}

export default injectIntl(MyWalletComp);
