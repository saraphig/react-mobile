import React from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import Index from 'views/index/index';
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
import { asyncComponent } from 'utils/comFunction.js';
// import Test from 'views/index/Test';

// 加载组件
// import Index from 'views/index/index';
const Login = asyncComponent(() => import('views/login/Login'));
// import Login from 'views/login/index';

// import Register from 'views/register/Register';
const Register = asyncComponent(() => import('views/register/Register'));
// import RegisterEmail from 'views/register/RegisterEmail';
const RegisterEmail = asyncComponent(() => import('views/register/RegisterEmail'));
// import ConfirmEmail from 'views/register/ConfirmEmail';
const ConfirmEmail = asyncComponent(() => import('views/register/ConfirmEmail'));
// import ConfirmG2f from 'views/confirm/ConfirmG2f';
const ConfirmG2f = asyncComponent(() => import('views/confirm/ConfirmG2f'));
// import PhoneConfirm from 'views/confirm/PhoneConfirm';
const PhoneConfirm = asyncComponent(() => import('views/confirm/PhoneConfirm'));
// import DoubleConfirm from 'views/confirm/DoubleConfirm';
const DoubleConfirm = asyncComponent(() => import('views/confirm/DoubleConfirm'));
// import ChooseLanguage from 'views/extra/ChooseLanguage';
const ChooseLanguage = asyncComponent(() => import('views/extra/ChooseLanguage'));
// import MyInvite from 'views/extra/MyInvite';
const MyInvite = asyncComponent(() => import('views/extra/MyInvite'));
// import Mywallet from 'views/userCenter/Mywallet';
const Mywallet = asyncComponent(() => import('views/userCenter/Mywallet'));
// import UserCenter from 'views/userCenter/UserCenter';
const UserCenter = asyncComponent(() => import('views/userCenter/UserCenter'));
// import Test from 'views/index/Test';
const Test = asyncComponent(() => import('views/index/Test'));

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
	{
		path: '/test',
		component: Test
	}
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
		</Switch>
	</BrowserRouter>
);
