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

	componentWillMount() {
		const token = getCookie('token');
		if (token) {
			const { dispatch } = this.props;
			this.setState({
				token: token
			});

			// 获取用户信息并存储在store
			dispatch({
				type: userCenterSaga.getUserInfo,
				payload: {
					query: {
						token
					},
					success: res => {
						if (res) {
							// 费率开关
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
				},
				fail: code => {
					// console.log(code);
				}
			}
		});
	};

	// 抽屉显示隐藏
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

export default connect()(injectIntl(UserCenter));
