import './index.scss'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom';

const Signup = () => {


    const handleSubmit = (event) => {
        event.preventDefault();
    }


return (
<>
<Navbar />
       

  <div className='contain'>  
<form onSubmit={handleSubmit}>
  <label htmlFor="username">Username:</label>
  <input 
  type="text" 
  id="username" 
  name="username" 
  placeholder='Enter username'
  required/>

  <label htmlFor="email">Email:</label>
  <input 
  type="email"
   id="email" 
   name="email"
   placeholder='Enter email'
    required/>

  <label htmlFor="password">Password:</label>
  <input 
  type="password" 
  id="password" 
  name="password"
  placeholder='Enter password'
   required/>
   <label htmlFor="conf-password">Confirm Password:</label>
  <input 
  type="password" 
  id="password" 
  name="password"
  placeholder='Enter password'
   required/>
  <p>Already have an account ? <Link to='/components/Login'>Login here </Link></p>

  <button type="submit">SIGN UP</button>
</form>
</div>   

</>

)

}

export default Signup