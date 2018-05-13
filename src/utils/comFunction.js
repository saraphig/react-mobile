import React, { Component } from "react";
import Loading from '../components/comComponent/loading'
import { Toast } from "antd-mobile";
import { key } from 'src/config.js'

var NodeRSA = require('node-rsa');


// 按需加载组件
export function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null
      };
    }

    async componentDidMount() {
      const {default: component} = await importComponent();

      this.setState({
        component: component
      });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : <Loading/>;
    }
  }

  return AsyncComponent;
}

export const topToast = (text, callBack, time, type = 1) =>{
  switch (type) {
    case 1:
      Toast.info(text, time, callBack);
      break;
    case 2:
      Toast.success(text, time, callBack);
      break;
    case 3:
      Toast.fail(text, time, callBack);
      break;
    case 4:
      Toast.offline(text, time, callBack);
      break;
    case 5:
      Toast.loading('loading', time, callBack);
      break;
    default:
    // console.log('准备')
  }
};

  // 加密
export function rsaEncrypt(message){
  let clientKey = new NodeRSA(key)
  clientKey.setOptions({encryptionScheme: 'pkcs1'})
  let encrypted = clientKey.encrypt(message, 'base64')
  return encrypted
}


  // 手机验证
// 手机验证
export function phoneCheck(phoneCode) {
    if (/^\d+$/g.test(phoneCode)) {
        return true;
    } else {
        return false;
    }
}

// 邮箱验证
export function emailCheck(email) {
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
        return true;
    } else {
        return false;
    }
}

// 密码验证
export function passwordCheck(password) {
    if (password.length >= 8) {
        return true;
    } else {
        return false;
    }
}

// 谷歌验证码
export function googleCodeCheck(googleCode) {
    if (googleCode) {
        return false;
    } else {
        return true;
    }
}

// 获取cookie
export const getCookie = function(name) {
  let cookieName = encodeURIComponent(name) + '=',
    cookieStart = document.cookie.lastIndexOf(cookieName),
    cookieValue = null;
  if (cookieStart > -1) {
    var cookieEnd = document.cookie.indexOf(';', cookieStart);
    if (cookieEnd == -1) {
      cookieEnd = document.cookie.length;
    }
    cookieValue = decodeURIComponent(
      document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
    );
  }
  return cookieValue;
};

// 设置cookie
export const setCookie = function(name, value, expires) {
  let cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
  let https = '';
  if ('https:' == document.location.protocol) {
    https = 'https';
  }
  if (expires) {
    var date = new Date();
    date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
    cookieText += '; expires=' + date.toGMTString();
  }
  // if (path) {
  //   cookieText += '; path=' + path;
  // }
  // if (domain) {
  //   cookieText += '; domain=' + domain;
  // }
  if (https) {
    cookieText += '; secure;HttpOnly';
  }
  document.cookie = cookieText;
};