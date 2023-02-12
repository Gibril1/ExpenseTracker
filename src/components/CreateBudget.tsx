import React, { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { useAppDispatch } from '../app/hooks'
import { createBudget } from '../features/budgets/budgetSlice'
import { IBudgetData } from '../modules/Interfaces'

const CreateBudget = () => {
    const dispatch = useAppDispatch()
    const[formData, setFormData] = useState({
        amount:0,
        days:0,
        category:''
    } as IBudgetData)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const { amount, days, category } = formData

    const handleSubmit = (e:any) => {
        e.preventDefault()

        if(amount === 0 || days === 0 || category === ''){
            toast.error('Fields cannot be empty')
        }

        const budgetData = {
            'amount':amount,
            'days': days,
            'category': category
        } as IBudgetData

        dispatch(createBudget(budgetData))
    }
  return (
    <>
    <form onSubmit={handleSubmit} className='flex'>
        <div className="form-group flex">
            <label htmlFor="amount">Amount</label>
            <input 
                type="number" 
                name="amount" 
                id="amount"
                onChange={onChange}
                 />
        </div>
        <div className="form-group flex">
            <label htmlFor="days">Days</label>
            <input 
                type="number" 
                name="days" 
                id="days"
                onChange={onChange}
                 />
        </div>
        <div className="form-group flex">
            <label htmlFor="category">Category</label>
            <input 
                type="number" 
                name="category" 
                id="category"
                onChange={onChange}
                 />
        </div>
        <div>
            <button className="btn">Create Budget</button>
        </div>

    </form>
    </>
  )
}

export default CreateBudget