import React from 'react'
import { Typography,Grid} from '@mui/material';
import {AiOutlineDollarCircle,AiOutlineCheck} from "react-icons/ai";
export default function HouseDetail(props) {
    const {islegal,area,registration,manageMoney,direction,rentMoney} = props.HouseDetailval
  return (
  <>
    <Typography variant="h5" sx={{fontWeight: 'bold', pb: 1}}>屋況詳情</Typography>
        <Grid container spacing={0}>
            <Grid item sx={{my:'1px'}}><AiOutlineDollarCircle/></Grid>
                <Grid item>
                    <Typography fontWeight='bold'>租住本房屋會產生下面這些費用</Typography>
                    
                        <Grid container spacing={0} sx={{my:1}}>
                            <Grid item>
                                押 金
                            </Grid>
                            <Grid item sx={{ml:1}}>
                                {rentMoney}
                            </Grid>
                        </Grid>     
                        <Grid container spacing={0} sx={{my:1}}>
                            <Grid item >
                                管理費
                            </Grid>
                            <Grid item sx={{ml:1}}>
                                {manageMoney}
                            </Grid>
                        </Grid>                                           
                </Grid>
                <Grid item sx={{my:'1px',ml:10}}><AiOutlineCheck/></Grid>
                <Grid item sx={{ml:1}}>
                    <Typography fontWeight='bold'>房屋已辦產權登記</Typography>
                    <Grid container spacing={0} sx={{my:1}}>
                        <Grid item >
                            朝 向
                        </Grid>
                        <Grid item sx={{ml:1}}>
                            {direction}
                        </Grid>
                    </Grid>         
                    <Grid container spacing={0} sx={{my:1}}>
                        <Grid item >
                            法定用途
                        </Grid>
                        <Grid item sx={{ml:1}}>
                            {islegal}
                        </Grid>
                    </Grid>     
                    <Grid container spacing={0} sx={{my:1}}>
                        <Grid item>
                            建物面積
                        </Grid>
                        <Grid item sx={{ml:1}}>
                            {area}
                        </Grid>
                    </Grid>    
                    <Grid container spacing={0} sx={{my:1}}>
                        <Grid item>
                            產權登記
                        </Grid>
                        <Grid item sx={{ml:1}}>
                            {registration}
                        </Grid>
                    </Grid>                                             
                </Grid>
            </Grid>
    </>
)
}
