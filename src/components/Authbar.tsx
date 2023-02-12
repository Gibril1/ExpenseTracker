import { useState } from 'react'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'


const ACTIVE = true
const INACTIVE = false


const Authbar = () => {
    const[login, setLogin] = useState<boolean>(INACTIVE)
    const[register, setRegister] = useState<boolean>(ACTIVE)

    const handleRegisterClick = () => {
      setLogin(INACTIVE)
      setRegister(ACTIVE)
    }

    const handleLoginClick = () => {
      setRegister(INACTIVE)
      setLogin(ACTIVE)
    }

  return (
    <>
    <div className='authbar'>
        <div className="flex">
          <div  className={`${register ? 'active' : ''}`} onClick={handleRegisterClick}>Register</div>
        </div>
        <div className="flex">
          <div className={`${login ? 'active' : ''}`} onClick={handleLoginClick}>Login</div>
        </div>
    </div>

    { register && <RegisterPage/>}
    { login && <LoginPage/>}
    

    </>
  )

}

export default Authbar