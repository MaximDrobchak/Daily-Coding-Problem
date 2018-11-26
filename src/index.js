import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import { Provider } from 'react-redux';
import store from './store';

import './index.scss';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);

if (module.hot) {
	module.hot.accept();
}
