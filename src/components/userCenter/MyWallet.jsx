import React from 'react';
import { injectIntl } from 'react-intl';
import './myWallet.scss';
import Header from 'components/comComponent/header/Header';
import {
	Navbars
} from '../comComponent/common';
import { Checkbox } from 'antd-mobile';
import Drawers from 'components/container/Drawers';
import { connect } from 'react-redux';

class MyWalletComp extends React.Component {
	constructor(props) {
		super(props);
		console.log("localStorage.getItem('isSee')",localStorage.getItem('isSee'))
        const isSee = (localStorage.getItem('isSee') === 'false')?false:true;
		this.state={
			isSee: isSee,
			isSeeClass:isSee?'icon-ai44':'icon-yincang',
			noSeeValue:'******',
			isHideSmall:false
		}
	}

	// 资产显示隐藏
    seeAssets = () => {
        this.setState({
            isSeeClass:this.state.isSee?"icon-yincang":"icon-ai44",
            isSee:!this.state.isSee
        })
        localStorage.setItem('isSee',!this.state.isSee);
    }

    // 隐藏小额资产
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
            myAssets,
            priceETH
		} = this.props;
		const {
            isSee,
			noSeeValue,
            isHideSmall
		} =this.state;
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
							/¥{(priceETH&&priceETH.eth.cny) * (myAssets.myCoinAccount)}
						</span>
					</span>:noSeeValue
					}
					{
						isSee?<span className="myWallet-money-info">
						{/* 资产总估值<i className="iconfont icon-ai44" /> */}
                            <Checkbox checked={isHideSmall} onChange={(e) => this.hideSmall(e)} >
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
                                                src={'https://www.top.one/lib/coin/'+coin.coin+'.png'}
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
        myAssets: state.userCenter.myAssets,
        priceETH: state.trade.price
    };
}
export default connect(mapStateToProps)(injectIntl(MyWalletComp));
