import React, { ChangeEvent, useState } from 'react'
import Navbar from '../components/Navbar'
import { IFormData } from '../modules/Interfaces'

const LoginPage = () => {
    const [formData, setFormData] = useState<IFormData>({
        username:'',
        password:''
    })
    const handleChange = (e: ChangeEvent<HTMLInputElement>):void => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const { username, password } = formData

    const handleSubmit = (e: any)=> {
        e.preventDefault()
        
    }
  return (
    <div>
        <Navbar/>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username" 
                    id="username"
                    onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    onChange={handleChange} />
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
  )
}

export default LoginPage