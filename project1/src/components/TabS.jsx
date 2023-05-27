import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TabS = () => {
    const[datas,setDatas] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) =>{
            setDatas(res.data)
        })
        .catch((error) =>{
            console.log(error)
        })


    })

  return (
    <div style = {{paddingTop:'75px'}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Title</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {datas.map((val,index)=>{
                        return(
                            <TableRow key={index}>
                                <TableCell>{val.id}</TableCell>
                                <TableCell>{val.title}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default TabS