import React from 'react';
import { injectIntl } from 'react-intl';
import Header from 'components/comComponent/header/Header';
import Drawers from 'components/container/Drawers';
import copy from 'copy-to-clipboard';
import { topToast, getCookie } from 'utils/comFunction';
import './myInvite.scss';

class MyInviteComp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		  fromApp: getCookie('fromApp') || false, //是否APP打开的
    }
	}

  componentWillMount(){
	  if(this.state.fromApp){
	    document.body.style.backgroundColor = '#f5f5f5';
    }
  }

  copyInviteUrl = () => {
    copy(this.props.inviteUrl);
    topToast(this.props.intl.formatMessage({ id: 'code_08' }));
  };

	render() {
		const {
			intl: { formatMessage },
      inviteUrl,
      myPosterLink,
      inviteInfo
		} = this.props;

		const { fromApp } = this.state;

		const content = (
			<div className="inviteCard-wrapper">
        <div className="inviteCard">
          <div className="inviteCard-title">
            <span className="inviteCard-title-text">{formatMessage({id: 'candyDetail.inviteFriends'})}</span>
            <img className="inviteCard-title-icon" src={require('../../assets/images/friend.png')} alt="friends" />
          </div>
          <p className="invite-link">{inviteUrl}</p>
          <div className="invite-btns">
            <a href="javascript:;" className="copy-link" onClick={this.copyInviteUrl}>{formatMessage({id: 'candyDetail.copy'})}</a>
            <a href={myPosterLink} target="_blank" className="my-poster">{formatMessage({id: 'candyDetail.poster'})}</a>
          </div>
        </div>
        <div className="inviteCard">
          <div className="inviteCard-title">
            <span className="inviteCard-title-text">{formatMessage({id: 'candyDetail.inviteTotal'})} {inviteInfo.inviteNum}</span>
            <a href={formatMessage({id: 'candyDetail.ruleLink'})} target="_blank" className="inviteCard-title-rule">
              {formatMessage({id: 'candy.detail'})}
            </a>
          </div>
          <p className="invite-score">{inviteInfo.score}</p>
          <p className="invite-score-rule">{formatMessage({id: 'candyDetail.getScore'})}（8000{formatMessage({id: 'candyDetail.scoreForMan'})})</p>
        </div>
			</div>
		);
		return (
			<div className="myInvite">
        {fromApp ? <div className="myInvite-bg">{content}</div> : <div className="myInvite-bg">
          <Header
            className="myInvite-header"
            _onClick={this.props._onOpenChange}
            _open={this.props._open}
          />
          <Drawers
            childrenNode={content}
            _onOpenChange={this.props._onOpenChange}
            _open={this.props._open}
          />
        </div>}
			</div>
		);
	}
}

export default injectIntl(MyInviteComp);
