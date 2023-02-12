import React from 'react'
import { IBudget } from '../modules/Interfaces'

const Budget = ({ budget }:{ budget: IBudget }) => {
  
  return (
    <div className='flex card'>
        <p className='poppins-font'>Created on: { new Date(budget.start_date).toLocaleDateString()}</p>
        <p className='poppins-font'>Ends at: { new Date(budget.end_date).toLocaleDateString()}</p>
        <h3>Budget Amount: { budget.amount }</h3>
        <h4>Remainder Amount: { budget.remainder }</h4>
        <p>Category: { budget.category }</p>
    </div>
  )
}

export default Budget