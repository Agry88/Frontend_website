import React from 'react';
import {
    Link
} from 'react-router-dom'
import './Footer.css';
import { Grid, Box, Container } from '@mui/material';
export default function Footer() {
    return (
        <Box px={{xs:3,sm:10}} py={{xs:5,sm:10}} bgcolor='text.secondary' color='white'>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>客服中心</Box>
                        <Box component={Link} to="/" className="link" style={{ textDecoration: 'none' }}>幫助</Box><br/>
                        <Box component={Link} to="/" className="link" style={{ textDecoration: 'none' }}>隱私</Box><br/>
                        <Box component={Link} to="/" className="link" style={{ textDecoration: 'none' }}>聯繫</Box><br/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>會員中心</Box>
                        <Box component={Link} to="/" className="link" style={{ textDecoration: 'none' }}>登入</Box><br/>
                        <Box component={Link} to="/" className="link" style={{ textDecoration: 'none' }}>註冊</Box><br/>
                        <Box component={Link} to="/" className="link" style={{ textDecoration: 'none' }}>聯繫</Box><br/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>關注我們</Box>
                        <Box component={Link} to="/" className="link" style={{ textDecoration: 'none' }}>幫助</Box><br/>
                        <Box component={Link} to="/" className="link" style={{ textDecoration: 'none' }}>隱私</Box><br/>
                        <Box component={Link} to="/" className="link" style={{ textDecoration: 'none' }}>聯繫</Box><br/>
                    </Grid>
                   
                   
                </Grid>
                <Box textAlign='center' pt={{xs:5,sm:10}} pb={{xs:5,sm:10}}></Box>
            </Container>
        </Box>
    )
}
