import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Popover, NavBar, Icon} from 'antd-mobile';
import './header.scss';
import logo from 'assets/images/logo.png';
const Item = Popover.Item;
class Header extends React.Component {
	constructor(props) {
		super();
		this.state = {
			visible: false,
    		selected: '',
		};
	}
	onSelect = (opt) => {
		// console.log(opt.props.value);
		this.setState({
		  visible: false,
		  selected: opt.props.value,
		});
	  };
	  handleVisibleChange = (visible) => {
		this.setState({
		  visible,
		});
	  };
	render() {
		

		return (
		<div>
		<NavBar
       className='header'
        mode="light"
       leftContent={
          <Popover mask='false'
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={this.state.visible}
            overlay={[
              (<Item key="1" value="home" data-seed="logId" ><a onClick={() => this.props.clickNav('indexTop')}>首页</a></Item>),
              (<Item key="2" value="product" data-seed="logId"><Link to="/project">产品与服务</Link></Item>),
              (<Item key="3" value="advantage" data-seed="logId"><Link to="/advantage">竞争优势</Link> </Item>),
              (<Item key="4" value="cooperation" data-seed="logId" ><a onClick={() => this.props.clickNav('preocess')}>合作流程</a></Item>),
              (<Item key="5" value="chat" data-seed="logId" ><a onClick={() => this.props.clickNav('contact')}>联系方式</a></Item>)
			]}	
			placement={'bottomLeft'}
            align={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [0, 0],
			}}
			
            onVisibleChange={this.handleVisibleChange}
            onSelect={this.onSelect}
          >
            <div style={{
              height: '100%',
              padding: '0 5px',
              marginLeft: '0px',
              display: 'flex',
			  alignItems: 'center',
            }}
            >
            <i className='iconfont icon-liebiao2'></i>
            </div>
          </Popover>
        }
      >
       <img  src={logo}  alt=""/>
      </NavBar>
    </div>);
	}
}
export default injectIntl(Header);
