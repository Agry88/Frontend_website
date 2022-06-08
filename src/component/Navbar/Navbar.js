import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, mb: '32px' }}>
      <AppBar position="fixed">
        <Toolbar>
          <Box sx={{ flexGrow: 1 , textDecoration: 'none' }} color="inherit" component={Link} to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <Link><HomeIcon/></Link> */}
              <HomeIcon />
              <Typography variant="h6" component="span" >
                我愛房東網
              </Typography>
            </IconButton>
          </Box>

          <Button color="inherit" component={Link} to="/">首頁</Button>

          <Button color="inherit" component={Link} to="RentPages" >租房資料</Button>

          <Button color="inherit" component={Link} to="/SignIn">登入</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
