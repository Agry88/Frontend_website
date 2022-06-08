import React from 'react'
import { Box,Card,CardContent,Typography,Avatar,Grid,Button} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import Line from'./icons8-line.svg';
export default function Cardput(props) {
    const {landlordStatus, landlordNickName, phoneNumber, lineAddress} = props.landlord;
    const displayPhoneNumber = `${phoneNumber.substring(0,4)}-${phoneNumber.substring(4,7)}-${phoneNumber.substring(7)}`;
    var landlordType;
    switch (landlordStatus) { //0為房東, 1為代理人, 2為仲介
        case 0:
            landlordType = '房東';
            break;

        case 1:
            landlordType = '代理人';
            break;

        case 2:
            landlordType = '仲介';
            break;
        
        default:
            landlordType = '房東';
            break;
    }
    
    return (
        <Box sx={{
            backgroundColor: '#ffffff',
            minHeight: '1000px'
        }}>
            <Card >
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
                                {landlordType}：{landlordNickName}
                            </Grid>
                        </Grid>     
                    </Typography>
                    <Typography variant="h5" component="div">
                    
                    </Typography>
                    <Button size="medium"fullWidth sx={{color:'white',borderRadius: 1,bgcolor:'#ff8000',mb:1,':hover': {
                        bgcolor: '#ff8000', // theme.palette.primary.main
                        color: 'white',
                        }}} ><PhoneIcon/>{displayPhoneNumber}</Button>
                    <Button size="medium"fullWidth sx={{color:'white',borderRadius: 1,bgcolor:'#23ba4f',':hover': {
                        bgcolor: '#23ba4f', // theme.palette.primary.main
                        color: 'white',
                        }}} ><img src={Line} alt="React Logo" />LINE</Button>
            
                </CardContent>
            </Card>
        </Box>
    )
}
