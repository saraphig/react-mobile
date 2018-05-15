import 'babel-polyfill';
import 'intl';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import routes from './routes';
import { setLang, defaultConfig } from './config';
import configureStore from 'models/store/configureStore';
import 'src/styles/reset.css';
import 'src/styles/globle.css';
import 'amfe-flexible';
import 'src/assets/js/iconfont';

const store = configureStore();

const { locale, messages } = setLang();

ReactDOM.render(
	<IntlProvider locale={locale} messages={messages}>
		<Provider store={store}>{routes}</Provider>
	</IntlProvider>,
	document.getElementById('root')
);

// //阻止浏览器滑动后退事件
// document.addEventListener(
// 	'touchmove',
// 	function(event) {
// 		event.preventDefault();
// 		console.log(3423523);
// 	},
// 	false
// );

// $('input[type="text"],textarea').on('click', function() {
// 	var target = this;
// 	setTimeout(function() {
// 		target.scrollIntoViewIfNeeded();
// 	}, 100);
// });

// console.log(document.body.clientHeight);

if (module.hot) {
	module.hot.accept('./routes', () => {
		const newRoutes = require('./routes').default;
		render(newRoutes);
	});
}

// $(function () {
//   if (window.location.href.indexOf("/login") > -1) {
//     //防止页面后退
//     history.pushState(null, null, document.URL);
//     window.addEventListener('popstate', function () {
//       history.pushState(null, null, document.URL);
//     });
//   }
// });
