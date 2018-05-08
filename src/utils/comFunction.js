import React, { Component } from "react";


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
  
        return C ? <C {...this.props} /> : <p>Loading...</p>;
      }
    }
  
    return AsyncComponent;
  }


  // 手机验证

  // 邮箱验证