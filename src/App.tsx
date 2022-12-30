import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    
    <div>
      <Router>
        <div className='container'>
          <Routes>
            <Route  path='/' element={<RegisterPage/>}></Route>
            <Route  path='/login' element={<LoginPage/>}></Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;
