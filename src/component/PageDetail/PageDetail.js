
import { Box, Grid } from '@mui/material';
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import './PageDetail.css';
function PageDetail(props) {
    return (
        <Box sx={{
            backgroundColor: '#7f7f7f',
            mx: '50px',
            minHeight: '1000px'
        }}>
            <Box sx={{
                width: '100%',
                backgroundColor: '#0faf0f',
                minHeight: '30px'
            }}>
                <BreadCrumbs />
            </Box>
            <Box sx={{
                width: '100%',
                backgroundColor: '#0fafaf',
                minHeight: '300px'
            }}>
                圖片
            </Box>
            <Box sx={{
                display: 'flex'
            }}>
                <Box sx={{
                    flexGrow: 1,
                    backgroundColor: '#af0f0f',
                    minHeight: '500px'
                }}>
                    <Box fullWidth sx={{
                        backgroundColor: '#efef0f',
                        minHeight: '200px'
                    }}>
                        <Grid container spacing={0}>
                            <Grid item sx={{bgcolor: 'info.main', ml:3,borderRadius: 1 ,my:1,px:1}}>
                                <div>屋主直租</div>
                            </Grid>
                            <Grid item sx={{bgcolor: 'info.main', ml:1,borderRadius: 1 ,my:1,px:1}}>
                                <div>拎包入住</div>
                            </Grid>
                            <Grid item sx={{bgcolor: 'info.main', ml:1,borderRadius: 1,my:1,px:1 }}>
                                <div>位於中心</div>
                            </Grid>
                            <Grid item sx={{bgcolor: 'info.main', ml:1,borderRadius: 1,my:1,px:1 }}>
                                <div>房東很帥</div>
                            </Grid>
                        </Grid>
                        <Grid container spacing={0}>
                            <Grid item className="" sx={{ ml:3,borderRadius: 1 }}>
                                <div>屋主直租</div>
                            </Grid>
                            <Grid item >
                                <div className="line"></div>
                            </Grid>
                            <Grid item className="" sx={{ borderRadius: 1 }}>
                                <div>屋主直租</div>
                            </Grid>
                            <Grid item >
                                <div className="line"></div>
                            </Grid>
                            <Grid item className="" sx={{ borderRadius: 1 }}>
                                <div>屋主直租</div>
                            </Grid>
                            <Grid item >
                                <div className="line"></div>
                            </Grid>
                            <Grid item className="" sx={{borderRadius: 1 }}>
                                <div>屋主直租</div>
                            </Grid>
                            
                        </Grid>
                    </Box>
                    <Box fullWidth sx={{
                        backgroundColor: '#0fefef',
                        minHeight: '200px'
                    }}>
                        位置與週邊
                    </Box>
                    <Box fullWidth sx={{
                        backgroundColor: '#ef0fef',
                        minHeight: '200px'
                    }}>
                        設備與服務
                    </Box>
                    <Box fullWidth sx={{
                        backgroundColor: '#e8aaef',
                        minHeight: '500px'
                    }}>
                        屋況介紹
                    </Box>
                    <Box fullWidth sx={{
                        backgroundColor: '#e8aeaf',
                        minHeight: '200px'
                    }}>
                        屋況詳情
                    </Box>
                </Box>
                <Box sx={{
                    position: 'sticky',
                    width: '40%',
                    backgroundColor: '#afaf0f',
                    minHeight: '500px'
                }}>
                    圖片
                </Box>
            </Box>
        </Box>
    )
}

export default PageDetail;