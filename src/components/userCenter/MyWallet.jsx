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

class MyWalletComp extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {}

	render() {
		return (
			<div className="myWallet">
				<Header />
                <Navbars title='我的资产' className='myWallet-title'/>
                <div>
                    
                </div>
			</div>
		);
	}
}

export default injectIntl(MyWalletComp);
