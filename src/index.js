import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorldJSX from './App';
import Method from './method';
import Clock from './clock';
import MyEvents from './Event';
import Form from './Form';
// import * as serviceWorker from './serviceWorker';

var h1 = <h1 title="Hello world JSX Example">Hello works JSX</h1>

ReactDOM.render(
    <div>
        <Form/>
        <MyEvents/>
        <Clock/>
        <HelloWorldJSX link="https://www.google.com" linkText="Google"/>,
        <HelloWorldJSX link="https://www.Facebook.com" linkText="Facebook"/>,
        <HelloWorldJSX link="https://www.youutube.com" linkText="youtube"/>
        <Method/>
    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
