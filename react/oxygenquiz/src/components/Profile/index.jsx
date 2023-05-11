// import React from 'react';
import './index.scss'
import React, { useState } from 'react';
import './index.scss';
import { Paper } from '@mui/material';
import Navbar from '../Navbar';
import profile from '../../fotot/OXYGENrrumullak.png';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

const Profile= ()=> {


  //E marrur nga Material UI
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState("Description");
  const [username, setUsername] = useState("Username");
  const [email, setEmail] = useState("example@email.com");
  const [password, setPassword] = useState("********");

  // const handleEdit = () => {
  //   setIsEditing(true);
  // };

  // const handleApply = () => {
  //   setIsEditing(false);
  // };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  //Kjo osht per EDITICON kur t'e klikojme
  const handleEditClick = () => {
    setIsEditing(true);
  };

  //Kjo osht per APPLY butonin kur t'e klikojme
  const handleApplyClick = () => {
    setIsEditing(false);
    setDescription(document.getElementById('description').value);
  setUsername(document.getElementById('username').value);
  setEmail(document.getElementById('email').value);
  setPassword(document.getElementById('password').value);   
  };

  return (
    <>
      <Navbar />
      <Box className='box' sx={{ flexGrow: 1 ,bgcolor:'#4F98DA'}}>
        <Grid className='grd' container spacing={2}>
        
          <Grid item xs={6} md={8} className='first'>
            {isEditing ? (<Button className='btn' variant='contained' onClick={handleApplyClick}>Apply</Button>)
            : (null)}
          
            <Item style={{height:600}} >
              <img src={profile} height={150} />
              <Fab className='fab' color="primary" aria-label="edit" onClick={handleEditClick}>
                <EditIcon />
              </Fab>

              <h6>Description</h6>
              {isEditing ? (
                <TextField id='description' label="Description" variant="outlined" className='description'  defaultValue={description} style={{width:600}}/>
              ) : (
                <TextField disabled id="outlined-disabled" defaultValue={description} className='description' style={{width:600}}/>
              )}

              <h6>Username</h6>
              {isEditing ? (
              <TextField id="username" label="Username" variant="outlined" className='txt' defaultValue={username} />
              ) : (
                <TextField disabled id="outlined-disabled" defaultValue={username} className='txt' />
              )}

              <h6>Email</h6>
              {isEditing ? (
                <TextField id="email" label="Email" variant="outlined" className='txt' defaultValue={email}/>
              ) : (
                <TextField disabled id="outlined-disabled" defaultValue={email} className='txt'/>
              )}

              <h6>Password</h6>
              {isEditing ? (
                <TextField id="password" label="Password" variant="outlined" className='txt' defaultValue={password}/>
              ) : (
                <TextField disabled id="outlined-disabled" defaultValue={password} className='txt'/>
              )}
            </Item>
          </Grid>
          <Grid item xs={6} md={4} className='second'>
            <Item style={{height:250}} >
              <h3>Registered</h3> <br/> <br/>
              <p> <b>Date</b> : 03/07/2003</p>
              <p> <b>Time</b> : 6PM</p>
            </Item>
          </Grid>
          
          </Grid>

    </Box>
    </>
  );
}
export default Profile;
 