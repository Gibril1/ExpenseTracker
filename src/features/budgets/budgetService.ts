import axios from "axios";
import { Budget } from "../../modules/Interfaces";

const API_URL:string = 'http://localhost:5000/api/budget/'

const createBudget = async(budget:Budget, token: string) => {
    const config = {
        headers : {
            'x-access-token': `${token}`
        }

    }

    const response = axios.post(API_URL+'create',budget, config)
}

const getBudgets = async(token: string) => {
    const config = {
        headers : {
            'x-access-token': `${token}`
        }

    }

    const response = await axios.get(API_URL, config)
}
const updateBudget = async(budget:Budget, token: string) => {
    const config = {
        headers : {
            'x-access-token': `${token}`
        }

    }

    const response = await axios.put(API_URL+`${budget.id}`,budget, config)

    return response.data
}
const deleteBudget = async(id:number, token: string) => {
    const config = {
        headers : {
            'x-access-token': `${token}`
        }

    }

    const response = await axios.delete(API_URL+`${id}`, config)

    return response.data

}

const budgetService = {
    createBudget,
    getBudgets,
    updateBudget,
    deleteBudget
}

export default budgetService
