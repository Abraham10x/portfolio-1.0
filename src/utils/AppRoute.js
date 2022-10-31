import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../views/Home'
import ScrollToTop from './ScrollToTop';

const AppRoute = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default AppRoute;