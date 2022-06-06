import React from 'react'
import { Box, Grid } from '@mui/material';
export default function HouseTitle() {
  return (
    <Box fullWidth sx={{
        backgroundColor: '#efef0f',
        minHeight: '200px'
    }}>
        <Grid sx={{ml:2,px:1,fontSize: 34}}>高級住宅</Grid>
        <Grid container spacing={0}>
            <Grid item sx={{bgcolor: 'info.main', ml:3,borderRadius: 1 ,my:1,px:1}}>
                <div>屋主直租</div>
            </Grid>
            <Grid item sx={{bgcolor: 'info.main', ml:1,borderRadius: 1 ,my:1,px:1}}>
                <div>拎包入住</div>
            </Grid>
            <Grid item sx={{bgcolor: 'info.main', ml:1,borderRadius: 1,my:1,px:1 }}>
                <div>位於中心</div>
            </Grid>
            <Grid item sx={{bgcolor: 'info.main', ml:1,borderRadius: 1,my:1,px:1 }}>
                <div>房東很帥</div>
            </Grid>
        </Grid>
        <Grid container spacing={0}>
            <Grid item className="" sx={{ ml:3,borderRadius: 1 }}>
                <div>屋主直租</div>
            </Grid>
            <Grid item >
                <div className="line"></div>
            </Grid>
            <Grid item className="" sx={{ borderRadius: 1 }}>
                <div>屋主直租</div>
            </Grid>
            <Grid item >
                <div className="line"></div>
            </Grid>
            <Grid item className="" sx={{ borderRadius: 1 }}>
                <div>屋主直租</div>
            </Grid>
            <Grid item >
                <div className="line"></div>
            </Grid>
            <Grid item className="" sx={{borderRadius: 1 }}>
                <div>屋主直租</div>
            </Grid>
        </Grid>
        <Grid container spacing={0}>
            <Grid item sx={{color: 'red',ml:2,px:1,fontSize: 34}}>6500</Grid>
            <Grid item sx={{color: 'red',fontSize:'13px',mt:2.5}}>元/月</Grid>
            <Grid item sx={{fontSize:'13px',color:'#ffffff',ml:3,mt:2.5}}>押金面議</Grid>
        </Grid>
    </Box>
  )
}
