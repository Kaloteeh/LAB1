import './index.scss'
import Navbar from '../Navbar'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'



const Layout = () => {

    

    return (
    
    <>
    <div>
    <Navbar/>

    </div>
    <div className='container'>
        <h1>Testoni Veten... </h1> 
        <div className='butoni'>
        <Button className='but' variant='contained' 
        size='large' sx={{ width:300 , height:70 , fontSize:40,fontWeight: 600}}>Luaj
        </Button>
        </div>
    </div>
    

   <Link to='/components/Admin'> <Button className='admin' variant='contained' color='success' sx={{ width:100 , height:20 , fontSize:10,fontWeight: 600 }}>ADMIN </Button></Link>
        
    </>)
}

export default Layout