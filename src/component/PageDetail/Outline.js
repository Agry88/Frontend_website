import React from 'react'
import { Box, Stack, Typography, } from '@mui/material';
export default function Outline(props) {
    const { title, tags, roomType, size, floor, houseType, rentMoney, securityDeposit,totalFloor } = props.outlineValue;
    const PostTag=(props)=> {
        const content = props.content;
    
        const icon = props.icon;
        var style;
        switch (props.type) {
            case '1':
                style = {backgroundColor: '#fff7e6', color: '#9b5b1a'};
                
                break;
    
            case '2':
                style = {backgroundColor: '#fff7e6', color: '#9b5b1a'};
                break;
    
            default:
                style = null;
                break;
        }
        return (
            <Typography sx={{
                display: 'inline',
                backgroundColor: '#f2f6fa',
                color: '#4e71a5',
                px: '8px',
                py: '4px',
                m: '4px',
                borderRadius: 1,
                ...style
            }}>
                {icon}{content}
            </Typography>
        )
    }
    return (
        <Stack spacing={1}>
        <Box>
            <Typography variant="h5" sx={{fontWeight: 'bold'}}>{title}</Typography>
        </Box>
        <Box>
            {tags.map((tag,index) => <PostTag key={index} content={tag.content} type={tag.type} icon={tag.icon}></PostTag>)}
        </Box>
        <Box>
            <Typography variant="h6">
                {roomType}
                <Typography sx={{ display: 'inline-block', backgroundColor: '#afafaf', width: '1px', height: '12px', mx: '6px'}} />
                {size}坪 
                <Typography sx={{ display: 'inline-block', backgroundColor: '#afafaf', width: '1px', height: '12px', mx: '6px'}} />
                {floor}F/{totalFloor}F
                <Typography sx={{ display: 'inline-block', backgroundColor: '#afafaf', width: '1px', height: '12px', mx: '6px'}} />
                {houseType}
            </Typography>
        </Box>
        <Box>
            <Typography sx={{ display: 'inline-block', fontSize: '30px', fontWeight: 'bold', color: '#FF0000'}}>{rentMoney}</Typography>
            <Typography sx={{ display: 'inline-block', fontSize: '16px', color: '#FF0000', mr: '16px'}}>元/月</Typography>
            
            <Typography sx={{ display: 'inline-block'}}>押金{securityDeposit}元</Typography>
            
        </Box>
    </Stack>
    )
}
