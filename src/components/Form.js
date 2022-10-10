import { Box } from '@mui/material'
import React from 'react'

export default function Form() {
  return (
    <Box className="firstSectionInOrders" sx={{marginTop:"-.5vw"}} >

            <input type="text" placeholder="Name :" className="name-input" />
            <input type="text" placeholder="Email :" className="name-input" />
            <input type="text" placeholder="Phone Num :" className="name-input" />
            <input type="text" placeholder="Name :" className="name-input" />
            <input type="text" placeholder="Name :" className="name-input" />
            <input type="text" placeholder="Name :" className="name-input" />
            <textarea type="text" placeholder="Note :" className="name-input note"
             style={{height:" 10.052083333333vw"}} />
          </Box>
  )
}
