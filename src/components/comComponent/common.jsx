import React from 'react';
import { Link } from 'react-router-dom';
import './common.scss';

export const Button = props => {
	return (
		<a href="javascript:;" className="button" style={props.style}>
			{props.buttonText}
		</a>
	);
};

export const Input = props => {
	return (
		<input
			className="input"
			style={props.style}
			placeholder={props.placeholder}
			value={props.value}
		/>
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
			<input type="checkbox" style={{ background: '#dab075' }} />
			<span>{props.ServerTips1}</span>&nbsp;<Link to={props.pathName}>
				<span className="ServerTips-right">{props.ServerTips2}</span>
			</Link>
		</p>
	);
};
