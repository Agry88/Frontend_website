
import * as React from 'react';
import { useEffect } from 'react';

import { Box, Grid, Paper, Button } from '@mui/material';
import { useSelector } from 'react-redux';

import LocationOptions from './LocationOptions.js';
import ConditionOptions from './ConditionOptions.js';


function SelectBar(props) {
    const SearchData = useSelector(state => state.Search);
    const { cityData } = props;

    const onSubmit = () => {
        console.log('送出');
    }
    
    useEffect(() => {
        console.log(SearchData)
        console.log(`地區搜尋：${JSON.stringify(SearchData.areaList)}`);
        console.log(`房屋類型：${JSON.stringify(SearchData.houseType)}`)
        console.log(`房間類型：${JSON.stringify(SearchData.roomType)}`)
        console.log(`房間格局：${JSON.stringify(SearchData.room)}`)
        console.log(`租金：${JSON.stringify(SearchData.rent)}`)
    }, )
    return (
        <Box sx={{
            minHeight: 100,
            backgroundColor: 'text.disabled',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            
        }}>
            <Paper sx={{
                p: '10px',
                display: 'flex',
                flexDirection: 'column',
                width: '100%'
            }}>
                <Grid container columns={16}>
                    <Grid item md={8}>
                        <LocationOptions cityData={cityData} />
                    </Grid>
                    <Grid item md={8}>
                        <ConditionOptions cityData={cityData} />
                    </Grid>
                </Grid>
                <Button onClick={onSubmit}>搜尋</Button>
            </Paper>
            
        </Box>
    )
}

export default SelectBar;