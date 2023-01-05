import axios from "axios";
import { Expenses } from "../../modules/Interfaces";

const API_URL:string = 'http://localhost:5000/api/expenses/'

const createExpenses = async(expenses:Expenses, token:string) => {
    const config = {
        headers: {
            'x-access-token': `${token}`
        }
    }

    const response = await axios.post(API_URL+`create/${expenses.budget}`, expenses, config)

    return response.data

}

const getExpenses = async(id:number, token: string) => {
    const config = {
        headers: {
            'x-access-token': `${token}`
        }
    }

    const response = await axios.get(API_URL+`${id}`, config)
    return response.data
}

const updateExpenses = async(id:number, token: string) => {
    const config = {
        headers: {
            'x-access-token': `${token}`
        }
    }

    const response = await axios.put(API_URL+`${id}`, config)
    return response.data
}

const deleteExpenses = async(id:number, token: string) => {
    const config = {
        headers: {
            'x-access-token': `${token}`
        }
    }

    const response = await axios.delete(API_URL+`${id}`, config)
    return response.data
}

const expenseService = {
    createExpenses,
    getExpenses,
    updateExpenses,
    deleteExpenses
}

export default expenseService