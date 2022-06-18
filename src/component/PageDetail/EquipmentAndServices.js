import React from 'react'
import Condition from './Condition';
import { Box, Grid, Stack, Typography, } from '@mui/material';
export default function EquipmentAndServices(props) {
    const {conditions,icons } = props.equipmentAndServicesValue;
    return (
        <Stack spacing={1}>
            <Typography variant="h5" sx={{fontWeight: 'bold', pb: 1}}>設備與服務</Typography>
       
                <Box sx={{ pb: 1 }}>
                    <Typography sx={{fontWeight: 'bold', pb: '2px', pl: '16px'}}>租住條件</Typography>
                    <Grid container spacing={1} columns={{ sm: 6, md: 8 }} sx={{p: '4px', pl: '16px'}}>
                        {conditions.a.map((condition,index) => <Condition text={condition} icon={icons[condition]} key={index}/> )}
                    </Grid>
                </Box>
                <Box sx={{ pb: 1 }}>
                    <Typography sx={{fontWeight: 'bold', pb: '2px', pl: '16px'}}>房屋規定</Typography>
                    <Grid container spacing={1} columns={{ sm: 6, md: 8 }} sx={{p: '4px', pl: '16px'}}>
                        {conditions.b.map((condition,index) => <Condition text={condition} icon={icons[condition]} key={index}/> )}
                    </Grid>
                </Box>
                <Box sx={{ pb: 1 }}>
                    <Typography sx={{fontWeight: 'bold', pb: '2px', pl: '16px'}}>提供設備</Typography>
                    <Grid container spacing={1} columns={{ sm: 6, md: 8 }} sx={{p: '4px', pl: '16px'}}>
                        {conditions.c.map((condition,index) => <Condition text={condition} icon={icons[condition]} key={index}/> )}
                    </Grid>
                </Box>
                <Box sx={{ pb: 1 }}>
                    <Typography sx={{fontWeight: 'bold', pb: '2px', pl: '16px'}}>提供服務</Typography>
                    <Grid container spacing={1} columns={{ sm: 6, md: 8 }} sx={{p: '4px', pl: '16px'}}>
                        {conditions.d.map((condition,index) => <Condition text={condition} icon={icons[condition]} key={index}/> )}
                    </Grid>
                </Box>
                <Box sx={{ pb: 1 }}>
                    <Typography sx={{fontWeight: 'bold', pb: '2px', pl: '16px'}}>公共設施</Typography>
                    <Grid container spacing={1} columns={{ sm: 6, md: 8 }} sx={{p: '4px', pl: '16px'}}>
                        {conditions.e.map((condition,index) => <Condition text={condition} icon={icons[condition]} key={index}/> )}
                    </Grid>
                </Box>
            
        </Stack>
    )
}
