import React from 'react'
import './common.scss'

export const Button = (props) => {
    return (
        <a href="javascript:;" className="button" style={props.style}>{props.text || '确定'}</a>
    )
};

export const Input = (props) => {

    return (
      <div className="input-container">
        <input className="input" style={props.style} placeholder={props.placeholder || '您的邮箱'} value={props.value}/>
        {props.type === 1 && <div>
          <span className="line"></span>
          <span className={props.disabled ? 'input-sended' : 'input-send'}>{props.disabled ? `已发送(${props.time})` : '发送验证码'}</span>
        </div>}
      </div>

    )
};

export const Validate = (props) => {
  return (
    <div className='validate' style={props.style}>
        <input type="number" maxLength="6" autoComplete="off"/>
      <ul className="code-display">
        <li><span>6</span></li>
        <li><span>1</span></li>
        <li><span>2</span></li>
        <li><span>1</span></li>
        <li><span className='number'></span></li>
        <li><span className='number'></span></li>
      </ul>
    </div>
  )
};