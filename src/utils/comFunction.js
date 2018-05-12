import React, { Component } from "react";
import Loading from '../components/comComponent/loading'
import { Toast } from "antd-mobile";

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


  // 手机验证

  // 邮箱验证