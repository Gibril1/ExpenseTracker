import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useAppDispatch } from '../app/hooks'
import { BudgetState, getBudgets, reset } from '../features/budgets/budgetSlice'
import Budget from './Budget'
import { IBudget } from '../modules/Interfaces'



const Budgets = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getBudgets())
        dispatch(reset())
    },[dispatch])

    
    const budgetState = useSelector((state: any) => state.budget) as BudgetState;
    const { budgets, isError, isLoading, message } = budgetState;


    if(isError){
        toast.error(message)
    }

    if(isLoading){
        return <>Loading....</>
    }

   
    
    
  return (
    <div className='flex'>
        <h1 className='poppins-font'>Budgets Drawn</h1>
        <div>
            
            { budgets.length === 0 ? <>
                <p className='bold'>You have not created any budgets yet. Create One</p>
            </>: budgets.map((budget: IBudget) => (
                <Budget key = {budget.id} budget={budget}/>
            ))}
        </div>
        
    </div>
  )
}

export default Budgets