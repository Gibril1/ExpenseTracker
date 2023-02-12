import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useAppDispatch } from '../app/hooks'
import { getBudgets } from '../features/budgets/budgetSlice'
import Budget from './Budget'
import { IBudget } from '../modules/Interfaces'



const Budgets = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getBudgets())
    })

    const { isLoading, isError, isSuccess, message, budgets } = useSelector((state:any) => state.budgets)

    if(isError){
        toast.error(message)
    }

    
  return (
    <div>
        <h1>Budgets Drawn</h1>
        { budgets.map((budget: IBudget) => (
            <Budget key = {budget.id} budget={budget}/>
        ))}
    </div>
  )
}

export default Budgets