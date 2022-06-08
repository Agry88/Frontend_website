import React from 'react'
import { Box, Grid } from '@mui/material';
import { AiFillCalendar,AiFillCheckSquare } from "react-icons/ai";
export default function Service() {
  return (

    <Box fullWidth sx={{
        backgroundColor: '#ef0fef',
        minHeight: '200px'
    }}> 
    <Grid sx={{ml:2,px:1,fontSize: 34}}>設備與服務</Grid>
    <Grid container spacing={0} sx={{ml:2,px:1}} >
        <Grid item sx={{mt:'1px'}}><AiFillCalendar/></Grid>
        <Grid item>租住說明</Grid>
    </Grid>
    <Grid sx={{ml:4,px:1}}>
        最晚租期一年，可隨時遷入
    </Grid>
    <Grid container spacing={0} sx={{ml:2,px:1}} >
        <Grid item sx={{mt:'1px'}}><AiFillCheckSquare/></Grid>
        <Grid item>提供設備</Grid>
    </Grid>
    <Grid sx={{ml:4,px:1}}>
        最晚租期一年，可隨時遷入
    </Grid>  
    </Box>
  )
}
