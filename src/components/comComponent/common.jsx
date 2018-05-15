import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
import './common.scss';
import {
	Tabs,
	WhiteSpace,
	Badge,
	Button,
	List,
	Switch,
	NavBar,
	Drawer
} from 'antd-mobile';
import defaultUserImg from 'assets/images/user_head_img@2x.png';
import ListView from './ListView';
import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from 'constants';

//按钮
export const Buttons = props => {
	return (
		<a
			className={`button ${props.className}`}
			style={props.style}
			onClick={props._onClick}
		>
			{props.buttonText}
		</a>
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
			{props.pathName ? (
				<Link to={props.pathName}>
					<span>{props.BottomTips1}</span>&nbsp;<span className="BottomTips-right">
						{props.BottomTips2}
					</span>
				</Link>
			) : (
				<a href="javascript:;">
					<span>{props.BottomTips1}</span>&nbsp;<span
						className="BottomTips-right"
						onClick={props.onClick}
					>
						{props.BottomTips2}
					</span>
				</a>
			)}
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
	constructor(props) {
		super(props);
	}
	onChange(e) {
		// console.log('同意协议：', e.target.checked)
		this.props.onChange(e.target.checked);
	}
	render() {
		return (
			<p
				className={`ServerTips ${this.props.className}`}
				style={this.props.style}
			>
				<input
					type="checkbox"
					className="ServerTips-checkbox"
					onChange={this.onChange.bind(this)}
				/>
				<span>{this.props.ServerTips1}</span>&nbsp;<Link
					to={this.props.pathName}
				>
					<span className="ServerTips-right">
						{this.props.ServerTips2}
					</span>
				</Link>
			</p>
		);
	}
}

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
export class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: props.value
		};
	}
	onChange(e) {
		// input不可点击就没有change事件
		if (!this.props.disabled) {
			this.props.onChange(e.target.value);
		}
	}
	render() {
		return (
			<div className="input-container">
				<input
					className="input"
					style={this.props.style}
					placeholder={
						this.props.placeholder || (
							<FormattedMessage id="forget.email" />
						)
					}
					disabled={this.props.disabled || false}
					// autoComplete={this.props.autoComplete || ''}
					// value={this.state.value}
					autoComplete={this.props.autoComplete || ''}
					// value={this.state.value}
					value={this.props.value}
					onChange={this.onChange.bind(this)}
					id={this.props.comId}
					type={this.props.type || 'text'}
				/>
				{this.props.types === 1 && (
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<span className="line" />
						<span
							className={
								this.props.sended
									? 'input-sended'
									: 'input-send'
							}
						>
							{this.props.sended ? (
								<span>
									<FormattedMessage id="register.sended" />
									{this.props.time}
								</span>
							) : (
								<span onClick={this.props.onClick}>
									{this.props.yidun || (
										<FormattedMessage id="register.postPhoneValidate" />
									)}
								</span>
							)}
						</span>
					</div>
				)}
			</div>
		);
	}
}

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
export class Validate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			val: ''
		};
	}

  componentDidMount() {
	  this.focus();
  }

  focus = () => {
    // 强制聚焦
    $('#valInput').focus();
}

	onChange(e) {
		let value = e.target.value;
		if (value.length > 6) {
			return;
		}
		// console.log(e.target.value);

		let liList = $('.code-display li');
		this.setState({
			val: value
		});
		for (let i = 0; i < 6; i++) {
			//if (i > value.length)
			if (i >= value.length) {
				liList
					.eq(i)
					.find('span')
					.addClass('number');
				liList
					.eq(i)
					.find('span')
					.html('');
			} else {
				liList
					.eq(i)
					.find('span')
					.removeClass('number');
				// value.toString().charAt(i)
				liList
					.eq(i)
					.find('span')
					.html(value.toString().charAt(i));
			}
		}

		//当数字等于6个时失去焦点
		if (value.length == 6) {
			// this.props.onChange(value);
			$('#valInput').blur();
		}
		this.props.onChange(value);
	}

	render() {
		return (
			<div
				className={`validate ${this.props.className}`}
				style={this.props.style}
			>
				<input
					id="valInput"
					type="number"
					maxLength="6"
					value={this.state.val}
					autoComplete="off"
					autoFocus="true"
					onChange={this.onChange.bind(this)}
				/>
				<ul className="code-display" onClick={this.focus}>
					<li>
						<span className="number" />
					</li>
					<li>
						<span className="number" />
					</li>
					<li>
						<span className="number" />
					</li>
					<li>
						<span className="number" />
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
}

//滑动tabs
// export const TopTabs = props => {
export class TopTabs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tabs: [
				{
					title: props.secondTitle || (
						<FormattedMessage id={'userCenter.phoneValidate'} />
					)
				},
				{
					title: props.firstTitle || (
						<FormattedMessage id={'public.validate'} />
					)
				}
			],
			checked: 'public.validate'
		};
		// console.log(props.info.phone)
	}
	// const tabs = [
	// 	{
	// 		title: props.secondTitle || (
	// 			<FormattedMessage id={'userCenter.phoneValidate'} />
	// 		)
	// 	},
	// 	{
	// 		title: props.firstTitle || (
	// 			<FormattedMessage id={'public.validate'} />
	// 		)
	// 	}
	// ];

	// 判断选择的是哪种验证
	checkedValidate(e) {
		this.setState({ checked: e.title.props.id });
		let val = 'google';
		if (e.title.props.id == 'public.validate') {
			val = 'google';
		} else {
			val = 'phone';
		}
		this.props.checkChange(val);
	}

	render() {
		let tabsBox = null;
		let googleBox = null;
		let phoneBox = null;

		// 如果是都绑定了
		if (this.props.info.isGoogle && this.props.info.phone != '0') {
			tabsBox = (
				<div>
					<Tabs
						tabs={this.state.tabs}
						initialPage={this.props.initialPage || 1}
						tabBarBackgroundColor="#1A1A1A"
						tabBarActiveTextColor="#DCB276"
						tabBarInactiveTextColor="#646464"
						tabBarUnderlineStyle={{
							borderColor: '#DCB276',
							width: '22%',
							marginLeft: '14%'
						}}
						tabBarTextStyle={{ fontSize: '15px' }}
						onChange={e => {
							this.checkedValidate(e);
						}}
					>
						<div
							//
							className="tabs-content"
						>
							<Input
								style={{ marginTop: 8 }}
								placeholder={this.props.phoneHolder}
								value={this.props.info.phone}
								disabled={true}
							/>
							<Input
								placeholder={this.props.validateHolder}
								types={1}
								onChange={this.props.validateChange}
								onClick={this.props.sendPhoneCode}
								time={this.props.count}
								sended={this.props.sended}
							/>
						</div>
						<div className="tabs-content">
							<Input
								style={{ marginTop: 8 }}
								placeholder={this.props.googleHolder}
								onChange={this.props.googleChange}
							/>
						</div>
					</Tabs>
					<WhiteSpace />
				</div>
			);
		}

		// 如果只绑定了谷歌
		if (this.props.info.isGoogle && this.props.info.phone == '0') {
			googleBox = (
				<div className="tabs-content">
					<Input
						style={{ marginTop: 8 }}
						placeholder={this.props.googleHolder}
						onChange={this.props.googleChange}
					/>
				</div>
			);
		}
		// 如果只绑定了手机
		if (!this.props.info.isGoogle && this.props.info.phone != '0') {
			phoneBox = (
				<div
					//
					className="tabs-content"
				>
					<Input
						style={{ marginTop: 8 }}
						placeholder={this.props.phoneHolder}
						value={this.props.info.phone}
						disabled={true}
					/>
					<Input
						placeholder={this.props.validateHolder}
						types={1}
						onChange={this.props.validateChange}
						onClick={this.props.sendPhoneCode}
						time={this.props.count}
						sended={this.props.sended}
					/>
				</div>
			);
		}
		return (
			<div>
				{tabsBox}
				{googleBox}
				{phoneBox}
				{/* <Tabs
					tabs={this.state.tabs}
					initialPage={this.props.initialPage || 1}
					tabBarBackgroundColor="#1A1A1A"
					tabBarActiveTextColor="#DCB276"
					tabBarInactiveTextColor="#646464"
					tabBarUnderlineStyle={{
						borderColor: '#DCB276',
						width: '22%',
						marginLeft: '14%'
					}}
					tabBarTextStyle={{ fontSize: '15px' }}
					onChange={(e) => {this.checkedValidate(e)}}
				>
					<div
						//
						className="tabs-content"
					>
						<Input
							style={{ marginTop: 8 }}
							placeholder={this.props.phoneHolder}
							value= {this.props.info.phone}
						/>
						<Input
							placeholder={
								this.props.validateHolder
							}
							types={1}
							onChange={this.props.validateChange}
							onClick={this.props.sendPhoneCode}
						/>
					</div>
					<div className="tabs-content">
						<Input
							style={{ marginTop: 8 }}
							placeholder={this.props.googleHolder}
							onChange={this.props.googleChange}
						/>
					</div>
				</Tabs>
				<WhiteSpace /> */}
			</div>
		);
	}
}

//个人中心头部
export const UserTop = props => {
	return (
		<div className="user-top">
			<img src={defaultUserImg} className="head" />
			{JSON.stringify(props.info) != '{}' ? (
				<div>
					<p className="title">{props.info['user_info'].email}</p>
					<p className="text">
						<FormattedMessage id={'usercenter.lastLogin'} />：
						{moment(
							props.info['login_history'][0]['login_time'] * 1000
						).format('YYYY-MM-DD HH:mm:ss')}
					</p>
					<p className="text">
						IP: {props.info['login_history'][0].ip}
					</p>
				</div>
			) : (
				<div>
					<p className="title">
						<FormattedMessage id={'usercenter.notLog'} />
					</p>
					<p className="text">
						<FormattedMessage id={'usercenter.login.trade'} />
					</p>
				</div>
			)}
		</div>
	);
};

//个人中心列表
export const ListItem = props => {
	return (
		<div onClick={props._onClick} className="list-item">
			<div className={`list-item-line ${props.classNameItemline}`}>
				<div className="item-left">
					<span className="left-icon">
						{props.svg ? (
							props.svg
						) : (
							<svg
								className="list-item-friend"
								aria-hidden="true"
							>
								<use xlinkHref="#icon-friend" />
							</svg>
						)}
					</span>
					<span className="title">
						{props.title || 'enter title'}
					</span>
				</div>
				<div className="item-right">
					{/*通过传值改变字体颜色*/}
					{props.inviterCode &&
					JSON.stringify(props.inviterCode) != '{}' ? (
						<span className="text-active">
							{props.inviterCode['user_info']['invite_code']}
						</span>
					) : null}
					{props.googleValidate &&
					JSON.stringify(props.googleValidate) != '{}' ? (
						props.googleValidate['user_info']['is_google'] ? (
							<span className="text-active">
								<FormattedMessage id={'userter.active'} />
							</span>
						) : (
							<span className="text">
								<FormattedMessage
									id={'usercenter.notVerified'}
								/>
							</span>
						)
					) : null}
					{props.phoneValidate &&
					JSON.stringify(props.phoneValidate) != '{}' ? (
						props.phoneValidate['user_info']['is_validate'] ? (
							<span className="text-active">
								<FormattedMessage id={'userter.active'} />
							</span>
						) : (
							<span className="text">
								<FormattedMessage
									id={'usercenter.notVerified'}
								/>
							</span>
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

//switch栏
export const SwitchItem = props => {
	return (
		<List className={props.classNameList}>
			<List.Item
				className={props.className}
				extra={
					<Switch
						checked={props._isTopForFee}
						onClick={props._topForFeeSwitch}
						disabled={props.disabled}
					/>
				}
			>
				{<FormattedMessage id="userCenter.payFee" />}
				&nbsp; ({<FormattedMessage id="userCenter.discount" />})
			</List.Item>
		</List>
	);
};

//侧栏内容框
export const sidebars = (
	<List className="sideBars">
		<List.Item key={1} thumb={require('assets/images/iconman.png')}>
			<FormattedMessage id={'usercenter.login.trade'} />
		</List.Item>
		<List.Item key={2}>
			<FormattedMessage id={'public.index'} />
		</List.Item>
		<List.Item key={3}>
			<FormattedMessage id={'home.personalCenter'} />
		</List.Item>
		<List.Item key={4}>
			<FormattedMessage id={'home.assets'} />
		</List.Item>
		<List.Item key={5}>
			<FormattedMessage id={'usercenter.logout'} />
		</List.Item>
		<List.Item key={6} onClick={() => setLanguage()}>
			{localStorage.getItem('language') == 'zh' ? 'English' : '中文'}
		</List.Item>
	</List>
);

//币种tabs
export class CoinTabs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tabs: [{ title: 'ETH' }]
		};
	}

	sortData(val) {
		// alert(val)
		this.props.sortData(val);
	}
	// console.log('comp==',props.data)
	// const tabs = [
	// 	{ title: 'ETH' },
	// 	{ title: 'BTC' },
	// 	{ title: 'BTC' },
	// 	{ title: 'BTC' },
	// 	{ title: 'BTC' },
	// 	{ title: 'BTC' },
	// 	{ title: 'BTC' }
	// ];

	render() {
		return (
			<div>
				<Tabs
					tabs={this.state.tabs}
					initialPage={this.props.initialPage || 0}
					tabBarBackgroundColor="#000"
					tabBarActiveTextColor="#DCB276"
					tabBarInactiveTextColor="#646464"
					swipeable={false}
					tabBarUnderlineStyle={{
						borderColor: '#DCB276'
					}}
					tabBarTextStyle={{ fontSize: '18px', fontWeight: 400 }}
				>
					<div className="inform-height">
						{/* <InformItem /> */}
						{/* <div style={{ marginTop: 30 }}>
							<div className="inform-items">
								<span className="inform-item one">
									<p>
										TOP/<span style={{ color: '#BEBEBE' }}>
											ETH
										</span>
									</p>
									<p className="inform-item-small">12345675.22</p>
								</span>
								<span className="inform-item two">
									<p>23423141</p>
									<p className="inform-item-small">
										¥2342525.3342
									</p>
								</span>
								<span className="inform-item three">
									<Button className="inform-item-middle">
										+585.74%
									</Button>
								</span>
							</div>
							<div className="inform-items">
								<span className="inform-item one">
									<p>
										TOP/<span style={{ color: '#BEBEBE' }}>
											ETH
										</span>
									</p>
									<p className="inform-item-small">12345675.22</p>
								</span>
								<span className="inform-item two">
									<p>23423141</p>
									<p className="inform-item-small">
										¥2342525.3342
									</p>
								</span>
								<span className="inform-item three">
									<Button className="inform-item-middle">
										+585.74%
									</Button>
								</span>
							</div>
							<div className="inform-items">
								<span className="inform-item one">
									<p>
										TOP/<span style={{ color: '#BEBEBE' }}>
											ETH
										</span>
									</p>
									<p className="inform-item-small">12345675.22</p>
								</span>
								<span className="inform-item two">
									<p>23423141</p>
									<p className="inform-item-small">
										¥2342525.3342
									</p>
								</span>
								<span className="inform-item three">
									<Button className="inform-item-middle">
										+585.74%
									</Button>
								</span>
							</div>
							<div className="inform-items">
								<span className="inform-item one">
									<p>
										TOP/<span style={{ color: '#BEBEBE' }}>
											ETH
										</span>
									</p>
									<p className="inform-item-small">12345675.22</p>
								</span>
								<span className="inform-item two">
									<p>23423141</p>
									<p className="inform-item-small">
										¥2342525.3342
									</p>
								</span>
								<span className="inform-item three">
									<Button className="inform-item-middle">
										+585.74%
									</Button>
								</span>
							</div>
							<div className="inform-items">
								<span className="inform-item one">
									<p>
										TOP/<span style={{ color: '#BEBEBE' }}>
											ETH
										</span>
									</p>
									<p className="inform-item-small">12345675.22</p>
								</span>
								<span className="inform-item two">
									<p>23423141</p>
									<p className="inform-item-small">
										¥2342525.3342
									</p>
								</span>
								<span className="inform-item three">
									<Button className="inform-item-middle">
										+585.74%
									</Button>
								</span>
							</div>
							<div className="inform-items">
								<span className="inform-item one">
									<p>
										TOP/<span style={{ color: '#BEBEBE' }}>
											ETH
										</span>
									</p>
									<p className="inform-item-small">12345675.22</p>
								</span>
								<span className="inform-item two">
									<p>23423141</p>
									<p className="inform-item-small">
										¥2342525.3342
									</p>
								</span>
								<span className="inform-item three">
									<Button className="inform-item-middle">
										+585.74%
									</Button>
								</span>
							</div>
							<div className="inform-items">
								<span className="inform-item one">
									<p>
										TOP/<span style={{ color: '#BEBEBE' }}>
											ETH
										</span>
									</p>
									<p className="inform-item-small">12345675.22</p>
								</span>
								<span className="inform-item two">
									<p>23423141</p>
									<p className="inform-item-small">
										¥2342525.3342
									</p>
								</span>
								<span className="inform-item three">
									<Button className="inform-item-middle">
										+585.74%
									</Button>
								</span>
							</div>
							<div className="inform-items">
								<span className="inform-item one">
									<p>
										TOP/<span style={{ color: '#BEBEBE' }}>
											ETH
										</span>
									</p>
									<p className="inform-item-small">12345675.22</p>
								</span>
								<span className="inform-item two">
									<p>23423141</p>
									<p className="inform-item-small">
										¥2342525.3342
									</p>
								</span>
								<span className="inform-item three">
									<Button className="inform-item-middle">
										+585.74%
									</Button>
								</span>
							</div>
							<div className="inform-items">
								<span className="inform-item one">
									<p>
										TOP/<span style={{ color: '#BEBEBE' }}>
											ETH
										</span>
									</p>
									<p className="inform-item-small">12345675.22</p>
								</span>
								<span className="inform-item two">
									<p>23423141</p>
									<p className="inform-item-small">
										¥2342525.3342
									</p>
								</span>
								<span className="inform-item three">
									<Button className="inform-item-middle">
										+585.74%
									</Button>
								</span>
							</div>
							<div className="inform-items">
								<span className="inform-item one">
									<p>
										TOP/<span style={{ color: '#BEBEBE' }}>
											ETH
										</span>
									</p>
									<p className="inform-item-small">12345675.22</p>
								</span>
								<span className="inform-item two">
									<p>23423141</p>
									<p className="inform-item-small">
										¥2342525.3342
									</p>
								</span>
								<span className="inform-item three">
									<Button className="inform-item-middle">
										+585.74%
									</Button>
								</span>
							</div>
							<div className="inform-items">
								<span className="inform-item one">
									<p>
										TOP/<span style={{ color: '#BEBEBE' }}>
											ETH
										</span>
									</p>
									<p className="inform-item-small">12345675.22</p>
								</span>
								<span className="inform-item two">
									<p>23423141</p>
									<p className="inform-item-small">
										¥2342525.3342
									</p>
								</span>
								<span className="inform-item three">
									<Button className="inform-item-middle">
										+585.74%
									</Button>
								</span>
							</div>
							<div className="inform-items">
								<span className="inform-item one">
									<p>
										TOP/<span style={{ color: '#BEBEBE' }}>
											ETH
										</span>
									</p>
									<p className="inform-item-small">12345675.22</p>
								</span>
								<span className="inform-item two">
									<p>23423141</p>
									<p className="inform-item-small">
										¥2342525.3342
									</p>
								</span>
								<span className="inform-item three">
									<Button className="inform-item-middle">
										+585.74%
									</Button>
								</span>
							</div>
						</div> */}
						{/* <ListView data={props.data}/> */}
						<StatusShow data={this.props.data} />
					</div>
					<div>{/* <InformItem /> */}</div>
				</Tabs>
			</div>
		);
	}
}

//交易信息条
export const InformItem = props => {
	return (
		<div className="inform">
			<ListView />
		</div>
	);
};

//分割线
export const WhiteBlock = props => {
	return <div className="white-block" style={props.style} />;
};

//导航栏
export const Navbars = props => {
	return (
		<NavBar
			className={props.className}
			leftContent={props.title}
			rightContent={props._rightContent}
		/>
	);
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
							<FormattedMessage id={'usercenter.visist.topone'} />
						</p>
						<div className="sure">
							<a href="javascript:;" onClick={props._close}>
								<FormattedMessage id={'public.confirm'} />
							</a>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

// //抽屉
// export const Drawers = props => {
// 	return (
// 		// <div>
// 		// 	{props.isOpen && (
// 		// 		<div className="alertModal">
// 		// 			<div className="container">
// 		// 				<div className="top">
// 		// 					<i className="email-icon" />
// 		// 				</div>
// 		// 				<p className="content">
// 		// 					<FormattedMessage id={'usercenter.visist.topone'} />
// 		// 					<FormattedMessage id={'usercenter.visist.topone'} />
// 		// 				</p>
// 		// 				<div className="sure">
// 		// 					<a href="javascript:;">
// 		// 						<FormattedMessage id={'public.confirm'} />
// 		// 					</a>
// 		// 				</div>
// 		// 			</div>
// 		// 		</div>
// 		// 	)}
// 		// </div>
// 		<Drawer
// 			className="my-drawer"
// 			style={{ minHeight: document.documentElement.clientHeight }}
// 			enableDragHandle={true}
// 			dragToggleDistance={0}
// 			position="right"
// 			sidebar={sidebars}
// 			open={this.props._open}
// 			onOpenChange={this.props._onOpenChange}
// 			sidebarStyle={{ background: '#1B1B1B' }}
// 		>
// 			{}
// 		</Drawer>
// 	);
// };

export const StatusShow = props => {
	return (
		<div className="status-show">
			<p className="tab-bar">
				<span
					className="tab-item one"
					onClick={() => this.sortData('volume')}
				>
					<FormattedMessage id={'home.volume'} />
				</span>
				<span
					className="tab-item two"
					onClick={() => this.sortData('last')}
				>
					<FormattedMessage id={'tradeCenterTop.last'} />
				</span>
				<span
					className="tab-item three"
					onClick={() => this.sortData('change')}
				>
					<FormattedMessage id={'tradeCenterTop.change'} />
				</span>
			</p>
			{props.data.map((item, index) => {
				let color = '',
					bizhi = '',
					reg = /[a-zA-Z]+/gi,
					items = item.name.match(reg);
				item.change >= 0
					? ((color = '#5FC555'), (bizhi = '+'))
					: ((color = '#FF5255'), (bizhi = ''));

				return (
					<div className="inform-items" key={index}>
						<span className="inform-item one">
							<p>
								{items[0]}&nbsp;/<span
									style={{ color: '#BEBEBE' }}
								>
									&nbsp;{items[1]}
								</span>
							</p>

							<p className="inform-item-small">
								{item.volume || '---'}
							</p>
						</span>
						<span className="inform-item two">
							<p>{item.last || '---'}</p>
							<p className="inform-item-small">
								{item.price || ''}
							</p>
						</span>
						<span className="inform-item three">
							<Button
								className="inform-item-middle"
								style={{ background: color }}
							>
								{item.change ? bizhi + item.change : '---'}
							</Button>
						</span>
					</div>
				);
			})}
			{props.data.map((item, index) => {
				let color = '',
					bizhi = '',
					reg = /[a-zA-Z]+/gi,
					items = item.name.match(reg);
				item.change >= 0
					? ((color = '#5FC555'), (bizhi = '+'))
					: ((color = '#FF5255'), (bizhi = ''));

				return (
					<div className="inform-items" key={index}>
						<span className="inform-item one">
							<p>
								{items[0]}&nbsp;/<span
									style={{ color: '#BEBEBE' }}
								>
									&nbsp;{items[1]}
								</span>
							</p>

							<p className="inform-item-small">
								{item.volume || '---'}
							</p>
						</span>
						<span className="inform-item two">
							<p>{item.last || '---'}</p>
							<p className="inform-item-small">
								{item.price || ''}
							</p>
						</span>
						<span className="inform-item three">
							<Button
								className="inform-item-middle"
								style={{ background: color }}
							>
								{item.change ? bizhi + item.change : '---'}
							</Button>
						</span>
					</div>
				);
			})}
		</div>
	);
};
