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
