import {useNavigate} from "react-router-dom"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import axios from "axios";
import { useState } from "react";

const pages = [{name:'home', route: '/'}, {name:'About me', route: '/about'},{name:'Contact', route: '/contact'},{name:'new post', route: '/add'} ];
export const headerLoginState = {state: null, setState:null}
export default function Header() {
    const navigate = useNavigate()
    const [login, setLogin] = useState(false)
    headerLoginState.setState = setLogin
    headerLoginState.state = login

    const handleLogout = async () => {
      const sessionId = document.cookie.match(/(session_id=[^;]*;|session_id=[^;]*$)/)
      if (sessionId === null){
        alert('opss... something went wrong with logging out')
        return
      }
      setLogin(false)
      try{
        await axios.post('/logout')
        console.log('logged out successfully')
      } catch (err){
        console.log(err)
      } finally {
        document.cookie = 'session_id=; Max-Age=0'
      }
    }

  return (
    <header>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => navigate(page.route)}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
          <Box
            m={1}
            //margin
            display="flex"
            justifyContent="flex-end"
            // alignItems="flex-end"
            // sx={boxDefault}
            style={{ flex: 1 }}
            >
                {login ? <Button variant="inherit" color="primary" sx={{ height: 40 } } onClick={handleLogout}>
                      Logout
                  </Button>
                      : <Button variant="inherit" color="primary" sx={{ height: 40 } } onClick={() => navigate('/login')}>
                      Login
                  </Button>}
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
    </header>
  )
}