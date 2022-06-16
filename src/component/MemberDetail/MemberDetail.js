import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

function MemberDetail() {
    return (
        <Box sx={{p:5}}>
            <Stack direction={"row"}> {/* 切成左右邊 左邊顯示可更改內容 右邊顯示頭像 */}
                <Stack sx={{width:"100rem"}}> {/* 左邊區塊 顯示可更改內容 */}
                    Put content here
                    <div>another content</div> 
                </Stack>
                <Stack> {/* 左邊區塊 顯示頭像 */}
                    Put UserIcon Here
                </Stack>
            </Stack>
        </Box>
    );
}

export default MemberDetail;