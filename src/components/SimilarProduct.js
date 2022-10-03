import { Box } from '@mui/material'
import React from 'react'
import { mainColor } from '../colors'
import ProductsSwiper from './ProductsSlider'

export default function SimilarProduct() {
  return (
    <div>
          <span className="NewProductsArrived" style={{ color: mainColor }}>
        Similar Products
        </span>
        <Box sx={{width:"100vw"}}>
          <ProductsSwiper />
        </Box>
    </div>
  )
}
