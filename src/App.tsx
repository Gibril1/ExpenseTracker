import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    
    <>
      <Router>
        <div>
          <Routes>
            <Route  path='/' element={<RegisterPage/>}></Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
