import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch as Routes, Route } from "react-router-dom";

ReactDOM.render(
  <div className='bg-[#121212] overlfow-y-scroll flex justify-center'>
    <Router basename='/'>      
      <Routes>
        <Route path='/:page?' render={App} />
      </Routes>
    </Router>
  </div>,
  document.getElementById('root')
);