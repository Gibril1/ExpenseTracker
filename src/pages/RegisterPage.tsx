import React, { ChangeEvent,  useState } from 'react'
import { useAppDispatch } from '../app/hooks'
import { IFormData } from '../modules/Interfaces'
import { register } from '../features/auth/authSlice'
import Navbar from '../components/Navbar'
const RegisterPage = () => {
    const dispatch = useAppDispatch()
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
        const userData:IFormData  = {
            'username':username,
            'password':password
        }

        console.log(userData)
        dispatch(register(userData))
    }
  return (
    <div>
        <Navbar/>
        <h1>Register Page</h1>
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