import { Box } from '@mui/material';
import React from 'react'

export default function Circle(props) {
    const styles = {
        paperContainer: {
          backgroundImage: `url(${props.img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        },
      };
  return (
    <Box className="circle" style={styles.paperContainer}>

    </Box>
  )
}
