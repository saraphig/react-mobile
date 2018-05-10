import React from 'react';
import { Link } from 'react-router-dom';
import './common.scss';
import { Tabs, WhiteSpace, Badge, Button } from 'antd-mobile';
import defaultUserImg from '../../assets/images/user_head_img@2x.png'

export const Buttons = props => {
	console.log(props);
	return (
		<Button className="button" style={props.style} onClick={props._onClick}>
			{props.buttonText}
		</Button>
	);
};

//页面中部的大文字
export const MidText = props => {
	return (
		<p className="midText" style={props.style}>
			{props.text}
		</p>
	);
};

//底部文字
export const BottomTips = props => {
	return (
		<p className="BottomTips" style={props.style}>
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
		<p className="ServerTips" style={props.style}>
			<input
				type="checkbox"
				style={{ background: '#dab075', marginRight: 7 }}
			/>
			<span>{props.ServerTips1}</span>&nbsp;<Link to={props.pathName}>
				<span className="ServerTips-right">{props.ServerTips2}</span>
			</Link>
		</p>
	);
};

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

export const Validate = props => {
	return (
		<div className="validate" style={props.style}>
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
					style={{
						margin: '0 30px'
					}}
				>
					<Input style={{ marginTop: 8 }} placeholder="手机号码" />
					<Input placeholder="输入验证码" types={1} />

					{/* <div style={{ visibility: 'hidden' }}>
						<Input style={{ visibility: 'hidden' }} />
					</div> */}
				</div>
				<div
					style={{
						margin: '0 30px'
					}}
				>
					<Input style={{ marginTop: 8 }} placeholder="谷歌验证码" />
				</div>
			</Tabs>
			<WhiteSpace />
		</div>
	);
};

export const UserTop = props => {
  return(
    <div className='user-top'>
      <img src={defaultUserImg} className='head' />
      {props.user ?
        <div>
          <p className='title'>topcoin1234@gmail.com</p>
          <p className='text'>最后登陆时间：2018-03-12 11:48:00</p>
          <p className='text'>IP: 45.32.255.166</p>
        </div> :
        <div>
          <p className='title'>未登录</p>
          <p className='text'>马上登录，体验极速交易</p>
        </div>
      }
    </div>
  )
};

export const ListItemWithButton = props => {
  return(
    <div className='listItem' style={props.style}>
      <div className='listItem-left'>
        <span className='title'>使用TOPCOIN支付交易手续费（50%折扣）</span>
      </div>
      <div className='listItem-right'>

      </div>
    </div>
  )
};
