
import React from 'react'
import './common.scss'

export const Button = (props) => {
    return (
        <a href="javascript:;" className="button" style={props.style}>{props.text || '确定'}</a>
    )
};

export const Input = (props) => {
    return (
        <input className="input" style={props.style} placeholder={props.placeholder || '您的邮箱'} value={props.value}/>
    )
}

//页面中部的大文字
export const midText = text => {
	return <p>{text}</p>;
};
