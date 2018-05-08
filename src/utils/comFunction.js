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

  // 邮箱验证