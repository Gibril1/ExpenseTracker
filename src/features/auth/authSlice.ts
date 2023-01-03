import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import authService from './authService'
import { ILoginData } from '../../modules/Interfaces'


export interface User {
    id: number,
    username: string,
    token: string
}

interface UserState {
    user: User | string | null
    isError: boolean
    isSuccess: boolean
    isLoading: boolean
    message: any
}

const user = JSON.parse(localStorage.getItem('user') || '{}') 

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
} as UserState

export const register = createAsyncThunk('auth/register', async(user:ILoginData, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (error:any) {
        const message: string = (error.response &&
            error.response.data &&
            error.response.data.message)||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }

})

export const login = createAsyncThunk('auth/login', async(user:ILoginData, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error:any) {
        const message: any = (error.response &&
            error.response.data &&
            error.response.data.message)||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
    }

})

export const logout = createAsyncThunk('auth/logout', async() => {
    return await authService.logout()
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset:(state) => initialState
    },
    extraReducers:(builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            .addCase(register.fulfilled, (state, action:PayloadAction<User>) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            .addCase(login.fulfilled, (state, action:PayloadAction<User>) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(logout.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
            
    }
})

export const { reset } = authSlice.actions
export default authSlice.reducer