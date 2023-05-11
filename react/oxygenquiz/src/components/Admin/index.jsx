import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import {Container, Paper } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import TextField from '@mui/material/TextField';
import './index.scss'
import Select from '../Select'
import UBT from '../../fotot/Ubtlogo.png'
import Navbar from '../Navbar'
const Questions = () => {


  return (

    <>
    
    <div className='cnt'>
      <TextField className='tf1' label='Question' ></TextField>
      <TextField className='tf2' label='Correct Answer'></TextField>
      <TextField className='tf3' label='Wrong Answer 1'></TextField>
      <TextField className='tf4' label='Wrong Answer 2'></TextField>
      <TextField className='tf5' label='Wrong Answer 3'></TextField>
      <Select ></Select>
      <Button className='btn' style={{background :"Green", color :"white" , height:50, width:200 , fontSize:20}} variant="contained" >ADD</Button>
      </div>
      </>
  )
}

const Users = () => {
  return (
    <Paper >
      <img src={UBT} alt="" />
    </Paper>
  )
}

const Adm = () => {
  return (
    <Paper>
      <img src={UBT} alt="" />
    </Paper>
  )
}

const Dropdown = ({ setComponent }) => {
  return (
    <>
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)}>
            <SettingsIcon />
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={() => { setComponent('adm'); popupState.close(); }}>
              Admins
            </MenuItem>
            <MenuItem onClick={() => { setComponent('users'); popupState.close(); }}>
              Users
            </MenuItem>
            <MenuItem onClick={() => { setComponent('questions'); popupState.close(); }}>
              Questions
            </MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
    </>
  )
};

const Admin = () => {
  const [component, setComponent] = useState('adm');
  const paperStyle = { padding: '50px 20px', width: 1200, height: 800, margin: '20px auto' };

  let ComponentToRender;

  switch (component) {
    case 'adm':
      ComponentToRender = Adm;
      break;
    case 'users':
      ComponentToRender = Users;
      break;
    case 'questions':
      ComponentToRender = Questions;
      break;
    default:
      ComponentToRender = Adm;
      break;
  }

  return (
    <>
    <Navbar/>
    <Paper elevation={3} style={paperStyle}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <Dropdown setComponent={setComponent} />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Admin tools
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <ComponentToRender />
    </Paper>
    </>
  );
}

export default Admin;
