import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './confirmEmail.scss';
import Header from 'components/comComponent/header/Header';
import {
	MidText,
	Input,
	Buttons,
	BottomTips,
	ServerTips,
	Validate,
	sidebars
} from '../comComponent/common';
import { Drawer } from 'antd-mobile';

class ConfirmEmailComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			validate: '798689'
		};
	}

	componentDidMount() {}

	_onClickBTn() {
		alert(this.state.validate);
		this.props._onClickBTn(this.state.validate);
	}

	render() {
    const {
      intl: { formatMessage }
    } = this.props;
		return (
			<div className="confirmEmail">
				<Header _onClick={this.props._onOpenChange} />
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
					<div className="confirmEmail-middleContent">
						<MidText
              text={formatMessage({id: 'withdrawVerify.validate'})}
							className="midText-confirmEmail-transfrom"
						/>
						<Validate
							className="validate-confirmEmail-transfrom"
							onChange={val => {
								console.log(val);
								this.setState({ validate: val });
							}}
						/>
						<Buttons
							className="buttons-confirmEmail-transfrom"
              buttonText={formatMessage({id: 'public.sure'})}
							_onClick={() => this._onClickBTn()}
						/>
						<BottomTips
							className="bottomTips-confirmEmail-transfrom"
              BottomTips1={formatMessage({id: 'noValidate'})}
              BottomTips2={formatMessage({id: 'resendEmail.resend'})}
							pathName="/#"
						/>
					</div>
				</Drawer>
			</div>
		);
	}
}

export default injectIntl(ConfirmEmailComp);
