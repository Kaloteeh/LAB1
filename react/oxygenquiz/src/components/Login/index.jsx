import './index.scss'
import Navbar from '../Navbar'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // const navigate = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Add your login functionality here to connect with the database

      if (username.trim() === '') {
        alert('Please enter a username');
        return;
      }
      if (password.trim() === '') {
        alert('Please enter a password');
        return;
      }
      if (password.length < 8) {
        alert('Password must be at least 8 characters long');
        return;
      }


    };
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    return (
      <>
        <Navbar />
        <div className='cont'>
        <form onSubmit={handleSubmit} className="login-form">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder='Enter username'
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder='Enter password'
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <p>Don't have an account? <Link to='/components/Signup'>Sign up here</Link></p>

          <button type="submit">LOGIN</button>
        </form>
        </div>
      </>
    );
  };
  
  export default Login;