import React, { useRef } from 'react';
import { Stack } from '@mui/material';
import {useNavigate} from "react-router-dom"
import { baseUrl } from '../App';
import axios from 'axios';
import { headerLoginState } from '../components/PageHeader';

import {
  
  TextField,
  Button,
  Typography,
} from '@mui/material';


const Login = () => {
  const username = useRef('')
  const password = useRef('')
  const navigate = useNavigate()

  const handleSubmit = (path) => {
    return  async () => {
      const data = {
        username: username.current.value, 
        password: password.current.value
      }
  
      if (typeof data.username !== 'string' || data.username === ''){
        alert('insert correct username')
        return false
      }
      if (typeof data.password !== 'string' || data.password === ''){
        alert('insert correct password')
        return false
      }
      try{
        const response = await axios.post(path, data)
        alert(`${path.slice(1)} successful`)
        return true
      }catch (err){
          console.log(err)
          if (err.response){
            alert(`something went wrong with the ${path.slice(1)} :(. status: ` + err.response.status + ' ' + err.response.statusText)
          }
      }
    }
  }
  const login = handleSubmit('/login')
  const handleLogin= async () => {
    const succ = await login()
    if(succ){
      headerLoginState.setState(true)
      setTimeout(() => navigate('/'), 2000)
    }
  }
  const handleRegister= handleSubmit('/register')

  return (
    <div className='loginPage'>
      <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
        <Typography className='title' variant="h4">
          Login
        </Typography>
        <TextField
          className='input'
          label="Email"
          type="email"
          inputRef={username}
          // onChange={handleEmailChange}
          required
        />
        <TextField
          className='input'
          label="Password"
          type="password"
          inputRef={password}
          // onChange={handlePasswordChange}
          required
        />
        <Button
          className='button'
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button
          className='button'
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleRegister}
        >
          Register
        </Button>
      </Stack>
    </div>
  );
};

export default Login;
