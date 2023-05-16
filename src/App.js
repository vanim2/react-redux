import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Employees from './components/Employees';
// import Counter from './components/Counter';
import CounterRedux from './components/CounterRedux';
import UserList from './components/UserList';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/counter" element={<CounterRedux />} />
        <Route path="/users" element={<UserList />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
