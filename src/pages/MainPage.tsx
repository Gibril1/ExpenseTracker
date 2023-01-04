import React from 'react'
import { useAppDispatch } from '../app/hooks'
import { logout } from '../features/auth/authSlice'

const MainPage = () => {
  const dispatch = useAppDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default MainPage