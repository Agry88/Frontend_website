
import * as React from 'react';
import { useState, useEffect } from 'react';

import { Box, Grid, Tabs, Tab, Typography, TextField, Slider } from '@mui/material';

function ConditionOptions(props) {
    const { state, set } = props;
    const [houseType, setHouseType] = useState('不限'); // 房屋類型 Ex. 不限 | 公寓大樓 | 透天厝
    const [roomType, setRoomType] = useState('不限'); // 房間類型 Ex. 不限 | 整層住家 | 獨立套房 | 雅房
    const [room, setRoom] = useState({}); // 房屋格局 Ex. {'房間': 2, '衛浴': 1, '廳數': 0}
    const [rent, setRent] = useState([3000, 6000]); // 租金範圍 [下限值, 上限值]
    
    const handleChangeHouseType = (event, newValue) => { // 修改房屋類型
        setHouseType(newValue)
        // set(() => ({ houseType: newValue }));
    }

    const handleChangeRoomType = (event, newValue) => { // 修改房間類型
        setRoomType(newValue)
        switch (newValue) {
            case '整層住家':
                setRoom({...room, '房間': 1,'衛浴': 1, '廳數': 1});
                break;

            case '獨立套房':
                setRoom({...room, '房間': 1,'衛浴': 1, '廳數': 0});
                break;
        
            case '雅房':
                setRoom({...room, '房間': 1,'衛浴': 0, '廳數': 0});
                break;
        
            default:
                break;
        }
    }

    const handleChangeRoom = (event, name) => { // 修改房屋格局
        if (event.target.value >= 0) { setRoom({...room, [name]: parseInt(event.target.value)}); }
        
    }

    const handleChangeRent = (event, newValue) => { // 修改租金範圍
        setRent(newValue);
    }
    
    const tabProps = (label) => { // Style
        return {
            'label': label,
            'value': label,
            'sx': { 
                fontSize: '0.6rem',
                px: 1,
                py: 0,
                minHeight: '1.5rem',
                minWidth: '2rem',
                overflow: 'default'
            }
        }
    }
    useEffect(() => {
        console.log(`房屋類型：${JSON.stringify(houseType)}`)
        console.log(`房間格局：${JSON.stringify(room)}`)
        console.log(`租金：${JSON.stringify(rent)}`)
    }, )
    return (
        <Grid container columns={16} spacing={2}>
            <Grid item md={16} sx={{ display: 'flex' }}>
                <Typography>房屋類型：</Typography>
                <Tabs value={houseType} onChange={handleChangeHouseType} sx={{minHeight: '0' }}>
                    <Tab {...tabProps('不限')} />
                    <Tab {...tabProps('公寓大樓')} />
                    <Tab {...tabProps('透天厝')} />
                </Tabs>
            </Grid>
            <Grid item md={16} sx={{ display: 'flex' }}>
                <Typography>房間類型：</Typography>
                <Tabs value={roomType} onChange={handleChangeRoomType} sx={{minHeight: '0' }}>
                    <Tab {...tabProps('不限')} />
                    <Tab {...tabProps('整層住家')} />
                    <Tab {...tabProps('獨立套房')} />
                    <Tab {...tabProps('雅房')} />
                </Tabs>
            </Grid>
            <Grid item md={16} sx={{ display: 'flex' }}>
                <Typography>房間格局：</Typography>
                <Box sx={{ display: 'flex' }}>
                    <TextField value={room['房間']} onChange={(e) => handleChangeRoom(e, '房間')} size="small" type="number" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} InputLabelProps={{ shrink: true }} sx={{width: '4rem' }} />
                    <Typography>房</Typography>
                    <TextField value={room['衛浴']} onChange={(e) => handleChangeRoom(e, '衛浴')} size="small" type="number" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} InputLabelProps={{ shrink: true }} sx={{width: '4rem' }} />
                    <Typography>衛</Typography>
                    <TextField value={room['廳數']} onChange={(e) => handleChangeRoom(e, '廳數')} size="small" type="number" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} InputLabelProps={{ shrink: true }} sx={{width: '4rem' }} />
                    <Typography>廳</Typography>
                </Box>
            </Grid>
            <Grid item md={16} sx={{ display: 'flex' }}>
                <Typography>租金：</Typography>
                <Slider
                    value={rent}
                    onChange={handleChangeRent}
                    valueLabelDisplay="auto"
                    min={0}
                    step={100}
                    max={30000}
                    // getAriaValueText={valuetext}
                />
            </Grid>
            <Grid item md={16} sx={{ display: 'flex' }}>
                <Typography>家具：</Typography>
            </Grid>
        </Grid>
    )
}

export default ConditionOptions;