import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import routes from './routes';
import { setLang, defaultConfig } from './config';
import configureStore from 'models/store/configureStore';
import 'src/styles/reset.css'
import 'amfe-flexible'

const store = configureStore();

const { locale, messages } = setLang();

ReactDOM.render(
      <IntlProvider locale={locale} messages={messages}>
        <Provider store={store}>
          { routes }
        </Provider>
      </IntlProvider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./routes', () => {
      const newRoutes = require('./routes').default;
      render(newRoutes);
    });
  }


