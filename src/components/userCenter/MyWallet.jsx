import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './myWallet.scss';
import Header from 'components/comComponent/header/Header';
import {
	MidText,
	Input,
	Buttons,
	BottomTips,
	ServerTips,
	Validate,
	Navbars
} from '../comComponent/common';
import { Checkbox } from 'antd-mobile';
const CheckboxItem = Checkbox.CheckboxItem;

class MyWalletComp extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		return (
			<div className="myWallet">
				<Header />
				<Navbars title="我的资产" className="myWallet-title" />
				<div className="myWallet-money">
					<span className="myWallet-money-info guji">
						资产总估值<i className="iconfont icon-ai44" />
						<i className="iconfont icon-yincang" />
					</span>
					<span className="myWallet-money-info moneys">
						888888.88888888&nbsp;BTC<span className="myWallet-money-yuan">
							/¥23333.333333
						</span>
						{/* <span>******</span> */}
					</span>
					<span className="myWallet-money-info">
						{/* 资产总估值<i className="iconfont icon-ai44" /> */}
						<Checkbox>&nbsp;&nbsp;隐藏0资产钱包</Checkbox>
					</span>
				</div>
			</div>
		);
	}
}

export default injectIntl(MyWalletComp);
