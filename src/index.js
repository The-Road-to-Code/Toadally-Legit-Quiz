import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import QuizContainer from './containers/QuizContainer';

ReactDOM.render(
    <React.StrictMode>
        <App />
        <QuizContainer />
    </React.StrictMode>,
    document.getElementById('root')
);
