import React from 'react'
import { AppBar, Button, Toolbar} from '@mui/material'
import { Link } from 'react-router-dom'
import logo from '../logo-image.png';


const Navigation = () => {
  return (
    <div>
        <AppBar style={{ background: 'aquamarine' }}>
            <Toolbar>
            <img src={logo} alt="My logo" style={{maxWidth:'5%'}}></img>
                <Button variant='text'><Link to={'/'} style={{ textDecoration: 'none' }} >Blog App</Link></Button>
                <Button variant='text' color='secondary'><Link to={'/'} style={{ textDecoration: 'none' }}>Home</Link></Button>
                <Button variant='text' color='inherit'><Link underline="none" to={'/Add'} style={{ textDecoration: 'none' }}>Add</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navigation