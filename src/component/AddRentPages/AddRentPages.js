import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Paper from '@mui/material/Paper'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton'
import Chip from '@mui/material/Chip'
import FormLabel from '@mui/material/FormLabel'
import RadioGroup from '@mui/material/RadioGroup'
import Radio from '@mui/material/Radio'
import Button from '@mui/material/Button'













function AddRentPages() {
    //存放資料
    const [FloorStatus, setFloorStatus] = useState(false); //出租樓層
    const [AddressCity, setAddressCity] = useState(""); //地址縣市
    const [Address, setAddress] = useState("") //地址
    const [HouseType, setHouseType] = useState(""); //房屋類型
    const [RoomType, setRoomType] = useState(""); //房間類型
    const [SquareFeet, setSquareFeet] = useState(); //坪數
    const [RentMoney, setRentMoney] = useState(); //租金金額
    const [Deposit, setDeposit] = useState("面議"); //押金
    const [Rooms, setRooms] = useState([
        { id: 1, RoomName: "總房間", RoomNumber: 0 },
        { id: 2, RoomName: "房間", RoomNumber: 0 },
        { id: 3, RoomName: "衛浴", RoomNumber: 0 },
        { id: 4, RoomName: "大廳", RoomNumber: 0 },
    ]); //房間數量
    const [ShortestRentTime, setShortestRentTime] = useState(""); //最短租期
    const [SexRequirment, setSexRequirment] = useState("皆可"); //性別要求 租住條件
    const [AbletoFire, setAbletoFire] = useState(false); //可否開伙 房屋規定
    const [AblePet, setAblePet] = useState(false); //可否養寵物 房屋規定
    const [AbletoGetInDate, setAbletoGetInDate] = useState(""); //可遷入日
    const [Describe, setDescribe] = useState("") //敘述
    const [Title, setTitle] = useState("朝向") //房屋標題
    const [HouseForward, setHouseForward] = useState("") //房屋朝向
    const [Imgs, setImgs] = useState([]); //使用者傳入照片
    const [ImgURL, setImgURL] = useState([]); //顯示照片
    const [FunitureArray, setFunitureArray] = useState([ //提供個人設備
        { id: 1, Funiture: "床", Status: false },
        { id: 2, Funiture: "書桌", Status: false },
        { id: 3, Funiture: "冰箱", Status: false },
        { id: 4, Funiture: "冷氣", Status: false },
        { id: 5, Funiture: "熱水器", Status: false },
        { id: 6, Funiture: "電視", Status: false },
    ]);
    const [ServiceArray, setServiceArray] = useState([ //提供服務
        { id: 1, Service: "管理室", Status: false },
        { id: 2, Service: "回收室", Status: false },
        { id: 3, Service: "網路", Status: false },
        { id: 4, Service: "第四台", Status: false },
        { id: 5, Service: "電梯", Status: false },
        { id: 6, Service: "車位", Status: false },
    ]);
    const [PublicFacilityArray, setPublicFacilityArray] = useState([ //提供公共設施
        { id: 1, PublicFacility: "游泳池", Status: false },
        { id: 2, PublicFacility: "視聽室", Status: false },
    ]);
    const [IdentifyRequirment, setIdentifyRequirment] = useState([ //身分要求 租住條件
        { id: 1, Identify: "學生", Status: false },
        { id: 2, Identify: "上班族", Status: false },
        { id: 3, Identify: "家庭", Status: false },
    ]);
    const [RentMoneyHaveArray, setRentMoneyHaveArray] = useState([ //租金包含內容
        { id: 1, RentMoneyItem: "管理費", Status: false },
        { id: 2, RentMoneyItem: "清潔費", Status: false },
        { id: 3, RentMoneyItem: "第四台", Status: false },
        { id: 4, RentMoneyItem: "網路", Status: false },
        { id: 5, RentMoneyItem: "水費", Status: false },
        { id: 6, RentMoneyItem: "電費", Status: false },
        { id: 7, RentMoneyItem: "瓦斯費", Status: false },
    ]);

    const CountryArray = ["臺北市", "新北市", "桃園市", "臺中市", "臺南市", "高雄市", "新竹縣", "苗栗縣", "彰化縣", "南投縣", "雲林縣", "嘉義縣", "屏東縣", "宜蘭縣", "花蓮縣", "臺東縣", "澎湖縣", "金門縣", "連江縣"];

    const handleRoomType = e => { //偵測是否為整層住家以確定是否顯示出租樓層
        setRoomType(e.target.value);
        if (e.target.value != "整層住家") {
            setFloorStatus(true);
        } else {
            setFloorStatus(false);
        }
    }

    const handleSetRoom = (inputRoomNumber, RoomName) => {
        setRooms(Rooms.map((Room) => ({
            ...Room,
            RoomNumber: Room.RoomName == RoomName ? inputRoomNumber : Room.RoomNumber
        })))
    }


    const handleChangeArray = (ItemID, setArrayfunction, setArrayName) => { //用以設置CheckBox陣列
        setArrayfunction(setArrayName.map((Item) => ({
            ...Item,
            Status: Item.id == ItemID ? !Item.Status : Item.Status
        })))
    }

    const handlefile = e => { //顯示上傳照片
        setImgs([...e.target.files]);
    }

    useEffect(() => {
        if (Imgs.length < 1) return;
        const newImageUrls = [];
        Imgs.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
        setImgURL(newImageUrls);
    }, [Imgs])


    // 設定日期預設值 取出現在的日期
    const today = new Date();
    const date = today.setDate(today.getDate());
    const defaultDateValue = new Date(date).toISOString().split('T')[0] // yyyy-mm-dd 

    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", height: "auto" }}>
            <Typography variant="h4" color="initial">請選擇欲出租的房屋類型</Typography>
            <Stack sx={{ border: 1, borderColor: "grey.200", width: "60%", p: 2 }} spacing={2}>

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 房屋類型 */}
                    <Typography variant="h6">房屋類型:</Typography>
                    <FormControl>
                        <InputLabel>房屋類型:</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={HouseType}
                            defaultValue={""}
                            sx={{ width: 150 }}
                            onChange={e => setHouseType(e.target.value)}

                        >
                            <MenuItem value={""} disabled>房屋類型:</MenuItem>
                            <MenuItem value={"公寓大樓"}>公寓大樓</MenuItem>
                            <MenuItem value={"透天厝"}>透天厝</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 房間類型 */}
                    <Typography variant="h6">房間類型:</Typography>
                    <FormControl>
                        <InputLabel>房間類型:</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={RoomType}
                            defaultValue={""}
                            sx={{ width: 150 }}
                            onChange={handleRoomType}

                        >
                            <MenuItem value={""} disabled>房間類型:</MenuItem>
                            <MenuItem value={"整層住家"}>整層住家</MenuItem>
                            <MenuItem value={"獨立套房"}>獨立套房</MenuItem>
                            <MenuItem value={"分租套房"}>分租套房</MenuItem>
                            <MenuItem value={"雅房"}>雅房</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 地址 */}
                    <Typography variant="h6">出租地址:</Typography>
                    <FormControl>
                        <InputLabel>縣市</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={AddressCity}
                            defaultValue=""
                            sx={{ width: 100 }}
                            onChange={e => setAddressCity(e.target.value)}
                        >
                            <MenuItem value={""} disabled>縣市:</MenuItem>
                            {CountryArray.map((Country, index) => {
                                return <MenuItem key={index} value={Country}>{Country}</MenuItem>
                            })}
                        </Select>
                    </FormControl>
                    <TextField
                        id="Address"
                        label="地址名稱"
                        sx={{ pl: 1 }}
                        value={Address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </Stack>

                {FloorStatus &&
                    <Stack direction="row" sx={{ alignItems: "center" }}> {/* 樓層 */}
                        <Typography variant="h6">樓層:</Typography>
                        <TextField
                            id="Floor"
                            label="樓層"
                            sx={{ pl: 1 }}
                        />
                        樓之
                        <TextField
                            id="RoomID"
                            label="編號"
                            sx={{ pl: 1, pr: 3 }}
                        />
                        總樓層:
                        <TextField
                            id="AllFloorNumber"
                            label="總樓層數量"
                            sx={{ pl: 1 }}
                        />
                    </Stack>}

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 房屋坪數 */}
                    <Typography variant="h6">房屋坪數:</Typography>
                    <TextField
                        id="SquareFeet"
                        label="坪數"
                        sx={{ pl: 1 }}
                        value={SquareFeet}
                        onChange={e => setSquareFeet(e.target.value)}
                    />坪
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 房數 */}
                    <Typography variant="h6">房間數量:</Typography>
                    <TextField
                        id="SquareFeet"
                        label="房間數量"
                        sx={{ pl: 1, width: 100 }}
                        value={Rooms[1].Number}
                        onChange={e => handleSetRoom(e.target.value, "房間")}
                    />
                    <Typography variant="h6" sx={{ pl: 1 }}>衛浴數量:</Typography>
                    <TextField
                        id="SquareFeet"
                        label="衛浴數量"
                        sx={{ pl: 1, width: 100 }}
                        value={Rooms[2].Number}
                        onChange={e => handleSetRoom(e.target.value, "衛浴")}
                    />
                    <Typography variant="h6" sx={{ pl: 1 }}>大廳數量:</Typography>
                    <TextField
                        id="SquareFeet"
                        label="大廳數量"
                        sx={{ pl: 1, width: 100 }}
                        value={Rooms[2].Number}
                        onChange={e => handleSetRoom(e.target.value, "大廳")}
                    />
                    <Button variant="contained" color="primary" sx={{ml:5}}>
                        新增更多房間
                    </Button>
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 租金 */}
                    <Typography variant="h6">租金:</Typography>
                    <TextField
                        id="RentMoney"
                        value={RentMoney}
                        onChange={e => setRentMoney(e.target.value)}
                        sx={{ backgroundColor: "white" }}
                    />
                    <Typography variant="inherit" color="initial" sx={{ pl: 3 }}>押金:</Typography>
                    <FormControl>
                        <InputLabel>押金</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            defaultValue={"面議"}
                            value={Deposit}
                            sx={{ width: 150 }}
                            onChange={e => setDeposit(e.target.value)}
                        >
                            <MenuItem value={"面議"}>面議</MenuItem>
                            <MenuItem value={"一個月租金"} >一個月租金</MenuItem>
                            <MenuItem value={"兩個月租金"} >兩個月租金</MenuItem>

                        </Select>
                    </FormControl>
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 房屋朝向 */}
                    <Typography variant="h6">房屋朝向:</Typography>
                    <FormControl>
                        <InputLabel>房屋朝向</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            defaultValue={"朝向"}
                            value={HouseForward}
                            sx={{ width: 150 }}
                            onChange={e => setHouseForward(e.target.value)}
                        >
                            <MenuItem value={"朝向"} disabled>朝向</MenuItem>
                            <MenuItem value={"坐北朝南"} >坐北朝南</MenuItem>
                            <MenuItem value={"坐南朝北"} >坐南朝北</MenuItem>
                            <MenuItem value={"坐西朝東"} >坐西朝東</MenuItem>
                            <MenuItem value={"坐東朝西"} >坐東朝西</MenuItem>

                        </Select>
                    </FormControl>
                </Stack>


                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 租金包含 */}
                    <Typography variant="h6">租金包含:</Typography>
                    {RentMoneyHaveArray.map((Item) => {
                        return (
                            <FormControlLabel
                                key={Item.id}
                                label={Item.RentMoneyItem}
                                control={
                                    <Checkbox
                                        value=""
                                        checked={Item.Status}
                                        onChange={() => handleChangeArray(Item.id, setRentMoneyHaveArray, RentMoneyHaveArray)}
                                        color="primary"
                                    />
                                }
                            />
                        )
                    })}

                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 最短租期 */}
                    <Typography variant="h6">最短租期:</Typography>
                    <TextField
                        id="ShortestRentTime"
                        label="最短租期包含"
                        value={ShortestRentTime}
                        onChange={e => setShortestRentTime(e.target.value)}
                        sx={{width:"12%"}}
                    />
                    年
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 身分要求 */}
                    <Typography variant="h6">身分要求:</Typography>
                    {IdentifyRequirment.map((Item) => {
                        return (
                            <FormControlLabel
                                key={Item.id}
                                label={Item.Identify}
                                control={
                                    <Checkbox
                                        value=""
                                        checked={Item.Status}
                                        onChange={() => handleChangeArray(Item.id, setIdentifyRequirment, IdentifyRequirment)}
                                        color="primary"
                                    />
                                }
                            />
                        )
                    })}
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 性別要求 */}
                    <Typography variant="h6">性別要求:</Typography>
                    <FormControl>
                        <RadioGroup row name="row-radio-buttons-group" value={SexRequirment} onChange={e => setSexRequirment(e.target.value)}>
                            <FormControlLabel value="限女性" control={<Radio />} label="限女性" />
                            <FormControlLabel value="限男性" control={<Radio />} label="限男性" />
                            <FormControlLabel value="皆可" control={<Radio />} label="皆可" />
                        </RadioGroup>
                    </FormControl>
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 可否開伙 */}
                    <Typography variant="h6">開伙:</Typography>
                    <FormControl>
                        <RadioGroup row name="row-radio-buttons-group" value={AbletoFire} onChange={e => setAbletoFire(e.target.value)}>
                            <FormControlLabel value={true} control={<Radio />} label="可" />
                            <FormControlLabel value={false} control={<Radio />} label="不可" />
                        </RadioGroup>
                    </FormControl>
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 可否養寵物 */}
                    <Typography variant="h6">養寵物:</Typography>
                    <FormControl>
                        <RadioGroup row name="row-radio-buttons-group" value={AblePet} onChange={e => setAblePet(e.target.value)}>
                            <FormControlLabel value={true} control={<Radio />} label="可" />
                            <FormControlLabel value={false} control={<Radio />} label="不可" />
                        </RadioGroup>
                    </FormControl>
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 可遷入日 */}
                    <Typography variant="h6">可遷入日:</Typography>
                    <input type="date" id="AbletoGetInDate" name="AbletoGetInDate" style={{ height: 30 }} value={AbletoGetInDate} onChange={e => setAbletoGetInDate(e.target.value)} />
                    <Button variant="contained" color="primary" sx={{ ml: 3 }} onClick={() => setAbletoGetInDate(defaultDateValue)}>
                        可隨時遷入
                    </Button>
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 提供私人設備 */}
                    <Typography variant="h6">提供私人設備:</Typography>
                    {FunitureArray.map((Item) => {
                        return (
                            <FormControlLabel
                                key={Item.id}
                                label={Item.Funiture}
                                control={
                                    <Checkbox
                                        value=""
                                        checked={Item.Status}
                                        onChange={() => handleChangeArray(Item.id, setFunitureArray, FunitureArray)}
                                        color="primary"
                                    />
                                }
                            />
                        )
                    })}
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 提供服務 */}
                    <Typography variant="h6">提供服務:</Typography>
                    {ServiceArray.map((Item) => {
                        return (
                            <FormControlLabel
                                key={Item.id}
                                label={Item.Service}
                                control={
                                    <Checkbox
                                        value=""
                                        checked={Item.Status}
                                        onChange={() => handleChangeArray(Item.id, setServiceArray, ServiceArray)}
                                        color="primary"
                                    />
                                }
                            />
                        )
                    })}
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 提供公共設施 */}
                    <Typography variant="h6">提供公共設施:</Typography>
                    {PublicFacilityArray.map((Item) => {
                        return (
                            <FormControlLabel
                                key={Item.id}
                                label={Item.PublicFacility}
                                control={
                                    <Checkbox
                                        value=""
                                        checked={Item.Status}
                                        onChange={() => handleChangeArray(Item.id, setPublicFacilityArray, PublicFacilityArray)}
                                        color="primary"
                                    />
                                }
                            />
                        )
                    })}
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 房屋標題 */}
                    <Typography variant="h6" sx={{ pr: 5 }}>房屋標題:</Typography>
                    <TextField
                        required
                        id="House-title-required"
                        label="房屋標題"
                        value={Title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 房屋敘述 */}
                    <Typography variant="h6" sx={{ pr: 5 }}>房屋敘述:</Typography>
                    <TextField
                        id="outlined-multiline-static"
                        label="房屋敘述"
                        multiline
                        rows={4}
                        value={Describe}
                        onChange={e => setDescribe(e.target.value)}
                        sx={{ width: "70%" }}
                    />
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 上傳照片 */}
                    <Typography variant="h6">上傳照片:</Typography>
                    <Button
                        variant="contained"
                        component="label"
                    >
                        上傳照片
                        <input
                            type="file"
                            hidden
                            onChange={handlefile}
                            multiple={true}
                        />
                    </Button>
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 照片 */}
                    <Typography variant="h6">以上傳照片:</Typography>
                    <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }}>
                        {ImgURL ? ImgURL.map((url) => {
                            return <img src={url} width="475" height="450" alt="" />
                        }) : null}
                    </Stack>
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center", justifyContent: "flex-end" }}> {/* 照片 */}
                    <Button variant="contained" color="primary" size="large">
                        新增送出
                    </Button>
                    <Button variant="contained" sx={{ backgroundColor: "#ab003c" }} size="large">
                        取消
                    </Button>
                </Stack>

            </Stack>
        </Box>
    );
}

export default AddRentPages;