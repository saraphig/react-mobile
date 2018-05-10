import React from 'react';
import { Link } from 'react-router-dom';
import './common.scss';
import { Tabs, WhiteSpace, Badge, Button, List, Switch } from 'antd-mobile';
import defaultUserImg from 'assets/images/user_head_img@2x.png';
import ListView from './ListView';

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
export const ServerTips = props => {
	return (
		<p className={`ServerTips ${props.className}`} style={props.style}>
			<input type="checkbox" className="ServerTips-checkbox" />
			<span>{props.ServerTips1}</span>&nbsp;<Link to={props.pathName}>
				<span className="ServerTips-right">{props.ServerTips2}</span>
			</Link>
		</p>
	);
};



//输入框
export const Input = props => {
	return (
		<div className="input-container">
			<input
				className="input"
				style={props.style}
				placeholder={props.placeholder || '您的邮箱'}
				value={props.value}
			/>
			{props.types === 1 && (
				<div>
					<span className="line" />
					<span
						className={
							props.disabled ? 'input-sended' : 'input-send'
						}
					>
						{props.disabled
							? `已发送(${props.time})`
							: props.text || '发送验证码'}
					</span>
				</div>
			)}
		</div>
	);
};

// 输入框
export class Input2 extends React.Component{
	constructor(props){
		super(props)
		this.state={
			val: props.value
		}
	}
	onChange(e){
	   console.log(e.target.value)
	   this.props.onChange(e)
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
export const Validate = props => {
	return (
		<div className={`validate ${props.className}`} style={props.style}>
			<input type="number" maxLength="6" autoComplete="off" />
			<ul className="code-display">
				<li>
					<span>6</span>
				</li>
				<li>
					<span>1</span>
				</li>
				<li>
					<span>2</span>
				</li>
				<li>
					<span>1</span>
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
		<List renderHeader={() => 'Icon in the left'}>
			<Item
				thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
				arrow="horizontal"
				onClick={() => {}}
			>
				My wallet
			</Item>
			<Item
				thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
				onClick={() => {}}
				arrow="horizontal"
			>
				My Cost Ratio
			</Item>
		</List>
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
