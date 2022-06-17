import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
import Divider from '@mui/material/Divider'

import FormGroup from '@mui/material/FormGroup'

import TextField from '@mui/material/TextField'
import Modal from '@mui/material/Modal'
import Typography from "@mui/material/Typography";

import { useHistory} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SetMember } from "../../Actions";
import { useState } from "react";
import MemberDetailModal from "./MemberDetailModal";






function MemberDetail() {
    const history = useHistory();
    const dispatch = useDispatch();
    const MemberData = useSelector(state => state.Member);

    const [Imgsrc, setImgsrc] = useState("");
    const [ModalStatus, setModalStatus] = useState(false);

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

    const handleSubmit = e => { //處理確認修改事項
        e.preventDefault();
        isPassWordTrue(); //驗證密碼
        const Data = new FormData(e.currentTarget);
        console.log({
            MemberFirstName: Data.get("MemberFirstName"),
            MemberLastName: Data.get("MemberLastName"),
            UserName: Data.get("Username"),
            MemberLine: Data.get("MemberLine"),
            MemberPhone: Data.get("MemberPhone"),
            Password: Data.get("Password"),
        });
        //送出後端
    }

    const isPassWordTrue = () => {
        console.log("確認密碼是否正確");
    }

    return (
        <Box sx={{ display: "flex", justifyContent: "center",position:"sticky",top:150 }}>
            <Box sx={{ flexDirection: "column", mt: 5, p: 5, border: 1, borderRadius: 5, borderColor: "#589dfc", boxShadow: 5 }}>
                <Stack sx={{ display: "flex", justifyContent: "center" }} direction={"row"} spacing={0.1}> {/* 切成左右邊 左邊顯示可更改內容 右邊顯示頭像 */}
                    <Box sx={{ width: "35rem" }}> {/* 左邊區塊 顯示可更改內容 */}
                        <FormControl component="form" onSubmit={handleSubmit}>
                            <Typography variant="h2" color="initial" sx={{ textAlign: "center", mb: 2 }}>修改會員資訊</Typography>
                            <Divider sx={{ m: 1 }} />
                            <FormGroup>
                                <Stack direction={"column"} spacing={2}>
                                    <Stack direction={"row"} spacing={2}>
                                        <TextField
                                            id="MemberFirstName"
                                            name="MemberFirstName"
                                            label="會員名"
                                        />
                                        <TextField
                                            id="MemberLastName"
                                            name="MemberLastName"
                                            label="會員姓"
                                        />
                                    </Stack>
                                    <Stack direction={"row"} spacing={2}>
                                        <TextField
                                            name="Username"
                                            id="UserName"
                                            label="暱稱"
                                        />
                                        <TextField
                                            id="MemberLine"
                                            name="MemberLine"
                                            label="Line ID"
                                        />
                                    </Stack>
                                    <TextField
                                        id="MemberPhone"
                                        name="MemberPhone"
                                        label="電話號碼"
                                    />
                                    <TextField
                                        id="Password"
                                        name="Password"
                                        label="密碼"
                                    />
                                </Stack>
                            </FormGroup>
                            <Button style={{ marginTop: "10px" }} variant="contained" color="primary" type="submit">
                                確定修改
                            </Button>
                        </FormControl>
                    </Box>


                    <Stack sx={{display:"flex" , justifyContent: "center" }} > {/* 右邊區塊 顯示頭像 */}
                        <input id="fileButton" type="file" hidden onChange={handlefile} />
                        <Box >
                            <IconButton onClick={TriggerFile}> {/* 點擊時觸發上面的input File */}
                                <Avatar alt={MemberData.username} src={Imgsrc ? Imgsrc[0] : ""} sx={{ width: "20vh", height: "20vh" }} />
                            </IconButton>
                            <Typography variant="h5" color="initial" sx={{ textAlign: "center" }}>點擊頭像更改頭像</Typography>
                        </Box>
                        <Stack direction={"row"} sx={{ pt:"2rem" }}> {/* 下方登出列 */}
                            <Button sx={{ mr: 2 }} variant="outlined" onClick={() => setModalStatus(true)}>更改密碼</Button>
                            <Button sx={{ mr: 2 }} variant="contained" color="warning" onClick={handleLogout}>登出</Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Box >
            {/* ==Modal== */}

            <Modal
                    open={ModalStatus}
                    onClose={() => setModalStatus(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div>
                        <MemberDetailModal setModalStatus={setModalStatus}/>
                    </div>
                </Modal>

                {/* ==Modal== */}
        </Box>

    );
}

export default MemberDetail;