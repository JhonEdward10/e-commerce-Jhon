import React from 'react'
import './style/loginScreen.css'
import { useEffect } from 'react'
import { useState } from 'react'
import Form from './Form'
import UserLogged from './UserLogged'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const LoginScreen = () => {

  const [token, setToken] = useState('')

  const changedToken =  localStorage.getItem('token')
  
  useEffect(() => {
    setToken(changedToken)
  }, [changedToken])

  
  return (
    <div className='login'>
      {
        token ?
        <UserLogged />
        :
        <Form />
      }
    </div>
  )
}

export default LoginScreen