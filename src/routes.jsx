import React from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
// import Index from 'views/index/index';
// import Login from 'views/login/index';

// import Register from 'views/register/Register';
// import RegisterEmail from 'views/register/RegisterEmail';
// import ConfirmEmail from 'views/register/ConfirmEmail';
// import ConfirmG2f from 'views/confirm/ConfirmG2f';
// import PhoneConfirm from 'views/confirm/PhoneConfirm';
// import DoubleConfirm from 'views/confirm/DoubleConfirm';
// import ChooseLanguage from 'views/extra/ChooseLanguage';
// import MyInvite from 'views/extra/MyInvite';
// import Mywallet from 'views/userCenter/Mywallet';
// import UserCenter from 'views/userCenter/UserCenter';
// import Test from 'views/index/Test';
// import { asyncComponent } from 'utils/comFunction.js';

// 加载组件
// const Index = asyncComponent(() => import('views/index/index'));
// const Login = asyncComponent(() => import('views/login/Login'));
// const Register = asyncComponent(() => import('views/register/Register'));
// const RegisterEmail = asyncComponent(() =>
// 	import('views/register/RegisterEmail')
// );
// const ConfirmEmail = asyncComponent(() =>
// 	import('views/register/ConfirmEmail')
// );
// const ConfirmG2f = asyncComponent(() => import('views/confirm/ConfirmG2f'));
// const PhoneConfirm = asyncComponent(() => import('views/confirm/PhoneConfirm'));
// const DoubleConfirm = asyncComponent(() =>
// 	import('views/confirm/DoubleConfirm')
// );
// const ChooseLanguage = asyncComponent(() =>
// 	import('views/extra/ChooseLanguage')
// );
// const MyInvite = asyncComponent(() => import('views/extra/MyInvite'));
// const Mywallet = asyncComponent(() => import('views/userCenter/Mywallet'));
// const UserCenter = asyncComponent(() => import('views/userCenter/UserCenter'));
// const Agreement = asyncComponent(() => import('views/extra/Agreement'));
// const Download = asyncComponent(() => import('views/extra/Download'));
// const NotFound = asyncComponent(() => import('views/extra/404'));
// const SuccessPage = asyncComponent(() => import('views/extra/SuccessPage'));
// const ErrorPage = asyncComponent(() => import('views/extra/ErrorPage'));
// const ResendEmail = asyncComponent(() => import('views/extra/ResendEmail'));

// import Test from 'views/index/Test';
// const Test = asyncComponent(() => import('views/index/Test'));





import Index from 'views/index/index';
import Login from 'views/login/Login';
import Register from 'views/register/Register';
import RegisterEmail from 'views/register/RegisterEmail';
import ConfirmEmail from 'views/register/ConfirmEmail';
import ConfirmG2f from 'views/confirm/ConfirmG2f';
import PhoneConfirm from 'views/confirm/PhoneConfirm';
import DoubleConfirm from 'views/confirm/DoubleConfirm';
import ChooseLanguage from 'views/extra/ChooseLanguage';
import MyInvite from 'views/extra/MyInvite';
import Mywallet from 'views/userCenter/Mywallet';
import UserCenter from 'views/userCenter/UserCenter';
import Agreement from 'views/extra/Agreement'
import Download from 'views/extra/Download';
import NotFound from 'views/extra/404';
import SuccessPage from 'views/extra/SuccessPage';
import ErrorPage from 'views/extra/ErrorPage';
import ResendEmail from 'views/extra/ResendEmail';
import WithPcOpen from 'views/extra/WithPcOpen';

const routes = [
	{
		path: '/index',
		component: Index
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/register',
		component: Register
	},
	{
		path: '/registerEmail',
		component: RegisterEmail
	},
	{
		path: '/confirmEmail',
		component: ConfirmEmail
	},
	{
		path: '/confirmG2f',
		component: ConfirmG2f
	},
	{
		path: '/phoneConfirm',
		component: PhoneConfirm
	},
	{
		path: '/doubleConfirm',
		component: DoubleConfirm
	},

	{
		path: '/chooseLanguage',
		component: ChooseLanguage
	},
	{
		path: '/mywallet',
		component: Mywallet
	},
	{
		path: '/myInvite',
		component: MyInvite
	},
	{
		path: '/userCenter',
		component: UserCenter
	},
	// {
	// 	path: '/test',
	// 	component: Test
	// },
	{
		path: '/agreement',
		component: Agreement
	},
	{
		path: '/download',
		component: Download
	},
	{
		path: '/404',
		component: NotFound
	},
	{
		path: '/successPage',
		component: SuccessPage
	},
	{
		path: '/errorPage',
		component: ErrorPage
	},
	{
		path: '/resendEmail',
		component: ResendEmail
	},
  // 从pc端进入提醒在pc打开
  {
    path: '/resetPassword',
    component: WithPcOpen
  },
  {
    path: '/errorPage',
    component: WithPcOpen
  },
];

export default (
	<BrowserRouter>
		<Switch>
			<Redirect exact from="/" to="/index" />
			{routes.map((route, index) => {
				return (
					<Route
						key={index}
						path={route.path}
						render={props => (
							<route.component {...props} routes={route.routes} />
						)}
					/>
				);
			})}
			<Route path="*" component={NotFound}/>
			{/* <Redirect from="*" to="/404" /> */}
		</Switch>
	</BrowserRouter>
);
