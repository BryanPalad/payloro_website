import React from 'react'
import WhyJoinUs from './WhyJoinUs/WhyJoinUs';
import HeroBanner from './HeroBanner/HeroBanner';
import { Box } from '@mui/material';

const index = () => {
  return (
    <Box>
        <HeroBanner/>
       <WhyJoinUs/> 
    </Box>
  )
}

export default index