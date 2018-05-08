// import React from 'react';
// import { connect } from 'react-redux';
// import { FormattedMessage, injectIntl } from 'react-intl';
// import { Drawer, List, NavBar, Icon } from 'antd-mobile';
// import './middleContent.scss';
// import { MidText, Input, Button, BottomTips } from '../common';

// class MiddleContent extends React.Component {
// 	constructor(props) {
// 		super();
// 		this.state = {};
// 	}

// 	render() {
// 		const {
// 			text,
// 			MidTextHeight,
// 			MidTextBottom,
// 			ButtonHeight,
// 			placeHold1,
// 			placeHold2,
// 			placeHold3,
// 			BottomTips1,
// 			BottomTips2,
// 			BottomTipsHeight,
// 			buttonText,
// 			pathName
// 		} = this.props;
// 		console.log(this.props);
// 		return (
// 			<div>
// 				<div className="middleContent">
// 					{this.props.types === 'login' ? (
// 						<p className="middleContent-img-logo">
// 							<img
// 								className="middleContent-logo"
// 								src={require('assets/images/TOP.ONE@logo.png')}
// 								alt="top.one"
// 							/>
// 						</p>
// 					) : null}
// 					<MidText
// 						text={text}
// 						style={{
// 							marginTop: MidTextHeight,
// 							marginBottom: MidTextBottom
// 						}}
// 					/>
// 					<Input placeholder={placeHold1} />
// 					<Input placeholder={placeHold2} />
// 					{this.props.types === 'register' ? (
// 						<Input placeholder={placeHold3} />
// 					) : null}
// 					<Button style={{ marginTop: ButtonHeight }} buttonText={buttonText}/>
// 					<BottomTips
// 						BottomTips1={BottomTips1}
// 						BottomTips2={BottomTips2}
// 						style={{ marginTop: BottomTipsHeight }}
// 						pathName={pathName}
// 					/>
// 				</div>
// 			</div>
// 		);
// 	}
// }
// export default injectIntl(MiddleContent);
