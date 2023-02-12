import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { store } from "../../app/store"
import { IBudgetData, IBudget, IBudgetEditData } from "../../modules/Interfaces"
import budgetService from "./budgetService"



export interface BudgetState {
    budgets: IBudget[],
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: any
}

const initialState = {
    budgets : [],
    isError: false,
    isSuccess: false,
    isLoading : false,
    message: ''
} as BudgetState


// Create Budget
export const createBudget = createAsyncThunk('budget/create', async(budget:IBudgetData, thunkAPI:any) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await budgetService.createBudget(budget, token)
    } catch (error: any) {
        const message = (error.response && 
            error.response.data && 
            error.response.data.message)|| 
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get All Budgets
export const getBudgets = createAsyncThunk('budgets/get', async(_,thunkAPI:any) => {
    try {
        const token = store.getState().auth.user?.token
        return await budgetService.getBudgets(token)
    } catch (error:any) {
        const message = (error.response && 
            error.response.data && 
            error.response.data.message)|| 
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
        
    
})


// Update An Budget
export const updateBudget = createAsyncThunk('budgets/update', async(budget:IBudgetEditData, thunkAPI:any) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await budgetService.updateBudget(budget, token)
    } catch (error:any) {
        const message = (error.response && 
            error.response.data && 
            error.response.data.message)|| 
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
        
    }
})


// Update An Expense
export const deleteBudget = createAsyncThunk('budget/delete', async(id:number, thunkAPI:any) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await budgetService.deleteBudget(id, token)
    } catch (error:any) {
        const message = (error.response && 
            error.response.data && 
            error.response.data.message)|| 
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
        
    }
})



const budgetSlice = createSlice({
    name:'budget',
    initialState,
    reducers:{
        reset:(state) => initialState
    },
    extraReducers:(builder) => {
        builder
            .addCase(createBudget.fulfilled, (state, action) => {
                state.isLoading = true
                state.isSuccess = true
                state.budgets.push(action.payload)
            })
            .addCase(createBudget.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createBudget.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getBudgets.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getBudgets.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.budgets = action.payload
            })
            .addCase(getBudgets.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updateBudget.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updateBudget.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateBudget.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                let budget = state.budgets.find((budget) => budget.id === action.payload.id)
                if(budget){
                    budget = action.payload
                }
            })
            .addCase(deleteBudget.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteBudget.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteBudget.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.budgets = state.budgets.filter((budget) => budget.id !== action.payload.id)
            })

    }

})

export const { reset } = budgetSlice.actions
export default budgetSlice.reducer