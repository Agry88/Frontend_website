
import * as React from 'react';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { FormGroup } from '@mui/material';

import { Box } from '@mui/material';
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

function ControlledRadioButtonsGroup() {
    const [value, setValue] = useState('北部');
    const [county, setCounty] = useState();
    const [areaList, setAreaList] = useState({});

    const handleChange = (event) => {
        setValue(event.target.value);
        setCounty();
    };
    
    const handleChangeCounty = (event) => {
        setCounty(event.target.value);
    };
    const handleChangeArea = (event) => {
        console.log(areaList);
        setAreaList({...areaList, [event.target.name]: event.target.checked});
    };
    return (
        <>
            <FormControl sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <FormLabel id="demo-controlled-radio-buttons-group">地區</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                    row
                >
                    <FormControlLabel value="北部" control={<Radio />} label="北部" />
                    <FormControlLabel value="中部" control={<Radio />} label="中部" />
                    <FormControlLabel value="南部" control={<Radio />} label="南部" />
                    <FormControlLabel value="東部" control={<Radio />} label="東部" />
                    <FormControlLabel value="離島" control={<Radio />} label="離島" />
                </RadioGroup>
            </FormControl>
            <hr />
            <FormControl sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <FormLabel id="county-group">縣市</FormLabel>
                <RadioGroup
                    aria-labelledby="county-group"
                    name="county-group"
                    value={county}
                    onChange={handleChangeCounty}
                    row
                >
                    {areas[value].map((county, index) => 
                        <FormControlLabel value={county} control={<Radio />} label={county} />
                    )}
                </RadioGroup>
            </FormControl>
            {county && <>
            <hr />
            <FormControl sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <FormLabel id="county-group">鄉鎮市區</FormLabel>
                <FormGroup
                    row
                >
                    {cityData[county].map((area, index) => 
                        <FormControlLabel control={<Checkbox checked={areaList[area['AreaName']] === undefined ? false : areaList[area['AreaName']]} onChange={handleChangeArea} name={area['AreaName']} />} label={area['AreaName']} />
                    )}
                </FormGroup>
            </FormControl>
            </>}
        </>
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
            pt: '10px'
            
        }}>
            <Paper sx={{
                p: '10px',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <Box>
                    <ControlledRadioButtonsGroup />
                </Box>
                <Button>搜尋</Button>
            </Paper>
            
        </Box>
    )
}

export default SelectBar;