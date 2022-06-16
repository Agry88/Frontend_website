
import * as React from 'react';
import { useRef, useEffect } from 'react';
import { useMergeState } from 'react-hooks-lib';

import { Box, Grid, Paper, Button } from '@mui/material';

import LocationOptions from './LocationOptions.js';
import ConditionOptions from './ConditionOptions.js';


function SelectBar(props) {
    const { state, set } = useMergeState({ 
        houseType: '不限', // 房屋類型 Ex. 不限 | 公寓大樓 | 透天厝
        roomType: '不限', // 房間類型 Ex. 不限 | 整層住家 | 獨立套房 | 雅房
        room: {}, // 房屋格局 Ex. {'房間': 2, '衛浴': 1, '廳數': 0}
        rent: [3000, 6000] // 租金範圍 [下限值, 上限值]
    });
    const { cityData } = props;

    const onSubmit = () => {
        console.log('送出');
    }
    
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
                    <Grid item md={6}>
                        <LocationOptions cityData={cityData} />
                    </Grid>
                    <Grid item md={8}>
                        <ConditionOptions cityData={cityData} state={state} set={set} />
                    </Grid>
                </Grid>
                <Button onClick={onSubmit}>搜尋</Button>
            </Paper>
            
        </Box>
    )
}

export default SelectBar;