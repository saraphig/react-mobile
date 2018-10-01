import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import { List, NavBar, Icon } from 'antd-mobile';
import ReactLoading from 'react-loading';
import Header from 'components/comComponent/header/Header';
import Footer from 'components/comComponent/footer/Footer';
import Swiper from 'components/comComponent/swiper/Swiper';
import WaterWaveComp from 'components/comComponent/waterWave';
import '../../../lib/iconfont/iconfont.js'
import './index.scss';
class IndexComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	componentWillUpdate() {
		// alert(this.state.sortBy)
		// let obj = [...this.state.data]
		// obj = obj.sort((b, a) => this.sortDeal(a[this.state.sortBy], b[this.state.sortBy]));
		// this.setState({
		// 	data: obj
		// })
	}
	componentDidMount() {
		// 取消原生滚动，因为antd的滚动和原生冲突
		if (this.props.history.location.state !== undefined) {
			let dc=document.getElementById(this.props.history.location.state.indexid)
			dc.scrollIntoView()
		}
		document.body.className = 'body-no-scroll';
		
	}

	componentWillUnmount() {

	}
	clickNav = (id) => {
		document.getElementById(id).scrollIntoView();
	}
	render() {

		return (
			// ${this.state.finishdata}
			<div id='indexTop'>
				<Header clickNav={this.clickNav} />
				{/*bannner*/}

				{/*关于我们*/}
				<div className='home-modular home-about modoular-top'>
					<div className='modular-title'>
						<h3>关于我们</h3>
						<p>ABOUT US</p>
						<div className='title-bottom-border'></div>
					</div>
					<div className='about-content'>
						<div>
							<img src={require('assets/images/banner-bg.png')} alt="" />
						</div>
						<p>
							水滴区块链（厦门水滴链动科技有限公司），坐落于海上花园城市厦门，
							致力于为众多专业机构提供安全、稳定、可靠的区块链技术产品和服务，
							共同打造价值互联网。水滴区块链基于实际业务的技术锤炼，从基础架构到精细化运维，
							为客户提供一站式服务。
							团队核心成员主要来自厦门各大知名互联网企业和传统金融公司，
							具有浓厚的区块链技术开发氛围，欢迎志趣相投的小伙伴加入！
							</p>
					</div>
				</div>
				{/*产品服务 */}
				<div className='modular-title modoular-top'>
					<h3>产品与服务</h3>
					<p>SERVICE PROJECT</p>
					<div className='title-bottom-border'></div>
				</div>
				<div className='home-modular  modoular-top home-service'>
					<ul className='service-content'>
						<li>
							<div>
								<img src={require('assets/images/Assets-ico.png')} alt="" />
							</div>
							<p>
								数字资产<br />
								交易系统
							</p>
						</li>
						<li>
							<div>
								<img src={require('assets/images/Otc-ico.png')} alt="" />
							</div>
							<p>
								场外OTC<br />
								交易系统
							</p>
						</li>
						<li>
							<div>
								<img src={require('assets/images/wallet-ico.png')} alt="" />
							</div>
							<p>
								区块链<br />
								钱包系统
							</p>
						</li>
						<li>
							<div>
								<img src={require('assets/images/erc-ico.png')} alt="" />
							</div>
							<p>
								ERC20代币<br />
								空投服务
							</p>
						</li>
						<li>
							<div>
								<img src={require('assets/images/deploy-ico.png')} alt="" />
							</div>
							<p>
								区块链节点<br />
								部署服务
							</p>
						</li>
						<li>
							<div>
								<img src={require('assets/images/contract-ico.png')} alt="" />
							</div>
							<p>
								代币合约<br />
								编程
							</p>
						</li>
					</ul>
					<div className='index-bottom-more'>
					<Link to="/project">READ MORE</Link>
					</div>
				</div>
				{/*竞争优势*/}
				<div className='modular-title modoular-top'>
					<h3>竞争优势</h3>
					<p>COMPETITIVE EDGES</p>
					<div className='title-bottom-border'></div>
				</div>
				<div className='home-edges'>
					<ul className='edges-content'>
						<li>
							<div>高效</div>
							<p>分布式系统架构，拥有基于内存每秒百万级的交易撮合系统，具有延时低，高并发的优势技术</p>
						</li>
						<li>
							<div>开放</div>
							<p>交易所系统支持多语种、多功能模块、多币种开发，具备优秀的可扩展性，服务期内免费升级</p>
						</li>
						<li>
							<div>安全</div>
							<p>
								采用在传统金融中被反复验证的，用于证券和银行交易的网络安全架构和风控体系

									</p>
						</li>
						<li>
							<div>专注</div>
							<p>
								纯系统交付，除产品说明外不设置任何额外服务项目，尽可能缩短交付时间

									</p>
						</li>
					</ul>
					<div className='index-bottom-more'>
					<Link to="/advantage">竞争优势</Link>
					</div>
				</div>
				{/*合作流程*/}
				<div className='modular-title modoular-top' id='preocess'>
					<h3>合作流程</h3>
					<p>COOPERAtION PEOCESS</p>
					<div className='title-bottom-border'></div>
				</div>
				<Swiper />

				{/* 底部 */}
				<div id='contact'></div>
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
