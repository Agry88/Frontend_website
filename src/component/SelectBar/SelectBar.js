
import * as React from 'react';
import { useState, useEffect } from 'react';

import { Box, Grid, Paper, Button } from '@mui/material';
import { useSelector } from 'react-redux';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import LocationOptions from './LocationOptions.js';
import ConditionOptions from './ConditionOptions.js';


function SelectBar(props) {
    const SearchData = useSelector(state => state.Search);
    const { cityData } = props;
    const [expanded, setExpanded] = useState('panel1');

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const onSubmit = () => {
        console.log('送出');
        console.log(SearchData)
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
                width: '100%',
                
            }}>
                <Box >
                    <Grid container columns={16} rowSpacing={{ md: 1 }} sx={{ justifyContent: 'center' }}>
                        <Grid item md={4}></Grid>
                        <Grid item md={8}>
                            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                                >
                                    <Typography sx={{ width: '100%', flexShrink: 0 }}>
                                        地區選擇
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <LocationOptions cityData={cityData} />
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2bh-content"
                                id="panel2bh-header"
                                >
                                <Typography sx={{ width: '100%', flexShrink: 0 }}>條件選擇</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <ConditionOptions cityData={cityData} />
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item md={4}></Grid>
                        <Grid item md={4}></Grid>
                        <Grid item md={8}>
                            <Button variant='outlined' onClick={onSubmit}>搜尋</Button>
                        </Grid>
                        <Grid item md={4}></Grid>
                    </Grid>
                </Box>
            </Paper>
            
        </Box>
    )
}

export default SelectBar;