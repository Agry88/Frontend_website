
import * as React from 'react';

import { Box, Grid, Tabs, Tab, Typography, TextField, Slider, Checkbox } from '@mui/material';
import { FormControlLabel, FormControl, FormLabel, FormGroup } from '@mui/material';

import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { SetSearch } from "../../Actions";

const roleList = ['學生', '上班族', '家庭']

function ConditionOptions(props) {
    const SearchData = useSelector(state => state.Search);
    const dispatch = useDispatch();
    
    const handleChangeHouseType = (event, newValue) => { // 修改房屋類型
        dispatch(SetSearch('setHouseType', newValue));
    }
    
    const handleChangGender = (event, newValue) => { // 修改房屋類型
        dispatch(SetSearch('setGender', newValue));
    }
    
    const handleChangeRoomType = (event, newValue) => { // 修改房間類型
        dispatch(SetSearch('setRoomType', newValue));
        switch (newValue) {
            case '整層住家':
                dispatch(SetSearch('setRoom', {...SearchData.houseInfo.room, '房間': 1,'衛浴': 1, '廳數': 1}));
                break;

            case '獨立套房':
                dispatch(SetSearch('setRoom', {...SearchData.houseInfo.room, '房間': 1,'衛浴': 1, '廳數': 0}));
                break;
        
            case '分租套房':
                dispatch(SetSearch('setRoom', {...SearchData.houseInfo.room, '房間': 1,'衛浴': 1, '廳數': 1}));
                break;

            case '分租雅房':
                dispatch(SetSearch('setRoom', {...SearchData.houseInfo.room, '房間': 1,'衛浴': 0, '廳數': 1}));
                break;

            case '雅房':
                dispatch(SetSearch('setRoom', {...SearchData.houseInfo.room, '房間': 1,'衛浴': 0, '廳數': 0}));
                break;
        
            default:
                break;
        }
    }

    const handleChangeRoom = (event, name) => { // 修改房屋格局
        
        if (event.target.value >= 0) { dispatch(SetSearch('setRoom', {...SearchData.houseInfo.room, [name]: parseInt(event.target.value)})); }
        
    }

    const handleChangeRent = (event, newValue) => { // 修改租金範圍
        dispatch(SetSearch('setPriceRange', newValue));
    }

    const handleChangeTextRent = (event, index) => { // 修改租金範圍
        var value = Array.from(SearchData.priceRange);
        const newValue = parseInt(event.target.value);
        if (newValue >= 0) {
            value[index] = newValue; // 給予絕對值，不可輸入負值
            dispatch(SetSearch('setPriceRange', value));
        }
    }
    
    const handleCheckTextRent = (event) => { // 檢查上限與下限，進行適當交換
        var [min, max] = Array.from(SearchData.priceRange);
        if (min > max) {
            dispatch(SetSearch('setPriceRange', [max, min]));
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
            label: '0',
        },
        {
            value: 10000,
            label: '10,000',
        },
        {
            value: 20000,
            label: '20,000',
        },
        {
            value: 30000,
            label: '30,000',
        },
        {
            value: 40000,
            label: '40,000',
        },
    ];

    const numberProps = (sx={}) => { // {p: 2}
        return {
            size: "smunlimit",
            type: "number",
            inputProps: { inputMode: 'numeric', pattern: '[0-9]*' },
            InputLabelProps: { shrink: true }, 
            sx: {width: '6rem', mx: '0.2rem', ...sx }
        }
    }
    const roomProps = (name) => {
        return {
            label: name, 
            value: SearchData.houseInfo.room[name], 
            disabled: SearchData.houseInfo.roomType !== null
        }
    }

    const titleProps = (title) => {
        return {
            width: '6rem',
            align: 'right',
            children: title
        }
    }

    const isChecked = (name) => {
        const roles = new Set(SearchData.equipmentAndServices.condition.role);
        
        return roles.has(name);
    }
    const [unlimit, setUnlimit] = useState(false);
    const handleChangeRole = (event) => {
        const checked = event.target.checked;
        const name = event.target.name;
        const roles = new Set(SearchData.equipmentAndServices.condition.role);
        if (name === '不限') {
            if (!checked) {
                // 
            } else {
                roles.clear();
            }
            setUnlimit(checked);

        } else {
            if (!checked) {
                roles.delete(name);
            } else {
                roles.add(name);
            }
            // setUnlimit(cityData[county].length === countyList.size);
        }
        dispatch(SetSearch('setRoles', Array.from(roles)));
    };
    return (
        <Grid container columns={16} spacing={2}>
            <Grid item md={16} sx={{ display: 'flex' }}>
                <Typography {...titleProps('房屋類型：')} />
                <Tabs value={SearchData.houseInfo.houseType} onChange={handleChangeHouseType} sx={{minHeight: '0' }}>
                    <Tab {...tabProps('不限', null)} />
                    <Tab {...tabProps('公寓', '公寓')} />
                    <Tab {...tabProps('電梯大樓', '電梯大樓')} />
                    <Tab {...tabProps('透天厝', '透天厝')} />
                    <Tab {...tabProps('別墅', '別墅')} />
                </Tabs>
            </Grid>
            <Grid item md={16} sx={{ display: 'flex' }}>
                <Typography {...titleProps('房間類型：')} />
                <Tabs value={SearchData.houseInfo.roomType} onChange={handleChangeRoomType} sx={{minHeight: '0' }}>
                    <Tab {...tabProps('不限', null)} />
                    <Tab {...tabProps('整層住家', '整層住家')} />
                    <Tab {...tabProps('獨立套房', '獨立套房')} />
                    <Tab {...tabProps('分租套房', '分租套房')} />
                    <Tab {...tabProps('分租雅房', '分租雅房')} />
                    <Tab {...tabProps('雅房', '雅房')} />
                </Tabs>
            </Grid>
            <Grid item md={16} sx={{ display: 'flex' }}>
                <Typography {...titleProps('房間格局：')} />
                <Box sx={{ display: 'flex' }}>
                    <TextField onChange={(e) => handleChangeRoom(e, '房間')} {...numberProps()} {...roomProps('房間')} />
                    <TextField onChange={(e) => handleChangeRoom(e, '衛浴')} {...numberProps()} {...roomProps('衛浴')} />
                    <TextField onChange={(e) => handleChangeRoom(e, '廳數')} {...numberProps()} {...roomProps('廳數')} />
                </Box>
            </Grid>
            <Grid item md={16} sx={{ display: 'flex' }}>
                <Typography {...titleProps('租金：')} />
                <Box>
                    <Box sx={{ width: '20rem' }}>
                        <Box>
                            <TextField onChange={(e) => handleChangeTextRent(e, 0)} onBlur={handleCheckTextRent} label='下限' value={SearchData.priceRange[0]} {...numberProps({width: '9.2rem'})} />
                            <TextField onChange={(e) => handleChangeTextRent(e, 1)} onBlur={handleCheckTextRent} label='上限' value={SearchData.priceRange[1]} {...numberProps({width: '9.2rem'})} />
                        </Box>
                        <Slider
                            sx={{ mx: '0.2rem', width: '18.4rem' }}
                            value={SearchData.priceRange}
                            onChange={handleChangeRent}
                            min={0}
                            step={100}
                            max={40000}
                            marks={marks}
                            // disableSwap
                        />
                    </Box>
                </Box>
            </Grid>
            <Grid item md={16} sx={{ display: 'flex' }}>
                <Typography {...titleProps('身分限制：')} />
                <FormControl> 
                    {/* <FormLabel id="county-group">身分限制：</FormLabel> */}
                    <FormGroup
                        row
                        sx={{ pl: 2 }}
                    >
                        <FormControlLabel key={0} sx={{ '& .MuiFormControlLabel-label': { fontSize: '0.8rem', color: unlimit && 'blue' }, '& .MuiSvgIcon-root': { fontSize: '0.8rem' }}}
                            control={<Checkbox checked={unlimit} onChange={handleChangeRole} name={'不限'} />} label={'不限'}/>
                        <FormControlLabel key={1} disabled={unlimit} sx={{'& .MuiFormControlLabel-label': { fontSize: '0.8rem', color: isChecked('學生') && 'blue' }, '& .MuiSvgIcon-root': { fontSize: '0.8rem' }}} 
                            control={<Checkbox checked={ isChecked('學生') } onChange={handleChangeRole} name={'學生'} />} label={'學生'}/>
                        <FormControlLabel key={2} disabled={unlimit} sx={{'& .MuiFormControlLabel-label': { fontSize: '0.8rem', color: isChecked('上班族') && 'blue' }, '& .MuiSvgIcon-root': { fontSize: '0.8rem' }}} 
                            control={<Checkbox checked={ isChecked('上班族') } onChange={handleChangeRole} name={'上班族'} />} label={'上班族'}/>
                        <FormControlLabel key={3} disabled={unlimit} sx={{'& .MuiFormControlLabel-label': { fontSize: '0.8rem', color: isChecked('家庭') && 'blue' }, '& .MuiSvgIcon-root': { fontSize: '0.8rem' }}} 
                            control={<Checkbox checked={ isChecked('家庭') } onChange={handleChangeRole} name={'家庭'} />} label={'家庭'}/>
                    </FormGroup>
                </FormControl>
            </Grid>
            <Grid item md={16} sx={{ display: 'flex' }}>
                <Typography {...titleProps('性別限制：')} />
                <Tabs value={SearchData.equipmentAndServices.condition.gender} onChange={handleChangGender} sx={{minHeight: '0' }}>
                    <Tab {...tabProps('不限', null)} />
                    <Tab {...tabProps('限男性', '限男性')} />
                    <Tab {...tabProps('限女性', '限女性')} />
                </Tabs>
            </Grid>
        </Grid>
    )
}

export default ConditionOptions;