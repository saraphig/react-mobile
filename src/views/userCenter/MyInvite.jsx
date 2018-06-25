import React from 'react';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { actionType as userCenterSaga } from 'models/sagas/userCenter';
import { getCookie, topToast } from 'utils/comFunction';
import MyInviteComp from 'components/userCenter/MyInvite';

class MyInvite extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			inviteInfo: [],
			info: [],
			inviteUrl: '', //邀请链接
			myPosterLink: '', //专属海报
			inviteDetail: [], //邀请明细,
			noMorePage: false, //无下页
			indexPage: 1 //当前页
		};
	}

	componentDidMount() {
		const token = getCookie('token');
		let query = {
			token: token
		};

		this.props.dispatch({
			type: userCenterSaga.getUserInfo,
			payload: {
				query,
				success: data => {
					this.setState({
						info: data.info.user_info,
						inviteUrl: `${window.location.origin}/register?inviter=${
							data.info.user_info.invite_code
						}`,
						myPosterLink: `https://fortop.one/share/?inviteCode=${
							data.info.user_info.invite_code
						}`
					});
				},
				fail: this.fail,
				error: this.error
			}
		});

		this.props.dispatch({
			type: userCenterSaga.getInviteInfo,
			payload: {
				query,
				success: data => {
					this.setState({
						inviteInfo: data.data
					});
				},
				fail: this.fail,
				error: this.error
			}
		});

		this.getInviteDetail();
	}

	//滚动加载数据
	_onScroll = () => {
		let that = this;
		$('.inviteCard-detail-scroll').scroll(function() {
			clearTimeout(this.timer);
			this.timer = setTimeout(() => {
				var scrollTop = $(this).scrollTop();
				var scrollHeight = document.getElementById('scroll').scrollHeight;
				var windowHeight = $(this).height();

				if (scrollTop + windowHeight > scrollHeight - 20) {
					console.log('wfgweg');
					console.log(that.state.indexPage);
					that.getInviteDetail('', that.state.indexPage);
				}
			}, 150);
		});
	};

	getInviteDetail = (numPerPage, page) => {
		console.log(page);
		if (this.state.noMorePage) {
			return;
		}

		const { dispatch } = this.props;
		const token = getCookie('token');
		dispatch({
			type: userCenterSaga.inviteDetail,
			payload: {
				query: {
					token,
					page: page ? page : 1,
					numPerPage: numPerPage ? numPerPage : 10
				},
				success: res => {
					//判断每夜条数是否大于实际接受条数，当大于时说明没有更多数据了
					if (numPerPage ? numPerPage : 10 > res.userList.length) {
						this.setState({
							noMorePage: true
						});
					}
					//解构出inviteDetail
					const { inviteDetail } = this.state;
					inviteDetail.push(...res.userList);
					//放置邀请详情数据
					this.setState({
						inviteDetail,
						indexPage: this.state.indexPage + 1
					});
				},
				fail: this.fail
			}
		});
	};

	fail = () => {
		this.props.history.push('login');
	};

	error = () => {
		const {
			intl: { formatMessage }
		} = this.props;
		topToast(formatMessage({ id: 'serverError' }));
	};

	_onOpenChange = () => {
		this.setState({ open: !this.state.open });
	};

	render() {
		const { open, inviteInfo, inviteUrl, myPosterLink, inviteDetail } = this.state;
		return (
			<div>
				<MyInviteComp
					inviteUrl={inviteUrl}
					myPosterLink={myPosterLink}
					_onOpenChange={this._onOpenChange}
					_open={open}
					inviteInfo={inviteInfo}
					_onScroll={this._onScroll}
					inviteDetail={inviteDetail}
				/>
			</div>
		);
	}
}

export default connect()(injectIntl(MyInvite));
