import * as React from 'react';
import { useState, useEffect } from 'react';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { FormGroup } from '@mui/material';


const areas = {
    '北部': ['臺北市', '新北市', '桃園市', '新竹市', '基隆市', '新竹縣', '宜蘭縣'],
    '中部': ['臺中市', '彰化縣', '雲林縣', '苗栗縣', '南投縣'],
    '南部': ['高雄市', '臺南市', '嘉義市', '嘉義縣', '屏東縣'],
    '東部': ['臺東縣', '花蓮縣'],
    '離島': ['澎湖縣', '金門縣', '連江縣']
}

function LocationOptions(props) {
    const { cityData } = props;
    const [position, setPosition] = useState('北部');
    const [county, setCounty] = useState('臺北市');
    const [areaList, setAreaList] = useState({});
    const [all, setAll] = useState(false);

    const PositionOptions = () => { // 選擇北、中、南部
        const handleChangePositions = (event) => {
            setPosition(event.target.value);
            setCounty();
        };
        return (
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">地區</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={position}
                    onChange={handleChangePositions}
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
    
    const CityOptions = () => {  // 選擇縣市
        const handleChangeCounty = (event) => {
            setCounty(event.target.value);
            setAll(false);
        };
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
                    {areas[position].map((county) => 
                        <FormControlLabel sx={{'& .MuiFormControlLabel-label': { fontSize: '0.8rem', color: cityData[county].filter((area) => areaList[area['AreaName']]).length > 0 && 'blue' }, '& .MuiSvgIcon-root': { fontSize: '0.8rem' }}} value={county} control={<Radio/>} label={county} />
                    )}
                </RadioGroup>
            </FormControl>
        )
    }

    const AreaOptions = () => { // 選擇鄉鎮市區
        const handleChangeArea = (event) => {
            if (event.target.name === '不限') {
                setAll(event.target.checked);
                setAreaList(Object.assign({...areaList}, Object.fromEntries(cityData[county].map((area) => { return [area['AreaName'], event.target.checked]}))));
            } else {
                setAreaList({...areaList, [event.target.name]: event.target.checked});
            }
        };
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

    useEffect(() => {
        console.log(`搜尋以下區域：${ Object.keys(areaList).filter((area) => areaList[area]) }`);
    }, )
    
    return (
        <>
            <PositionOptions />
            {position && <>
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

export default LocationOptions;