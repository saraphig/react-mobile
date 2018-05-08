import React from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';

import Index from 'views/index/index';
import Login from 'views/login/index';
const routes = [
	{
		path: '/index',
		component: Index
	},
	{
		path: '/login',
		component: Login
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
