import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import OxygenIcon from '../../fotot/OxygenIcon.png'
import { Button } from '@mui/material';
import '@mui/material'
import { Avatar } from '@mui/material';
import '../../npm/node_modules/bootstrap/dist/css/bootstrap.css'
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  
  const navigate = useNavigate();


return (

<nav className="navbar">
  <div className="navbar__logo">
    <img src={OxygenIcon} />
  </div>
  <div className="navbar__links">
    <NavLink activeclassname="active" to="/">Ballina</NavLink>
    <NavLink activeclassname="active" to="/leaderboard">Leaderboard</NavLink>
    <NavLink activeclassname="active" to="/components/Profile"><Avatar alt="Kastriot"  /></NavLink>
    
 <Button onClick={() => navigate('/components/Login')} variant='contained' size='large'>Login</Button>
    
  </div>
</nav>
)

}

export default Navbar