import React from 'react';
import ReactDOM from 'react-dom';



import AppRouter from './routers/AppRouter';
import 'semantic-ui-css/semantic.min.css';
import './styles/styles.scss';


ReactDOM.render(
    <AppRouter />,document.querySelector('#App')
);
