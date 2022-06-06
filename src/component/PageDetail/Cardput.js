import React from 'react'
import { Box,Card,CardContent,Typography,Avatar,Grid,Button} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import Line from'./icons8-line.svg';
export default function Cardput() {
  return (
    <Box sx={{
        position: 'sticky',
        width: '40%',
        backgroundColor: '#afaf0f',
        minHeight: '1000px'
    }}>
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    <Grid container spacing={0}>
                        <Grid item>
                            <Avatar 
                                alt="Remy Sharp"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalTnxL604AYAhRBLY8ALueAe3Z5yiauJxHA&usqp=CAU"
                                sx={{ width: 50, height: 50 }}
                                />
                        </Grid>
                        <Grid item sx={{mt:3,fontSize:20}}>
                            屋主:季房東
                        </Grid>
                    </Grid>     
                </Typography>
                <Typography variant="h5" component="div">
                
                </Typography>
                <Button size="medium"fullWidth sx={{color:'white',borderRadius: 1,bgcolor:'#ff8000',mb:1,':hover': {
                    bgcolor: '#ff8000', // theme.palette.primary.main
                    color: 'white',
                    }}} ><PhoneIcon/>09XX-XXX-XXX</Button>
                <Button size="medium"fullWidth sx={{color:'white',borderRadius: 1,bgcolor:'#23ba4f',':hover': {
                    bgcolor: '#23ba4f', // theme.palette.primary.main
                    color: 'white',
                    }}} ><img src={Line} alt="React Logo" />LINE</Button>
        
            </CardContent>
        </Card>
    </Box>
  )
}
