import React from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import Index from 'views/index/index';
// import Login from 'views/login/index';
import Register from 'views/register/Register';
import RegisterEmail from 'views/register/RegisterEmail';
import { asyncComponent } from 'utils/comFunction.js';

// 加载组件
// import Index from 'views/index/index';
const Login = asyncComponent(() => import('views/login/index'));
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
