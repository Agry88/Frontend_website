
import * as React from 'react';
import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const areas = {
    north: ['北部', ['台北市', '新北市', '桃園市', '新竹市', '基隆市', '新竹縣', '宜蘭縣']],
    central: ['中部', ['台中市', '彰化縣', '雲林縣', '苗栗縣', '南投縣']],
    south: ['南部', ['高雄市', '台南市', '嘉義市', '嘉義縣', '屏東縣']],
    east: ['東部', ['台東縣', '花蓮縣']],
    outlyingIslands: ['離島', ['澎湖縣', '金門縣', '連江縣']]

}

function ControlledRadioButtonsGroup() {
    const [value, setValue] = useState('north');
    const [county, setCounty] = useState(0);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    
    const handleChangeCounty = (event) => {
        setCounty(event.target.value);
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
                    <FormControlLabel value="north" control={<Radio />} label="北部" />
                    <FormControlLabel value="central" control={<Radio />} label="中部" />
                    <FormControlLabel value="south" control={<Radio />} label="南部" />
                    <FormControlLabel value="east" control={<Radio />} label="東部" />
                    <FormControlLabel value="outlyingIslands" control={<Radio />} label="離島" />
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
                    {areas[value][1].map((county, index) => 
                        <FormControlLabel value={index} control={<Radio />} label={county} />
                    )}
                </RadioGroup>
            </FormControl>
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