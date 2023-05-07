import React, { useState } from 'react';
import {
  
  TextField,
  Button,
  Typography,
} from '@mui/material';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className='loginPage'>
      <form className='form' onSubmit={handleSubmit}>
        <Typography className='title' variant="h4">
          Login
        </Typography>
        <TextField
          className='input'
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <TextField
          className='input'
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <Button
          className='button'
          variant="contained"
          color="primary"
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
