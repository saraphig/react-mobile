import React from 'react';
import { Link } from 'react-router-dom';
import './common.scss';
import {
	Tabs,
	WhiteSpace,
	Badge,
	Button,
	List,
	Switch,
	NavBar
} from 'antd-mobile';
import defaultUserImg from 'assets/images/user_head_img@2x.png';
import ListView from './ListView';
import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from 'constants';

//按钮
export const Buttons = props => {
	return (
		<Button
			className={`button ${props.className}`}
			style={props.style}
			onClick={props._onClick}
		>
			{props.buttonText}
		</Button>
	);
};

//页面中部的大文字
export const MidText = props => {
	return (
		<p className={`midText ${props.className}`} style={props.style}>
			{props.text}
		</p>
	);
};

//底部文字
export const BottomTips = props => {
	return (
		<p className={`BottomTips ${props.className}`} style={props.style}>
			<Link to={props.pathName}>
				<span>{props.BottomTips1}？</span>&nbsp;<span className="BottomTips-right">
					{props.BottomTips2}
				</span>
			</Link>
		</p>
	);
};

//服务条款
// export const ServerTips = props => {
// 	return (
// 		<p className={`ServerTips ${props.className}`} style={props.style}>
// 			<input type="checkbox" className="ServerTips-checkbox" />
// 			<span>{props.ServerTips1}</span>&nbsp;<Link to={props.pathName}>
// 				<span className="ServerTips-right">{props.ServerTips2}</span>
// 			</Link>
// 		</p>
// 	);
// };
export class ServerTips extends React.Component {
	constructor(props){
		super(props)
	}
	onChange(e){
		// console.log('同意协议：', e.target.checked)
		this.props.onChange(e.target.checked)
	}
	render(){
		return (
			<p className={`ServerTips ${this.props.className}`} style={this.props.style}>
				<input type="checkbox" className="ServerTips-checkbox" onChange={this.onChange.bind(this)}/>
				<span>{this.props.ServerTips1}</span>&nbsp;<Link to={this.props.pathName}>
					<span className="ServerTips-right">{this.props.ServerTips2}</span>
				</Link>
			</p>
		);
    }
};

//输入框
// export const Input = props => {
// 	return (
// 		<div className="input-container">
// 			<input
// 				className="input"
// 				style={props.style}
// 				placeholder={props.placeholder || '您的邮箱'}
// 				value={props.value}
// 			/>
// 			{props.types === 1 && (
// 				<div>
// 					<span className="line" />
// 					<span
// 						className={
// 							props.disabled ? 'input-sended' : 'input-send'
// 						}
// 					>
// 						{props.disabled
// 							? `已发送(${props.time})`
// 							: props.text || '发送验证码'}
// 					</span>
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// 输入框
export class Input extends React.Component{
	constructor(props){
		super(props)
		this.state={
			val: props.value
		};
	}
	onChange(e){
	   this.props.onChange(e.target.value)
	}
	render(){
	   return (
		   <div className="input-container">
			   <input
				   className="input"
				   style={this.props.style}
				   placeholder={this.props.placeholder || '您的邮箱'}
				   value={this.state.value}
				   onChange={this.onChange.bind(this)}
				   id={this.props.comId}
			   />
			   {this.props.types === 1 && (
				   <div>
					   <span className="line" />
					   <span
						   className={
							this.props.disabled ? 'input-sended' : 'input-send'
						   }
					   >
						   {this.props.disabled
							   ? `已发送(${this.props.time})`
							   : this.props.text || '发送验证码'}
					   </span>
				   </div>
			   )}
		   </div>
	   );
   }
};

//验证码
// export const Validate = props => {
// 	return (
// 		<div className={`validate ${props.className}`} style={props.style}>
// 			<input type="number" maxLength="6" autoComplete="off" />
// 			<ul className="code-display">
// 				<li>
// 					<span>6</span>
// 				</li>
// 				<li>
// 					<span>1</span>
// 				</li>
// 				<li>
// 					<span>2</span>
// 				</li>
// 				<li>
// 					<span>1</span>
// 				</li>
// 				<li>
// 					<span className="number" />
// 				</li>
// 				<li>
// 					<span className="number" />
// 				</li>
// 			</ul>
// 		</div>
// 	);
// };
export class Validate  extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			val: ''
		}
	}

	onChange(e){
		let value = e.target.value
		if (value.length > 6){
			return
		}
		console.log(e.target.value)
		
		let liList = $(".code-display li")
		this.setState({
			val: value
		})
        for (let i = 0; i < 6; i++) {
			if (i > value.length) {
				liList.eq(i).find('span').addClass('number')
				liList.eq(i).find('span').html('')
			} else {
				liList.eq(i).find('span').removeClass('number')
				// value.toString().charAt(i)
				liList.eq(i).find('span').html(value.toString().charAt(i))
			}
		}

		//当数字等于6个时失去焦点
		if (value.length == 6) {
			this.props.onChange(value)
			$('#valInput').blur()
		}
	}

	render(){
		return (
			<div className={`validate ${this.props.className}`} style={this.props.style}>
				<input id="valInput" type="number" maxLength="6" value={this.state.val} autoComplete="off" onChange={this.onChange.bind(this)}/>
				<ul className="code-display">
					<li>
						<span className="number"/>
					</li>
					<li>
						<span className="number"/>
					</li>
					<li>
						<span className="number"/>
					</li>
					<li>
						<span className="number"/>
					</li>
					<li>
						<span className="number" />
					</li>
					<li>
						<span className="number" />
					</li>
				</ul>
			</div>
		);
    }
};

//滑动tabs
export const TopTabs = props => {
	const tabs = [
		{ title: props.secondTitle || '手机验证' },
		{ title: props.firstTitle || '谷歌验证' }
	];

	return (
		<div>
			<Tabs
				tabs={tabs}
				initialPage={props.initialPage || 1}
				tabBarBackgroundColor="#1A1A1A"
				tabBarActiveTextColor="#DCB276"
				tabBarInactiveTextColor="#646464"
				tabBarUnderlineStyle={{
					borderColor: '#DCB276',
					width: '22%',
					marginLeft: '14%'
				}}
				tabBarTextStyle={{ fontSize: '15px' }}
			>
				<div
					//
					className="tabs-content"
				>
					<Input style={{ marginTop: 8 }} placeholder="手机号码" />
					<Input placeholder="输入验证码" types={1} />
				</div>
				<div className="tabs-content">
					<Input style={{ marginTop: 8 }} placeholder="谷歌验证码" />
				</div>
			</Tabs>
			<WhiteSpace />
		</div>
	);
};

//个人中心头部
export const UserTop = props => {
	return (
		<div className="user-top">
			<img src={defaultUserImg} className="head" />
			{props.user ? (
				<div>
					<p className="title">topcoin1234@gmail.com</p>
					<p className="text">最后登陆时间：2018-03-12 11:48:00</p>
					<p className="text">IP: 45.32.255.166</p>
				</div>
			) : (
				<div>
					<p className="title">未登录</p>
					<p className="text">马上登录，体验极速交易</p>
				</div>
			)}
		</div>
	);
};

//个人中心列表
export const ListItem = props => {
	return (
		<div className="list-item">
			<div className="list-item-line">
				<div className="item-left">
					<span className="left-icon">
						<svg
							style={{
								width: '30px',
								height: '26px',
								marginRight: '8px'
							}}
							aria-hidden="true"
						>
							<use xlinkHref="#icon-friend" />
						</svg>
					</span>
					<span className="title">
						{props.title || 'enter title'}
					</span>
				</div>
				<div className="item-right">
					{/*通过传值改变字体颜色*/}
					{props.user ? (
						props.user.isOpen ? (
							<span className="text-active">已开启</span>
						) : (
							<span className="text">未认证</span>
						)
					) : null}

					{/*默认显示右箭头可以通过传值设置是否显示*/}
					{(props.isShowRightIcon === undefined ||
						props.isShowRightIcon) && (
						<svg className="right-icon" aria-hidden="true">
							<use xlinkHref="#icon-youjiantou" />
						</svg>
					)}
				</div>
			</div>
		</div>
	);
};

//侧栏内容框
export const sidebars = (
	<List>
		<List.Item key={1} thumb={require('assets/images/iconman.png')}>
			马上登录，体验极速交易
		</List.Item>
		<List.Item key={2}>首页</List.Item>
		<List.Item key={3}>个人中心</List.Item>
		<List.Item key={4}>资产</List.Item>
		<List.Item key={5}>退出登录</List.Item>
		<List.Item key={6}>language </List.Item>
	</List>
);

//币种tabs
export const CoinTabs = props => {
	const tabs = [
		{ title: 'ETH' },
		{ title: 'BTC' },
		{ title: 'BTC' },
		{ title: 'BTC' },
		{ title: 'BTC' },
		{ title: 'BTC' },
		{ title: 'BTC' }
	];

	return (
		<div>
			<Tabs
				tabs={tabs}
				initialPage={props.initialPage || 0}
				tabBarBackgroundColor="#000"
				tabBarActiveTextColor="#DCB276"
				tabBarInactiveTextColor="#646464"
				swipeable={false}
				tabBarUnderlineStyle={{
					borderColor: '#DCB276'
					// width: '22%',
					// marginLeft: '14%'
				}}
				tabBarTextStyle={{ fontSize: '18px', fontWeight: 400 }}
			>
				<div className="inform-height">
					<InformItem />
				</div>
				<div>{/* <InformItem /> */}</div>
			</Tabs>
			<p className="tab-bar">
				<span className="tab-item one">交易量</span>
				<span className="tab-item two">最新价</span>
				<span className="tab-item three">24H涨跌</span>
			</p>
		</div>
	);
};

//交易信息条
export const InformItem = props => {
	return (
		<div className="inform">
			{/* <div className="inform-items">
				<span className="inform-item one">
					<p>
						TOP/<span style={{ color: '#BEBEBE' }}>ETH</span>
					</p>
					<p className="inform-item-small">12345675.22</p>
				</span>
				<span className="inform-item two">
					<p>23423141</p>
					<p className="inform-item-small">¥2342525.3342</p>
				</span>
				<span className="inform-item three">
					<Button className="inform-item-middle">+585.74%</Button>
				</span>
			</div>
			<div className="inform-items">
				<span className="inform-item one">
					<p>
						TOP/<span style={{ color: '#BEBEBE' }}>ETH</span>
					</p>
					<p className="inform-item-small">12345675.22</p>
				</span>
				<span className="inform-item two">
					<p>23423141</p>
					<p className="inform-item-small">¥2342525.3342</p>
				</span>
				<span className="inform-item three">
					<Button className="inform-item-middle">+585.74%</Button>
				</span>
			</div>
			<div className="inform-items">
				<span className="inform-item one">
					<p>
						TOP/<span style={{ color: '#BEBEBE' }}>ETH</span>
					</p>
					<p className="inform-item-small">12345675.22</p>
				</span>
				<span className="inform-item two">
					<p>23423141</p>
					<p className="inform-item-small">¥2342525.3342</p>
				</span>
				<span className="inform-item three">
					<Button className="inform-item-middle">+585.74%</Button>
				</span>
			</div>
			<div className="inform-items">
				<span className="inform-item one">
					<p>
						TOP/<span style={{ color: '#BEBEBE' }}>ETH</span>
					</p>
					<p className="inform-item-small">12345675.22</p>
				</span>
				<span className="inform-item two">
					<p>23423141</p>
					<p className="inform-item-small">¥2342525.3342</p>
				</span>
				<span className="inform-item three">
					<Button className="inform-item-middle">+585.74%</Button>
				</span>
			</div>
			<div className="inform-items">
				<span className="inform-item one">
					<p>
						TOP/<span style={{ color: '#BEBEBE' }}>ETH</span>
					</p>
					<p className="inform-item-small">12345675.22</p>
				</span>
				<span className="inform-item two">
					<p>23423141</p>
					<p className="inform-item-small">¥2342525.3342</p>
				</span>
				<span className="inform-item three">
					<Button
						className="inform-item-middle"
						style={{ background: '#FF5255' }}
					>
						-585.74%
					</Button>
				</span>
			</div>
			<div className="inform-items">
				<span className="inform-item one">
					<p>
						TOP/<span style={{ color: '#BEBEBE' }}>ETH</span>
					</p>
					<p className="inform-item-small">12345675.22</p>
				</span>
				<span className="inform-item two">
					<p>23423141</p>
					<p className="inform-item-small">¥2342525.3342</p>
				</span>
				<span className="inform-item three">
					<Button
						className="inform-item-middle"
						style={{ background: '#FF5255' }}
					>
						-585.74%
					</Button>
				</span>
			</div>
			<div className="inform-items">
				<span className="inform-item one">
					<p>
						TOP/<span style={{ color: '#BEBEBE' }}>ETH</span>
					</p>
					<p className="inform-item-small">12345675.22</p>
				</span>
				<span className="inform-item two">
					<p>23423141</p>
					<p className="inform-item-small">¥2342525.3342</p>
				</span>
				<span className="inform-item three">
					<Button
						className="inform-item-middle"
						style={{ background: '#FF5255' }}
					>
						-585.74%
					</Button>
				</span>
			</div>
			<div className="inform-items">
				<span className="inform-item one">
					<p>
						TOP/<span style={{ color: '#BEBEBE' }}>ETH</span>
					</p>
					<p className="inform-item-small">12345675.22</p>
				</span>
				<span className="inform-item two">
					<p>23423141</p>
					<p className="inform-item-small">¥2342525.3342</p>
				</span>
				<span className="inform-item three">
					<Button
						className="inform-item-middle"
						style={{ background: '#FF5255' }}
					>
						-585.74%
					</Button>
				</span>
			</div>
			<div className="inform-items">
				<span className="inform-item one">
					<p>
						TOP/<span style={{ color: '#BEBEBE' }}>ETH</span>
					</p>
					<p className="inform-item-small">12345675.22</p>
				</span>
				<span className="inform-item two">
					<p>23423141</p>
					<p className="inform-item-small">¥2342525.3342</p>
				</span>
				<span className="inform-item three">
					<Button
						className="inform-item-middle"
						style={{ background: '#FF5255' }}
					>
						-585.74%
					</Button>
				</span>
			</div>
			<div className="inform-items">
				<span className="inform-item one">
					<p>
						TOP/<span style={{ color: '#BEBEBE' }}>ETH</span>
					</p>
					<p className="inform-item-small">12345675.22</p>
				</span>
				<span className="inform-item two">
					<p>23423141</p>
					<p className="inform-item-small">¥2342525.3342</p>
				</span>
				<span className="inform-item three">
					<Button
						className="inform-item-middle"
						style={{ background: '#FF5255' }}
					>
						-585.74%
					</Button>
				</span>
			</div>
			<div className="inform-items">
				<span className="inform-item one">
					<p>
						TOP/<span style={{ color: '#BEBEBE' }}>ETH</span>
					</p>
					<p className="inform-item-small">12345675.22</p>
				</span>
				<span className="inform-item two">
					<p>23423141</p>
					<p className="inform-item-small">¥2342525.3342</p>
				</span>
				<span className="inform-item three">
					<Button
						className="inform-item-middle"
						style={{ background: '#FF5255' }}
					>
						-585.74%
					</Button>
				</span>
			</div>
			<div className="inform-items">
				<span className="inform-item one">
					<p>
						TOP/<span style={{ color: '#BEBEBE' }}>ETH</span>
					</p>
					<p className="inform-item-small">12345675.22</p>
				</span>
				<span className="inform-item two">
					<p>23423141</p>
					<p className="inform-item-small">¥2342525.3342</p>
				</span>
				<span className="inform-item three">
					<Button
						className="inform-item-middle"
						style={{ background: '#FF5255' }}
					>
						-585.74%
					</Button>
				</span>
			</div> */}
			<ListView />
		</div>
	);
};

//留白
export const WhiteBlock = props => {
	return <div className="white-block" style={props.style} />;
};

//导航栏
export const Navbars = props => {
	return <NavBar className={props.className} leftContent={props.title} />;
};

//个人中心弹出框
export const AlertModal = props => {
	return (
		<div>
			{props.isOpen && (
				<div className="alertModal">
					<div className="container">
						<div className="top">
							<i className="email-icon" />
						</div>
						<p className="content">
							请前往top.one官网进行验证设置
							请前往top.one官网进行验证设置
						</p>
						<div className="sure">
							<a href="javascript:;">确定</a>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
