import React, { useEffect, useState } from 'react'
import { Box, Typography, ImageList, ImageListItem, ImageListItemBar, Pagination } from '@mui/material';
import { Link } from "react-router-dom";
import SelectBar from '../SelectBar/SelectBar.js';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

function IndexPage(props) {

    const [DataList, setDataList] = useState([]);
    const [Page, setPage] = useState("");

    const Loop = () => {
        const tempDataList = [];
        for (let index = 0; index < 12; index++) {
            tempDataList.push(
                {
                    id: index,
                    src: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
                    alt: "超棒房屋",
                    date: "2022/03/25",
                },
            );
        }
        setDataList(tempDataList);
    };

    useEffect(() => {
        Loop();
    }, []);


    const handlePageClick = (e) => {
        setPage(e.target.firstChild.textContent);
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: 800, }}>

            <Box>
                <SelectBar />
            </Box>

            {/* ??? */}


            <Box>
                <Typography variant="h3">
                    房屋照片
                </Typography>
            </Box>
            <Box sx={{ background: "#dfe0ed", pt: 5, pb: 15, pl: 10, pr: 10 }}>

                <BreadCrumbs />

                <ImageList cols={4} rowHeight={250}
                    sx={{
                        width: "auto",
                        minHeight: 650,
                    }} >
                    {DataList.map((data) => {
                        return (
                            <ImageListItem key={data.id} sx={{
                                width: 350,
                                pb: 5,
                                ":hover": {
                                    boxShodow: 3
                                },
                            }}>
                                <Link to={"/PageDetail/" + data.id}>
                                    <img style={{ width: 350, height: 200 }}
                                        src={data.src}
                                        loading="lazy"
                                    />
                                </Link>
                                <ImageListItemBar
                                    title={"刊登日期:"}
                                    subtitle={<span>{data.date}</span>}
                                    position="below"
                                />
                            </ImageListItem>
                        )
                    })}
                </ImageList>
            </Box>
            <Box
                sx={{
                    width: 1,
                    minHeight: 50,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#dfe0ed",
                }}>
                <Pagination count={11} defaultPage={1} boundaryCount={2} size="large" onClick={handlePageClick} />
            </Box>
        </Box>
    );
}

export default IndexPage;
// https://images.unsplash.com/photo-1551963831-b3b1ca40c98e

