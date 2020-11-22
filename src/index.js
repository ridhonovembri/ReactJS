import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/Home';

// const HelloComponent = () => {
//   return <p>this is using function component</p>
// }

// class HelloComponentUsingStatefull extends React.Component {
//   render(){
//     return(
//       <p>this is using class component</p>
//     )
//   }
// }


ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
