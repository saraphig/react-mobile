import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage, injectIntl } from 'react-intl';
//import { actionType as loginSaga } from 'models/sagas/login.js';
import UserCenterComp from 'components/userCenter/UserCenter';
import { actionType as userCenterSaga } from 'models/sagas/userCenter.js';
import { getCookie } from 'utils/comFunction';


class UserCenter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			_check: true,
			open: false,
			isTopForFee: false,
			isToggle: true,
			_disabled: false,
			token:''
		};
	}

	componentDidMount() {
		const token = getCookie('token');
		if (token) {
			const { dispatch } = this.props;
			console.log('userCenterSaga', userCenterSaga);
			this.setState({
				token: token
			})
			dispatch({
				type: userCenterSaga.getUserInfo,
				payload: {
					query: {
						token
					},
					success: res => {
						if (res) {
							this.setState({
								isTopForFee:
									res.info['user_info'].is_top_for_fee
							});
						}
					},
					fail: code => {
						this.props.history.push('/login');
					}
				}
			});
		} else {
			this.setState({
				_disabled: true
			});
		}
	}

	// 切换手续费开关
	_topForFeeSwitch = () => {
		if (this.state._disabled) {
			return;
		}
		const { _check } = this.state;
		this.setState({
			_check: !_check
		});
		const { isToggle } = this.state;
		if (!isToggle) {
			return;
		}
		this.setState({ isToggle: false });
		const { dispatch } = this.props;
		const token = getCookie('token');

		let _isTopForFee = '',
			isTopForFees = this.state.isTopForFee;
		this.state.isTopForFee ? (_isTopForFee = 1) : (_isTopForFee = 0);

		dispatch({
			type: userCenterSaga.topFeeUpdate,
			payload: {
				query: {
					token,
					isTopForFee: _isTopForFee
				},
				success: res => {
					this.setState({
						isTopForFee: !isTopForFees,
						isToggle: true
					});
					// dispatch({
					// 	type: tradingSaga.setTopForFee,
					// 	payload: !_isTopForFee
					// });
				},
				fail: code => {
					console.log(code);
				}
			}
		});
	};

	//drawer
	_onOpenChange = () => {
		this.setState({ open: !this.state.open });
	};

	render() {
		const { open, _disabled,token } = this.state;
		return (
			<div>
				<UserCenterComp
					_topForFeeSwitch={this._topForFeeSwitch}
					_isTopForFee={this.state.isTopForFee}
					_onOpenChange={this._onOpenChange}
					_open={open}
					info={this.props.info}
					_disabled={_disabled}
					token={token}
				/>
			</div>
		);
	}
}

// export function mapStateToProps = state => ({
// 	token: state.login.token,
// 	info: state.userCenter.info
// });

export function mapStateToProps(state) {
	return {
		info: state.userCenter.info
	};
}

// export default Index;
export default connect(mapStateToProps)(injectIntl(UserCenter));
