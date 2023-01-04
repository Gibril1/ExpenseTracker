import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAppDispatch } from '../app/hooks'
import Navbar from '../components/Navbar'
import { login } from '../features/auth/authSlice'
import { ILoginData } from '../modules/Interfaces'

const LoginPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    
    const [formData, setFormData] = useState<ILoginData>({
        username:'',
        password:''
    })

    const [errorUsername, setErrorUsername] = useState<boolean>(false)

    const handleChange = (e: ChangeEvent<HTMLInputElement>):void => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    const { username, password } = formData

    const handleSubmit = (e: any)=> {
        e.preventDefault()

        if(username === '' || password === ''){
            toast.error('Fields cannot be empty')
            return
        }

        if(username.length < 6){
            setErrorUsername(true)
            setTimeout(():void=>setErrorUsername(false), 2000)
            return;
        }
        const userData = {
            username,
            password
        } as ILoginData
        dispatch(login(userData)) 
    }

    const { user, isLoading, isError, isSuccess, message } = useSelector((state:any) => state.auth)

    useEffect(() => {
        if(isError){
            toast.error(message)
            return
        }

        if(isSuccess || user.data !== undefined){
            toast.success('Login successful')
            navigate('/main')
        }
    })

  return (
    <div>
        <Navbar/>
        <form onSubmit={handleSubmit} className='formControl flex'>
            <h1>Login Page</h1>

            <div className='flex form-group'>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username" 
                    id="username"
                    onChange={handleChange} />
                    <small className={`${errorUsername ? 'error': 'success'}`}>Username should not be less than 6 characters</small>
                
            </div>
            <div className='flex form-group'>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    onChange={handleChange} />
            </div>
            <div>
                { isLoading ? (
                    <>
                <button className='btn btn-loading'>Logging In...</button>
                    
                    </>
                ) : <>
                <button className='btn btn-primary'>Login</button>
                
                </>
                
                }
            </div>
        </form>
    </div>
  )
}

export default LoginPage