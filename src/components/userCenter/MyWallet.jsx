import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import './myWallet.scss';
import Header from 'components/comComponent/header/Header';
import {
	Navbars
} from '../comComponent/common';
import { Checkbox } from 'antd-mobile';
import Drawers from 'components/container/Drawers';
import { connect } from 'react-redux';
import {getCookie,setCookie} from "../../utils/comFunction";

const CheckboxItem = Checkbox.CheckboxItem;

class MyWalletComp extends React.Component {
	constructor(props) {
		super(props);
        const isSee = getCookie('isSee')||true;
		this.state={
			isSee: isSee,
			isSeeClass:isSee?'icon-ai44':'icon-yincang',
			noSeeValue:'******',
			isHideSmall:false
		}
	}

	componentDidMount() {}
    seeAssets = () => {
        setCookie('isSee',!this.state.isSee);
        this.setState({
            isSeeClass:this.state.isSee?"icon-yincang":"icon-ai44",
            isSee:!this.state.isSee
        })

	}
    hideSmall = (e) => {
		if(e.target.checked){
			this.setState({
                isHideSmall:true
			});
		}else{
            this.setState({
                isHideSmall:false
            });
		}
	}
	render() {
		const {
			intl: { formatMessage },
            myAssets
		} = this.props;
		const {
            isSee,
			noSeeValue,
            isHideSmall
		} =this.state;
		console.log("myAssets===",myAssets)
		const content = (
			<div>
				<Navbars
					title={formatMessage({ id: 'myAssets' })}
					className="myWallet-title"
				/>
				<div className="myWallet-money">
					<span className="myWallet-money-info guji">
						{formatMessage({ id: 'topMenu.totalBTC' })}
						<i onClick={this.seeAssets} className={`iconfont ${this.state.isSeeClass}`}/>
					</span>
					{
						isSee?<span className="myWallet-money-info moneys">
						{myAssets.myCoinAccount}&nbsp;ETH<span className="myWallet-money-yuan">
							/¥23333.333333
						</span>
					</span>:noSeeValue
					}
					{
						isSee?<span className="myWallet-money-info">
						{/* 资产总估值<i className="iconfont icon-ai44" /> */}
                            <Checkbox  onChange={(e) => this.hideSmall(e)} >
							&nbsp;&nbsp;{formatMessage({
                                id: 'depositWithdraw.filterZero'
                            })}
						</Checkbox>
						</span>:<span className="myWallet-money-info"></span>
					}

				</div>
				<div className="myWallet-money-card-all">
					{
                        myAssets.coinList.map((coin,index) => {

                        	return (isHideSmall&&coin.total==0)?null:(<div className="myWallet-money-card" key={index}>
                                <div className="myWallet-card">
                                    <div className="myWallet-card-title">
                                        <div>
                                            <img
                                                src={require('assets/images/btc.png')}
                                                alt="btc"
                                            />
                                            <span>{coin.coin}</span>
                                        </div>
                                        <div className="myWallet-card-title-right">
                                            {formatMessage({
                                                id: 'depositWithdraw.candy'
                                            })}: <span>{isSee?coin.fee:noSeeValue}</span>
                                        </div>
                                    </div>
                                    <div className="myWallet-card-item">
                                        <div className="myWallet-card-item-left">
									<span>
										{formatMessage({
                                            id: 'orderTable.total'
                                        })}
									</span>
                                        </div>
                                        <div className="myWallet-card-item-right">
                                            <span>{isSee?coin.total:noSeeValue}</span>
                                        </div>
                                    </div>
                                    <div className="myWallet-card-item">
                                        <div className="myWallet-card-item-left">
									<span>
										{formatMessage({
                                            id: 'orderTable.available'
                                        })}
									</span>
                                        </div>
                                        <div className="myWallet-card-item-right">
                                            <span>{isSee?coin.available:noSeeValue}</span>
                                        </div>
                                    </div>
                                    <div className="myWallet-card-item">
                                        <div className="myWallet-card-item-left">
									<span>
										{formatMessage({
                                            id: 'orderTable.freeze'
                                        })}
									</span>
                                        </div>
                                        <div className="myWallet-card-item-right">
                                            <span>{isSee?coin.freeze:noSeeValue}</span>
                                        </div>
                                    </div>
                                    <div className="myWallet-card-item">
                                        <div className="myWallet-card-item-left">
									<span>
										{formatMessage({
                                            id: 'depositWithdraw.total'
                                        })}
									</span>
                                        </div>
                                        <div className="myWallet-card-item-right">
                                            <span>{isSee?`${coin.ethvalue}ETH`:noSeeValue}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>)
						})
					}
				</div>
			</div>
		);
		return (
			<div className="myWallet">
				<div className="myWallet-bg">
					<Header
						className="myWallet-header"
						_onClick={this.props._onOpenChange}
					/>
					<Drawers
						childrenNode={content}
						_onOpenChange={this.props._onOpenChange}
						_open={this.props._open}
					/>
				</div>
			</div>
		);
	}
}

export function mapStateToProps(state) {
    return {
        myAssets: state.userCenter.myAssets
    };
}
export default connect(mapStateToProps)(injectIntl(MyWalletComp));
