import React, { ChangeEvent, FormEventHandler, useState } from 'react'
import { IFormData } from '../Interfaces'

const RegisterPage = () => {
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
        const userData  = {
            username,
            password
        }


    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input 
                    type="text"
                    name='username'
                    id='username'
                    onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    name='password'
                    id='password'
                    onChange={handleChange} />
            </div>
            <div>
                <button>Register</button>
            </div>
        </form>
    </div>
  )
}

export default RegisterPage