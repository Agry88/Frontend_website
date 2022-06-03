import React, { useEffect,  } from 'react'
import { Box, Typography,Breadcrumbs } from '@mui/material';
import { Link, useHistory, withRouter } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

function BreadCrumbs(props) {
    const { go, goBack, goForward } = useHistory();

    const setBreadcrumbs = () => {
        const HistoryList = props.match.path;
        return HistoryList.split("/");
    }

    useEffect(() => {
        const BreadCrumbList = setBreadcrumbs();
        console.log(BreadCrumbList);
    }, []);

    return (
        <Box>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" to="/">
                    <HomeIcon />
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    onClick={goBack}
                >
                    Core
                </Link>
                <Typography color="text.primary">Breadcrumbs</Typography>
            </Breadcrumbs>
        </Box>
    );
}
BreadCrumbs = withRouter(BreadCrumbs);

export default BreadCrumbs;