import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import './register.scss';
import Header from 'components/comComponent/header/Header';
import MiddleContent from 'components/comComponent/middleContent/MiddleContent';
import { MidText, Input, Buttons, BottomTips } from '../comComponent/common';
import { Picker, List } from 'antd-mobile';

class RegisterComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pathName: '',
			data: [],
			cols: 1,
			asyncValue: []
		};
	}

	componentDidMount() {
		$(this.phone).intlTelInput({
			initialCountry: 'cn'
		});
		$(this.phone).on('countrychange', (e, countryData) => {
			this.setState({
				nationCode: countryData.dialCode
			});
		});
	}

	// _onClickBTn = e => {
	// 	console.log(this.props);
	// 	this.setState({
	// 		pathName: '/registerEmail'
	// 	});
	// 	// console.log(this.state.pathName);
	// 	return false;
	// };

	render() {
		const { pathName } = this.state;
		return (
			<div className="register">
				<Header />
				<div className="register-middleContent">
					<MidText
						text="手机绑定"
						className="midText-register-transfrom"
					/>
					{/* <Picker
						data={this.state.data}
						cols={this.state.cols}
						value={this.state.asyncValue}
						onPickerChange={this.onPickerChange}
						onOk={v => console.log(v)}
					>
						<List.Item arrow="horizontal" onClick={this.onClick}>
							Multiple & async
						</List.Item>
					</Picker> */}
					<div className="input-container">
						<input
							className="input"
							placeholder="手机号码"
							ref={phone => (this.phone = phone)}
						/>
					</div>
					<Input
						placeholder="输入验证码"
						types={1}
						text="发送验证码"
					/>
					<Input placeholder="推荐码(选填)" />
					<Buttons
						className="buttons-register-transfrom"
						buttonText="下一步"
						_onClick={this.props._onClickBTn}
					/>
					<BottomTips
						className="bottomTips-register-transfrom"
						BottomTips1="已有账号"
						BottomTips2="马上登录"
						pathName="/login"
					/>
				</div>
			</div>
		);
	}
}

export default injectIntl(RegisterComp);
