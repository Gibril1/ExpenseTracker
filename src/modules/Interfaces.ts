export interface IRegisterData {
    username:string,
    password: string,
    password2: string
} 

export interface ILoginData {
    username: string,
    password: string
}

export interface UserData {
    id: number,
    username: string,
    token: string
}

export interface Expenses {
    id: number,
    user: number,
    budget: number,
    date: Date,
    amount: number,
    category: number,
    description: string
}

// this is the structure of the budget that would be returned from the server
export interface Budget {
    id: number,
    user: number,
    start_date: Date,
    end_date: Date,
    amount: number,
    category: string,
    status: boolean,
    remainder: number
}

// this is the structure of the budget for creating budgets
export interface IBudgetData {
    amount: number,
    days: number,
    category: string
}

// the structure for editing the budget data
export interface IBudgetEditData {
    id: number,
    amount: number,
    days: number,
    category: string
}