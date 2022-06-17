import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import IconButton from '@mui/material/IconButton'


import { useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SetMember } from "../../Actions";
import { useState } from "react";
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormGroup from '@mui/material/FormGroup'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'


function MemberDetail() {
    const history = useHistory();
    const dispatch = useDispatch();
    const MemberData = useSelector(state => state.Member);

    const [Imgsrc, setImgsrc] = useState("");

    const handleLogout = () => { //處理登出
        dispatch(SetMember(""));
        history.push("./");
    }

    const handlefile = e => { //更改使用者頭像
        const Imgfile = [...e.target.files];
        if (Imgfile.length < 1) return;
        const newImageUrls = [];
        Imgfile.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
        setImgsrc(newImageUrls);
    }

    const TriggerFile = () => {
        document.getElementById('fileButton').click();
    }

    return (
        <Box sx={{display: "flex", justifyContent: "center"}}>
            <Box sx={{ flexDirection: "column", p: 5 }}>
                <Stack sx={{ display: "flex", justifyContent: "center" }} direction={"row"}> {/* 切成左右邊 左邊顯示可更改內容 右邊顯示頭像 */}
                    <Box sx={{width:"50rem" }}> {/* 左邊區塊 顯示可更改內容 */}
                        <FormControl component="fieldset">
                            <FormLabel component="legend"></FormLabel>
                            <FormGroup>
                                <Stack direction={"column"} spacing={2}>
                                    <TextField
                                        id="MemberFirstName"
                                        label="會員姓氏"
                                    />
                                    <TextField
                                        id="MemberFirstName"
                                        label="會員姓氏"
                                    />
                                </Stack>
                            </FormGroup>
                            <FormHelperText></FormHelperText>
                        </FormControl>
                    </Box>


                    <Stack sx={{ justifyContent: "flex-end" }}> {/* 右邊區塊 顯示頭像 */}
                        <input id="fileButton" type="file" hidden onChange={handlefile} />
                        <Box>
                            <IconButton onClick={TriggerFile}> {/* 點擊時觸發上面的input File */}
                                <Avatar alt={MemberData.username} src={Imgsrc ? Imgsrc[0] : ""} sx={{ width: "20vh", height: "20vh" }} />
                            </IconButton>
                        </Box>
                    </Stack>
                </Stack>
                <Stack direction={"row"} sx={{ justifyContent: "flex-end" }}> {/* 下方登出列 */}
                    <Button variant="contained" color="primary" onClick={handleLogout}>
                        登出
                    </Button>
                    <Button variant="contained" color="secondary" component={Link} to="./">
                        返回上一頁
                    </Button>
                </Stack>
            </Box >
        </Box>

    );
}

export default MemberDetail;