import React from 'react';
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';


import Index from 'views/index/index'
import Project from 'views/project/index'
import Advantage from 'views/advantage/index'

const routes = [
	{
		path: '/index',
		component: Index
	},
	{
		path: '/project',
		component: Project
	},
	{
		path: '/advantage',
		component: Advantage
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
			{/* <Redirect from="*" to="/404" /> */}
		</Switch>
	</BrowserRouter>
);
