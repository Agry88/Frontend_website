
import * as React from 'react';

import { Box, Grid, Tabs, Tab, Typography, TextField, Slider } from '@mui/material';

import { useDispatch, useSelector } from "react-redux";
import { SetSearch } from "../../Actions";

function ConditionOptions(props) {
    const SearchData = useSelector(state => state.Search);
    const dispatch = useDispatch();
    
    const handleChangeHouseType = (event, newValue) => { // 修改房屋類型
        dispatch(SetSearch('setHouseType', newValue));
    }

    const handleChangeRoomType = (event, newValue) => { // 修改房間類型
        dispatch(SetSearch('setRoomType', newValue));
        switch (newValue) {
            case '整層住家':
                dispatch(SetSearch('setRoom', {...SearchData.room, '房間': 1,'衛浴': 1, '廳數': 1}));
                break;

            case '獨立套房':
                dispatch(SetSearch('setRoom', {...SearchData.room, '房間': 1,'衛浴': 1, '廳數': 0}));
                break;
        
            case '分租套房':
                dispatch(SetSearch('setRoom', {...SearchData.room, '房間': 1,'衛浴': 1, '廳數': 1}));
                break;

            case '分租雅房':
                dispatch(SetSearch('setRoom', {...SearchData.room, '房間': 1,'衛浴': 0, '廳數': 1}));
                break;

            case '雅房':
                dispatch(SetSearch('setRoom', {...SearchData.room, '房間': 1,'衛浴': 0, '廳數': 0}));
                break;
        
            default:
                break;
        }
    }

    const handleChangeRoom = (event, name) => { // 修改房屋格局
        
        if (event.target.value >= 0) { dispatch(SetSearch('setRoom', {...SearchData.room, [name]: parseInt(event.target.value)})); }
        
    }

    const handleChangeRent = (event, newValue) => { // 修改租金範圍
        if(newValue[1] === 40000) {
            dispatch(SetSearch('setRent', [newValue[0], 999999]));
        } else {
            dispatch(SetSearch('setRent', newValue));
        }
    }
    
    const tabProps = (label, value) => { // Style
        return {
            'label': label,
            'value': value,
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

    const marks = [
        {
            value: 0,
            label: '0元',
        },
        {
            value: 10000,
            label: '10,000元',
        },
        {
            value: 20000,
            label: '20,000元',
        },
        {
            value: 30000,
            label: '30,000元',
        },
        {
            value: 40000,
            label: '無上限',
        },
    ];
    return (
        <Grid container columns={16} spacing={2}>
            <Grid item md={16} sx={{ display: 'flex' }}>
                <Typography>房屋類型：</Typography>
                <Tabs value={SearchData.houseType} onChange={handleChangeHouseType} sx={{minHeight: '0' }}>
                    <Tab {...tabProps('不限', null)} />
                    <Tab {...tabProps('公寓', '公寓')} />
                    <Tab {...tabProps('電梯大樓', '電梯大樓')} />
                    <Tab {...tabProps('透天厝', '透天厝')} />
                    <Tab {...tabProps('別墅', '別墅')} />
                </Tabs>
            </Grid>
            <Grid item md={16} sx={{ display: 'flex' }}>
                <Typography>房間類型：</Typography>
                <Tabs value={SearchData.roomType} onChange={handleChangeRoomType} sx={{minHeight: '0' }}>
                    <Tab {...tabProps('不限', null)} />
                    <Tab {...tabProps('整層住家', '整層住家')} />
                    <Tab {...tabProps('獨立套房', '獨立套房')} />
                    <Tab {...tabProps('分租套房', '分租套房')} />
                    <Tab {...tabProps('分租雅房', '分租雅房')} />
                    <Tab {...tabProps('雅房', '雅房')} />
                </Tabs>
            </Grid>
            <Grid item md={16} sx={{ display: 'flex' }}>
                <Typography>房間格局：</Typography>
                <Box sx={{ display: 'flex' }}>
                    <TextField value={SearchData.room['房間']} onChange={(e) => handleChangeRoom(e, '房間')} size="small" type="number" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} InputLabelProps={{ shrink: true }} sx={{width: '4rem' }} disabled={SearchData.roomType !== null} />
                    <Typography>房</Typography>
                    <TextField value={SearchData.room['衛浴']} onChange={(e) => handleChangeRoom(e, '衛浴')} size="small" type="number" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} InputLabelProps={{ shrink: true }} sx={{width: '4rem' }} disabled={SearchData.roomType !== null} />
                    <Typography>衛</Typography>
                    <TextField value={SearchData.room['廳數']} onChange={(e) => handleChangeRoom(e, '廳數')} size="small" type="number" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} InputLabelProps={{ shrink: true }} sx={{width: '4rem' }} disabled={SearchData.roomType !== null} />
                    <Typography>廳</Typography>
                </Box>
            </Grid>
            <Grid item md={16} sx={{ display: 'flex' }}>
                <Typography>租金：</Typography>
                <Box sx={{ width: '20rem' }}>
                    <Slider
                        value={SearchData.rent}
                        onChange={handleChangeRent}
                        valueLabelDisplay="auto"
                        // valueLabelDisplay="on"
                        min={0}
                        step={100}
                        max={40000}
                        marks={marks}
                        // disableSwap
                    />
                </Box>
            </Grid>
            <Grid item md={16} sx={{ display: 'flex' }}>
                <Typography>家具：</Typography>
            </Grid>
        </Grid>
    )
}

export default ConditionOptions;