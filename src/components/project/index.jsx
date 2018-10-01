import React from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import Header from 'components/comComponent/header/Header';
import Footer from 'components/comComponent/footer/Footer';
import '../../../lib/iconfont/iconfont.js'

import './index.scss';

class IndexComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	componentWillUpdate() {
	}
	componentDidMount() {
		// 取消原生滚动，因为antd的滚动和原生冲突
		document.body.className = 'body-no-scroll';
	}
	componentWillUnmount() {
	}
	clickNav = (id) => {
		this.props.history.push({
			pathname: '/index',
			state: { indexid: id }
		})
	}
	render() {

		return (
			// ${this.state.finishdata}
			<div>
				<Header clickNav={this.clickNav} />
				{/*bannner*/}
				<div className='project-banner'>

				</div>
				{/*数字资产*/}
				<div className='project-modular'>
					<div className='modular-title'>
						<div className='modular-title-word'>
							<div className='title-top-border'></div>
							<h3>数字资产<br />交易系统</h3>
						</div>
						<div className='modular-title-img'>
							<img src={require('assets/images/transaction-bg.png')} alt="" />
						</div>
					</div>
					<p className='modular-content'>
						面向数字资产交易自主研发的综合性平台系统。
						分布式系统架构，拥有基于内存每秒百万级的交易撮合系统，具有延时低，高并发的优势技术，可以容纳百万级用户同时操作，以及超高的容错容灾能力。
					</p>
					<p className='modular-content'>
						系统采用在传统金融中被反复验证的，用于证券和银行交易的网络安全架构和风控体系。
						在支持数字货币交易体系的基础上，进一步完善交易机制，不断优化核心功能，提高产品的综合功能优势，匠心打造稳定高效、多重加密的币币交易系统。
					</p>
					<ul className='modular-list'>
						<li><i className='iconfont icon-fendiantubiao'></i>云服务模式，高开放性及扩展性</li>
						<li><i className='iconfont icon-fendiantubiao'></i>全平台交易，灵活操作部署简单</li>
						<li><i className='iconfont icon-fendiantubiao'></i>分布式系统，支持超大容量用户</li>
						<li><i className='iconfont icon-fendiantubiao'></i>多语种界面，全球母语交易体验</li>
					</ul>
				</div>
				{/*交易系统*/}
				<div className='project-modular'>
					<div className='modular-title'>
						<div className='modular-title-word'>
							<div className='title-top-border'></div>
							<h3>场外OTC<br />交易系统</h3>
						</div>
						<div className='modular-title-img'>
							<img src={require('assets/images/otc-bg.png')} alt="" />
						</div>
					</div>
					<p className='modular-content'>
						面向数字资产场外交易的综合性平台系统。
						支持海外部署，分布式系统架构，提供桌面Web、手机H5网站，以及iOS和安卓手机端等多种客户端。
					</p>
					<p className='modular-content'>
						系统采用在传统金融中被反复验证的，用于证券和银行交易的网络安全架构和风控体系。
						支持多个国家的网上银行接口API调用，多种公有链的数字资产兑换，为用户提供优质的交易体验。
					</p>
				</div>
				{/*钱包系统*/}
				<div className='project-modular'>
					<div className='modular-title'>
						<div className='modular-title-word'>
							<div className='title-top-border'></div>
							<h3>区块链<br />钱包系统</h3>
						</div>
						<div className='modular-title-img'>
							<img src={require('assets/images/wallet-bg.png')} alt="" />
						</div>
					</div>
					<p className='modular-content'>
						面向区块链应用的钱包管理系统
					</p>
					<p className='modular-content'>
						为客户提供包括BTC、ETH和EOS在内的主流区块链钱包管理系统，实现账号的创建、转账、充值，删除，备份和更新等批量操作，可方便地与客户现有的业务系统对接。
						金融级的私钥管理系统和多重签名机制，稳定，可靠，经过实际的商业检验。
					</p>
				</div>
				{/*空投服务*/}
				<div className='project-modular'>
					<div className='modular-title'>
						<div className='modular-title-word'>
							<div className='title-top-border'></div>
							<h3>ERC20代币<br />空投服务</h3>
						</div>
						<div className='modular-title-img'>
							<img src={require('assets/images/erc-bg.png')} alt="" />
						</div>
					</div>
					<p className='modular-content'>
						根据客户提供的以太坊地址列表，提供成本可控、快速有效的代币批量发送服务，让客户迅速在目标客户和社群中分发代币。
					</p>
					<ul className='modular-list'>
						<li>应用场景包括：</li>
						<li><i className='iconfont icon-fendiantubiao'></i>合约代币分发</li>
						<li><i className='iconfont icon-fendiantubiao'></i>活动糖果空投</li>
						<li><i className='iconfont icon-fendiantubiao'></i>社群奖励分发</li>
					</ul>
				</div>
				{/*部署服务*/}
				<div className='project-modular'>
					<div className='modular-title'>
						<div className='modular-title-word'>
							<div className='title-top-border'></div>
							<h3>区块链节点<br />部署服务</h3>
						</div>
						<div className='modular-title-img'>
							<img src={require('assets/images/deploy-bg.png')} alt="" />
						</div>
					</div>
					<p className='modular-content'>
						提供包括本地、云端等多种节点部署服务，让客户以最快最轻松的方式搭建节点，加入区块链生态。
					</p>
				</div>
				{/*代币合约*/}
				<div className='project-modular'>
					<div className='modular-title'>
						<div className='modular-title-word'>
							<div className='title-top-border'></div>
							<h3>代币合约<br />编程服务</h3>
						</div>
						<div className='modular-title-img'>
							<img src={require('assets/images/contract-bg.png')} alt="" />
						</div>
					</div>
					<p className='modular-content'>
						根据客户要求，撰写智能合约，提供基于不同区块链项目的代币编程服务
					</p>
				</div>
				{/* 底部 */}

				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	// token: state.login.token,
	// market: state.trade.market,
	// marketData: state.trade.marketData,

});

export default connect(mapStateToProps)(injectIntl(IndexComp));
