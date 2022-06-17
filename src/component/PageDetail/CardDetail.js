import React from 'react'
import { Card,CardContent,Typography} from '@mui/material';
export default function CardDetail(props) {

  return (
  <>
    <Typography variant="h5" sx={{fontWeight: 'bold', pb: 1}}>屋主說 :</Typography>
    <Card sx={{maxWidth:700,minHeight:100}}>
        <CardContent>
            <Typography   variant="h6"  gutterBottom sx={{bgcolor:'#f1f1f1'}}>
               {props.say}
            </Typography>
        </CardContent>
    </Card>
    </>
                        
  )
}
