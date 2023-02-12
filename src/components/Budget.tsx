import React from 'react'
import { IBudget } from '../modules/Interfaces'

const Budget = ({ budget }:{ budget: IBudget }) => {
  return (
    <div>
        <p>Created on: { budget.start_date.toLocaleDateString()}</p>
        <p>Ends at: { budget.end_date.toLocaleDateString()}</p>
        <h3>Budget Amount: { budget.amount }</h3>
        <h4>Remainder Amount: { budget.remainder }</h4>
    </div>
  )
}

export default Budget