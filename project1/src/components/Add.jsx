import { TextField } from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <div style={{ paddingTop:'100px'}}>
       <h2>Blog Name:<TextField variant='standard' style={{ marginLeft: '1rem' }}  placeholder="Enter Name"/></h2>
        <h2 >Description: <TextField variant='standard'style={{ marginLeft: '1rem' }} placeholder="Description"/></h2>
        <h2 style={{paddingRight:'25px'}}>Author Name:<TextField variant='standard' placeholder="Author Name"style={{ marginLeft: '1rem' }}/></h2> 
    </div>
  )
}

export default Add