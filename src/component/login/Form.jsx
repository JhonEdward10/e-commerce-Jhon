import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const [isErrorLogin, setIsErrorLogin] = useState(false)

    const {handleSubmit, reset, register } = useForm()

    const navigate = useNavigate()

    const submit = data => {
  
      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login';
      axios.post(URL, data)
        .then(res => {
            localStorage.setItem('token',res.data.data.token)
            navigate('/')
        })
        .catch(err =>{ 
        localStorage.setItem('token', '')
            setIsErrorLogin(true) 
            setTimeout(() => {
            setIsErrorLogin(false)
        }, 5000)
      })
      reset({
        email:'',
        password:''
      })
    }

  return (

        <form onSubmit={handleSubmit(submit)} className='login_form' action="">
          <ul className='login_text'>
            <li className='flex-login'><b className='login-b'>Email:  </b> mason@gmail.com</li>
            <li className='flex-login'><b className='login-b'>Password: </b>mason1234</li>
          </ul>
  
          <h2 className='login_title'>Enter your information</h2>
          <ul className="login_list">
            <li className="login_item">
              <label htmlFor='login-email' className="login_label">Email</label>
              <input type="text" className="login_input" id='login-email' {...register('email')}/>
            </li>
  
            <li className="login_item">
              <label htmlFor='login-pass' className="login_label">Password</label>
              <input type="password" className="login_input" id='login-pass' {...register('password')}/>
            </li>
          </ul>
  
        {
          isErrorLogin && 'Invalid Credential, Try again...'
        }
  
        <button>Login</button>
        </form>
        
    )
      
}


export default Form