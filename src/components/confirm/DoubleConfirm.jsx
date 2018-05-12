import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './doubleConfirm.scss';
import Header from 'components/comComponent/header/Header';
import Drawers from 'components/container/Drawers';
import {
	MidText,
	Input,
	Buttons,
	BottomTips,
	ServerTips,
	Validate,
	TopTabs
} from '../comComponent/common';
import { Drawer, List } from 'antd-mobile';

class ConfirmG2FComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			validate: '',
			googleCode: '',
			checked: 'google'
		}
		console.log(props.info)
	}

	componentDidMount() {}

	// 提交
	onClick(){
		this.props.onClick(this.state.googleCode, this.state.validate, this.state.checked)
	}

	render() {
		const {
			intl: { formatMessage }
		} = this.props;

		const content = (
			<div className="doubleConfirm-middleContent">
				<MidText
					text={formatMessage({ id: 'doubleConfirm' })}
					className="midText-doubleConfirm-transfrom"
				/>
				<TopTabs
					placeholder1={formatMessage({ id: 'register.phone' })}
					placeholder2={formatMessage({
						id: 'register.phoneValidate'
					})}
					placeholder3={formatMessage({
						id: 'google.code'
					})}
				/>
				<Buttons
					className="buttons-doubleConfirm-transform"
					buttonText={formatMessage({
						id: 'depositWithdraw.submit'
					})}
				/>
			</div>
		);
		return (
			<div className="DoubleConfirm">
				<Header _onClick={this.props._onOpenChange}/>
				<Drawer
					className="my-drawer"
					style={{ minHeight: document.documentElement.clientHeight }}
					enableDragHandle={true}
					dragToggleDistance={0}
					position="right"
					sidebar={sidebars}
					open={this.props._open}
					onOpenChange={this.props._onOpenChange}
					sidebarStyle={{ background: '#1B1B1B' }}
				>
					<div className="doubleConfirm-middleContent">
						<MidText
              text={formatMessage({id: 'doubleConfirm'})}
							className="midText-doubleConfirm-transfrom"
						/>
						<TopTabs 
							googleHolder={formatMessage({id: 'google.code'})}
							phoneHolder={formatMessage({id: 'register.phone'})}
							validateHolder={formatMessage({id: 'register.phoneValidate'})}
							validateChange={(val) => {this.setState({validate: val})}}
							googleChange={(val) => {this.setState({googleCode: val})}}
							checkChange={(val) => {this.setState({checked: val})}}
							phone={this.props.info.phone}
							sendPhoneCode={this.props.sendPhoneCode}
						/>
						<Buttons
							className="buttons-doubleConfirm-transform"
							buttonText={formatMessage({id: 'depositWithdraw.submit'})}
							_onClick={() => this.onClick()}
						/>
					</div>
				</Drawer>
			</div>
		);
	}
}

export default injectIntl(ConfirmG2FComp);
