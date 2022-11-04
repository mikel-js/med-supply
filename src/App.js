import React, { Component, lazy, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from 'react-router-dom';
import ProtectedRoute from './components/Authentication/ProtectedRoute';

const Login = lazy(() => import('./pages/Login'));
const Items = lazy(() => import('./pages/Items'));

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/items' element={<ProtectedRoute Component={Items} />} />
          {/* <Route exact path='/items' element={<Items />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
