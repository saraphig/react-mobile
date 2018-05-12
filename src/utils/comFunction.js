import React, { Component } from "react";
import Loading from '../components/comComponent/loading'


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
        const { default: component } = await importComponent();
  
        this.setState({
          component: component
        });
      }
  
      render() {
        const C = this.state.component;
  
        return C ? <C {...this.props} /> : <Loading />;
      }
    }
  
    return AsyncComponent;
  }

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