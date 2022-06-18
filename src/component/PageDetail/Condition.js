import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
export default function Condition(props) {
    const { icon } = props;
    const { text } = props;
    const textStyle = text.length >= 5 ? {fontSize: '10px'} : {fontSize: '12px'};
    const notFoundIcon = "https://cdn-icons-png.flaticon.com/512/2748/2748614.png";
    return (
        <Grid item sm={1} md={1}>
            <Paper sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', width: '54px', height: '51px', pt: '4px'}}>
                {(icon && !icon.includes("premium")) ?
                    <Box component={'img'} sx={{width: '24px', height: '24px'}} 
                    src={icon}
                    /> : 
                    <Box component={'img'} sx={{width: '24px', height: '24px'}} 
                    src={notFoundIcon}
                    />
                }
                <Typography sx={{...textStyle}}>{text}</Typography>
            </Paper>
        </Grid>
    )
}
