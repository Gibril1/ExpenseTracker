import axios from "axios";
import { IFormData } from "../../modules/Interfaces";

const API_URL: string = 'http://localhost:5000/api/users/'

const register = async(userData: IFormData)=> {
    const response = await axios.post(API_URL+'register', userData)
   
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    
    return response.data
}
const login = async(userData: IFormData) => {
    const response = await axios.post(API_URL+'login', userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    login,
    logout
}

export default authService