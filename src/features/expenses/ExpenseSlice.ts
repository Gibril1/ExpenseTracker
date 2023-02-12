import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Expenses } from "../../modules/Interfaces"
import expenseService from "./ExpenseService"


interface ExpenseState {
    expenses: Expenses[],
    isError: boolean,
    isSuccess: boolean,
    isLoading: boolean,
    message: any
}


const initialState = {
    expenses : [],
    isError: false,
    isSuccess: false,
    isLoading : false,
    message: ''
} as ExpenseState


// Create Expenses
export const createExpenses = createAsyncThunk('expenses/create', async(expenses:Expenses, thunkAPI:any) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await expenseService.createExpenses(expenses, token)
    } catch (error: any) {
        const message = (error.response && 
            error.response.data && 
            error.response.data.message)|| 
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


// Get All Expenses
export const getExpenses = createAsyncThunk('expenses/get', async(id:number, thunkAPI:any) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await expenseService.getExpenses(id, token)
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
export const updateExpenses = createAsyncThunk('expenses/update', async(id:number, thunkAPI:any) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await expenseService.updateExpenses(id, token)
    } catch (error:any) {
        const message = (error.response && 
            error.response.data && 
            error.response.data.message)|| 
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
        
    }
})


// Delete An Expense
export const deleteExpenses = createAsyncThunk('expenses/delete', async(id:number, thunkAPI:any) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await expenseService.deleteExpenses(id, token)
    } catch (error:any) {
        const message = (error.response && 
            error.response.data && 
            error.response.data.message)|| 
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
        
    }
})

const expenseSlice = createSlice({
    name:'expense',
    initialState,
    reducers:{
        reset:(state) => initialState
    },
    extraReducers:(builder) => {
        builder
            .addCase(createExpenses.fulfilled, (state, action) => {
                state.isLoading = true
                state.isSuccess = true
                state.expenses.push(action.payload)
            })
            .addCase(createExpenses.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createExpenses.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getExpenses.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getExpenses.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.expenses = action.payload
            })
            .addCase(getExpenses.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updateExpenses.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updateExpenses.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateExpenses.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                let expense = state.expenses.find((expense) => expense.id === action.payload.id)
                if(expense){
                    expense = action.payload
                }
            })
            .addCase(deleteExpenses.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(deleteExpenses.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteExpenses.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.expenses = state.expenses.filter((expense) => expense.id !== action.payload.id)
            })

    }
})

export const { reset } = expenseSlice.actions
export default expenseSlice.reducer