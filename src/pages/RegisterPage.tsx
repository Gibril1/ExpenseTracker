import React, { ChangeEvent,  useEffect,  useState } from 'react'
import { useAppDispatch } from '../app/hooks'
import { IRegisterData, ILoginData } from '../modules/Interfaces'
import { register, reset } from '../features/auth/authSlice'
import '../App.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


const RegisterPage = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    // initial state of the form
    const [formData, setFormData] = useState<IRegisterData>({
        username:'',
        password:'',
        password2:''
    })

    const { user, isLoading, isError, isSuccess, message } = useSelector((state:any) => state.auth)

    

    useEffect(() => {
        if(isSuccess && user.data !== undefined){
            toast.success(`Account has been created for ${user.data.username}. Congrats!! Please Log In.`)
        }

        dispatch(reset())
    },[isSuccess, user, dispatch, navigate])


    // error handling for the forms
    const[errorUsername, setErrorUsername] = useState<boolean>(false)
    const[errorPassword, setErrorPassword] = useState<boolean>(false)

    // handling the changes in the form
    const handleChange = (e: ChangeEvent<HTMLInputElement>):void => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
    }

    // destructuring the form elements
    const { username, password, password2 } = formData

    // handling form submission
    const handleSubmit = (e: any)=> {
        e.preventDefault()
        if(username === '' || password === '' || password2 === ''){
            toast.error('Field cannot be empty')
            return
        }
        if(username.length < 6){
            setErrorUsername(true)
            setTimeout(():void=>setErrorUsername(false), 2000)
            return;
        }
        
        if(password !== password2){
            setErrorPassword(true)
            setTimeout(():void => setErrorPassword(false), 2000)
            return
        }
        
        const userData:ILoginData  = {
            'username':username,
            'password':password
        }     
        dispatch(register(userData))
    }
    if(isError){
        toast.error(message)
    }
  return (
    <div className='center'>     
        <form onSubmit={handleSubmit} className='flex'>
            <div className='flex form-group'>
                <label htmlFor="username">Username</label>
                <input 
                    type="text"
                    name='username'
                    id='username'
                    onChange={handleChange} />
                    <small className={`${errorUsername ? 'error': 'success'}`}>Username should not be less than 6 characters</small>
            </div>
            <div className='flex form-group'>
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    name='password'
                    id='password'
                    onChange={handleChange} />
            </div>
            <div className='flex form-group'>
                <label htmlFor="password">Confirm Password</label>
                <input 
                    type="password"
                    name='password2'
                    id='password2'
                    onChange={handleChange} />
                    <small className={`${errorPassword ? 'error': 'success'}`}>Your passwords do not match</small>
            </div>
            <div>
                { isLoading ? (
                    <>
                    <button className='btn btn-loading'>Registering...</button>
                    </>
                ) : (
                    <>
                    <button className='btn btn-primary'>Register</button>
                    </>
                    
                )}
            </div>
        </form>
    </div>
  )
}

export default RegisterPage