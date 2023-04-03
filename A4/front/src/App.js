import React from 'react';

import Account from './pages/account.js';
import Calculator from './pages/calculator.js';
import Create from './pages/create.js';
import Dashboard from './pages/dashboard.js';
import History from './pages/history.js';
import Home from './pages/home.js';
import Login from './pages/login.js';



import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/account" element = {<Account/>} />
        <Route path="/calculator" element = {<Calculator/>} />
        <Route path="/create" element = {<Create/>} />
        <Route path="/dashboard" element = {<Dashboard/>} />
        <Route path="/history" element = {<History/>} />
        <Route path="/login" element = {<Login/>} />


      </Routes>
    </Router>
  );
}

export default App;
