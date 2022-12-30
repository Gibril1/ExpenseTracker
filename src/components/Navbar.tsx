import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className='grid'>
        <div className="flex">
            <button onClick={() => navigate('/')}>Register</button>
        </div>
        <div className="flex">
            <button onClick={() => navigate('/login')}>Login</button>
        </div>
    </div>
  )
}

export default Navbar