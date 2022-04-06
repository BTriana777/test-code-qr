import React from 'react'
import { useAuth } from '../context/authContext'

export const LoginScreen = () => {

  const {user} = useAuth();
  console.log(user);

  return (
    <div>LoginScreen</div>
  )
}
