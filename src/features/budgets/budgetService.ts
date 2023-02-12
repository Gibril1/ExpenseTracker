import axios from "axios";
import { IBudgetData, IBudgetEditData } from "../../modules/Interfaces";

const API_URL:string = 'http://localhost:5000/api/budget/'

const createBudget = async(budget:IBudgetData, token: string) => {
    const config = {
        headers : {
            'x-access-token': `${token}`
        }

    }

    const response = await axios.post(API_URL+'create',budget, config)

    return response.data
}

const getBudgets = async(token: string) => {
    const config = {
        headers : {
            'x-access-token': `${token}`
        }

    }

    const response = await axios.get(API_URL, config)

    return response.data
}
const updateBudget = async(budget:IBudgetEditData, token: string) => {
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
