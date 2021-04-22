import React from 'react';
import ReactDOM from 'react-dom';
import MainPanel from './components/panels/main-panel';
import storeProvider from './store/store-provider';
import { Provider } from 'react-redux';

const wrapper = document.getElementById('main');
const store = storeProvider.create(false);

const App = () => {
    return (
        <Provider store={store}>
            <MainPanel />
        </Provider>
    );
}

wrapper
    ? ReactDOM.render(React.createElement(App), wrapper)
    : false;
