
import * as React from 'react';
import { useState, useEffect } from 'react';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { FormGroup } from '@mui/material';

import { Box, Grid, Tabs, Tab, Typography, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import cityCountyData from './../../data/CityCountyData.json';
const cityData = Object.fromEntries(cityCountyData.map((city) => [city.CityName, city.AreaList]))




const areas = {
    '北部': ['臺北市', '新北市', '桃園市', '新竹市', '基隆市', '新竹縣', '宜蘭縣'],
    '中部': ['臺中市', '彰化縣', '雲林縣', '苗栗縣', '南投縣'],
    '南部': ['高雄市', '臺南市', '嘉義市', '嘉義縣', '屏東縣'],
    '東部': ['臺東縣', '花蓮縣'],
    '離島': ['澎湖縣', '金門縣', '連江縣']
}

function Options() {
    const [value, setValue] = useState('北部');
    const [county, setCounty] = useState('臺北市');
    const [areaList, setAreaList] = useState({});
    const [all, setAll] = useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
        setCounty();
    };
    
    const handleChangeCounty = (event) => {
        setCounty(event.target.value);
        setAll(false);
    };
    const handleChangeArea = (event) => {
        if (event.target.name === '不限') {
            setAll(event.target.checked);
            setAreaList(Object.assign({...areaList}, Object.fromEntries(cityData[county].map((area) => { return [area['AreaName'], event.target.checked]}))));
        } else {
            setAreaList({...areaList, [event.target.name]: event.target.checked});
        }
    };


    // 選擇北、中、南部
    const PositionOptions = () => {
        return (
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">地區</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                    row
                    sx={{ pl: 2 }}
                >
                    <FormControlLabel sx={{'& .MuiFormControlLabel-label': { fontSize: '0.8rem' }, '& .MuiSvgIcon-root': { fontSize: '0.8rem' }}} value="北部" control={<Radio />} label="北部" />
                    <FormControlLabel sx={{'& .MuiFormControlLabel-label': { fontSize: '0.8rem' }, '& .MuiSvgIcon-root': { fontSize: '0.8rem' }}} value="中部" control={<Radio />} label="中部" />
                    <FormControlLabel sx={{'& .MuiFormControlLabel-label': { fontSize: '0.8rem' }, '& .MuiSvgIcon-root': { fontSize: '0.8rem' }}} value="南部" control={<Radio />} label="南部" />
                    <FormControlLabel sx={{'& .MuiFormControlLabel-label': { fontSize: '0.8rem' }, '& .MuiSvgIcon-root': { fontSize: '0.8rem' }}} value="東部" control={<Radio />} label="東部" />
                    <FormControlLabel sx={{'& .MuiFormControlLabel-label': { fontSize: '0.8rem' }, '& .MuiSvgIcon-root': { fontSize: '0.8rem' }}} value="離島" control={<Radio />} label="離島" />
                </RadioGroup>
            </FormControl>
        )
    }
    
    // 選擇縣市
    const CityOptions = () => {
        return (
            <FormControl>
                <FormLabel id="county-group">縣市</FormLabel>
                <RadioGroup
                    name="county-group"
                    value={county}
                    onChange={handleChangeCounty}
                    row
                    sx={{ pl: 2 }}
                >
                    {areas[value].map((county) => 
                        <FormControlLabel sx={{'& .MuiFormControlLabel-label': { fontSize: '0.8rem', color: cityData[county].filter((area) => areaList[area['AreaName']]).length > 0 && 'blue' }, '& .MuiSvgIcon-root': { fontSize: '0.8rem' }}} value={county} control={<Radio/>} label={county} />
                    )}
                </RadioGroup>
            </FormControl>
        )
    }

    // 選擇鄉鎮市區
    const AreaOptions = () => {
        return (
            <FormControl>
                <FormLabel id="county-group">鄉鎮市區</FormLabel>
                <FormGroup
                    row
                    sx={{ pl: 2 }}
                >
                    <FormControlLabel sx={{
                        '& .MuiFormControlLabel-label': { fontSize: '0.8rem', color: all && 'blue' }}} 
                        control={<Checkbox sx={{ display: 'none' }} checked={all} onChange={handleChangeArea} name={'不限'} />} label={'不限'}/>
                    {cityData[county].map((area, index) => 
                        <FormControlLabel sx={{'& .MuiFormControlLabel-label': { fontSize: '0.8rem', color: areaList[area['AreaName']] && 'blue' }, '& .MuiSvgIcon-root': { fontSize: '0.8rem' }}} control={<Checkbox checked={areaList[area['AreaName']] === undefined ? false : areaList[area['AreaName']]} onChange={handleChangeArea} name={area['AreaName']} />} label={area['AreaName']}/>
                    )}
                </FormGroup>
            </FormControl>
        )
    }

    // 地區選擇
    const LocationOptions = () => {
        return (
            <>
                <PositionOptions />
                {value && <>
                    <hr />
                    <CityOptions />
                </>}
                {county && <>
                    <hr />
                    <AreaOptions />
                </>}
            </>
        )
    }

    const [houseType, setHouseType] = useState('不限');
    const [roomType, setRoomType] = useState('不限');
    const handleChangeHouseType = (event, newValue) => {
        setHouseType(newValue)
    }
    const handleChangeRoomType = (event, newValue) => {
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
    const tabProps = (label) => {
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
    const [room, setRoom] = useState({});
    const handleChangeRoom = (event, name) => {
        if (event.target.value >= 0) { setRoom({...room, [name]: parseInt(event.target.value)}); }
        
    }
    const ConditionOptions = () => {
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
                </Grid>
                <Grid item md={16} sx={{ display: 'flex' }}>
                    <Typography>家具：</Typography>
                </Grid>
            </Grid>
        )
    }
    useEffect(() => {
        console.log(`搜尋以下區域：${ Object.keys(areaList).filter((area) => areaList[area]) }`);
        console.log(`房屋類型：${houseType}`)
        console.log(`房間格局：${JSON.stringify(room)}`)
    }, )

    return (
        <Grid container columns={16}>
            <Grid item md={6}>
                <LocationOptions />
            </Grid>
            <Grid item md={6}>
                <ConditionOptions />
            </Grid>
        </Grid>
    );
}



function SelectBar() {
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
                <Options />
                <Button>搜尋</Button>
            </Paper>
            
        </Box>
    )
}

export default SelectBar;