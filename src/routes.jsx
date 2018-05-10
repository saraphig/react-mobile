import React from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import Index from 'views/index/index';
// import Login from 'views/login/index';
import Test from 'views/index/Test';
import Register from 'views/register/Register';
import RegisterEmail from 'views/register/RegisterEmail';
import ConfirmEmail from 'views/register/ConfirmEmail';
import ConfirmG2f from 'views/confirm/ConfirmG2f';
import PhoneConfirm from 'views/confirm/PhoneConfirm';
import DoubleConfirm from 'views/confirm/DoubleConfirm';
import ChooseLanguage from 'views/extra/ChooseLanguage';
import Mywallet from 'views/userCenter/Mywallet';
import { asyncComponent } from 'utils/comFunction.js';

// 加载组件
// import Index from 'views/index/index';
const Login = asyncComponent(() => import('views/login/Login'));
// import Login from 'views/login/index';

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
		path: '/test',
		component: Test
	},
	{
		path: '/chooseLanguage',
		component: ChooseLanguage
	},
	{
		path: '/mywallet',
		component: Mywallet
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
