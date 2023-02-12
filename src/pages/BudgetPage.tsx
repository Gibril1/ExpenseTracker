import React from 'react'
import Budgets from '../components/Budgets'
import CreateBudget from '../components/CreateBudget'



const BudgetPage = () => {
  
  
  return (
    <>
    <div className="grid">
      <div>
        <Budgets/>
      </div>
      <div>
        <CreateBudget/>
      </div>
    </div>
    </>
  )
}

export default BudgetPage