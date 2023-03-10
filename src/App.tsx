import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import BudgetPage from './pages/BudgetPage';
import CreateBudget from './components/CreateBudget';
import Authbar from './components/Authbar';



function App() {
  return (
    
    <div>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='' element={<Authbar/>}></Route>
            <Route path='/budgets' element={<BudgetPage/>}></Route>
            <Route path='/create-budget' element={<CreateBudget/>}></Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer/>
    </div>
  );
}

export default App;
