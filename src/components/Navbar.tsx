import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className='grid navbar container'>
        <div className="flex">
            <button className='btn' onClick={() => navigate('/')}>Register</button>
        </div>
        <div className="flex">
            <button className='btn' onClick={() => navigate('/login')}>Login</button>
        </div>
    </div>
  )
}

export default Navbar