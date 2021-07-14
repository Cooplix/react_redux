import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chat from './Chat';
import { Lines } from 'react-preloaders';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Lines/>
            <Chat />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);