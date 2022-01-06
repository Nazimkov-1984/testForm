import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.tsx';
import Modal from "./component/Modal/Modal"



ReactDOM.render(
  
  <React.StrictMode>
    <App />
      {ReactDOM.createPortal(<Modal/>, document.getElementById('modal'))}
  </React.StrictMode>,
  document.getElementById('root')
);


