import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chat from './Chat';
import { Dots } from 'react-preloaders';
import store from "./store/store";
import { Provider } from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Dots />
            <Chat />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);