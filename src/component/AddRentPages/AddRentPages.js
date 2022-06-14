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
    const [Clicked, setClicked] = useState(false);
    const [FloorStatus, setFloorStatus] = useState(false); //出租樓層
    const [AddressCity, setAddressCity] = useState(""); //地址縣市
    const [Address, setAddress] = useState("") //地址
    const [HouseType, setHouseType] = useState(""); //房屋類型
    const [Balcony, setBalcony] = useState(false); //是否有陽台
    const [SquareFeet, setSquareFeet] = useState(); //坪數
    const [FacilityArray, setFacilityArray] = useState([]); //提供設施
    const [FunitureArray, setFunitureArray] = useState([]); //提供家具
    const [Elevator, setElevator] = useState(false); //是否有電梯
    const [RentMoney, setRentMoney] = useState(); //租金金額
    const [Deposit, setDeposit] = useState("面議"); //押金
    const [ShortestRentTime, setShortestRentTime] = useState(""); //最短租期
    const [CarSlot, setCarSlot] = useState(false); //是否有車位
    const [SexRequirment, setSexRequirment] = useState("皆可"); //性別要求
    const [AbletoFire, setAbletoFire] = useState(false); //可否開伙
    const [AblePet, setAblePet] = useState(false); //可否養寵物
    const [AbletoGetInDate, setAbletoGetInDate] = useState(""); //可遷入日
    const [BlockMeterial, setBlockMeterial] = useState("請選擇:"); //隔間材料
    const [Describe, setDescribe] = useState("") //敘述
    const [Imgs, setImgs] = useState([]); //使用者傳入照片
    const [ImgURL, setImgURL] = useState([]); //顯示照片
    const [QualityArray, setQualityArray] = useState([ //生活機能
        { id: 1, Quality: "近便利商店", Status: false },
        { id: 2, Quality: "近傳統市場", Status: false },
        { id: 3, Quality: "近百貨公司", Status: false },
        { id: 4, Quality: "近公園綠地", Status: false },
        { id: 5, Quality: "近學校", Status: false },
        { id: 6, Quality: "近醫療機構", Status: false },
        { id: 7, Quality: "近夜市", Status: false },
    ]);
    const [IdentifyRequirment, setIdentifyRequirment] = useState([ //身分要求
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


    //功能需要
    const [Facility, setFacility] = useState(""); //輸入框欄位
    const [Funiture, setFuniture] = useState(""); //輸入框欄位

    const CountryArray = ["臺北市", "新北市", "桃園市", "臺中市", "臺南市", "高雄市", "新竹縣", "苗栗縣", "彰化縣", "南投縣", "雲林縣", "嘉義縣", "屏東縣", "宜蘭縣", "花蓮縣", "臺東縣", "澎湖縣", "金門縣", "連江縣"];

    const handleHouseType = e => { //偵測是否為整層住家以確定是否顯示出租樓層
        setHouseType(e.target.value);
        if (e.target.value != "整層住家") {
            setFloorStatus(true);
        } else {
            setFloorStatus(false);
        }
    }

    const handleChipDelete = DeleteId => { //設施刪除
        setFacilityArray(FacilityArray => FacilityArray.filter((Ficility) => Ficility.id != DeleteId))
    }

    const handleSetFacilityArray = () => { //設施新增
        let lastArrayID;
        if (FacilityArray.length != 0) {
            lastArrayID = FacilityArray[FacilityArray.length - 1].id;
        } else {
            lastArrayID = 1;
        }
        setFacilityArray([
            ...FacilityArray,
            {
                id: lastArrayID + 1,
                FacilityName: Facility,
            }
        ])
    }

    const handleFunitureChipDelete = DeleteId => { //家具刪除
        setFunitureArray(FunitureArray => FunitureArray.filter((Funiture) => Funiture.id != DeleteId))
    }

    const handleSetFunitureArray = () => { //家具新增
        let lastArrayID;
        if (FunitureArray.length != 0) {
            lastArrayID = FunitureArray[FunitureArray.length - 1].id;
        } else {
            lastArrayID = 1;
        }
        setFunitureArray([
            ...FunitureArray,
            {
                id: lastArrayID + 1,
                FacilityName: Funiture,
            }
        ])
    }

    const handleChangeRentMoneyHave = ItemID => { //租金包含更改
        setRentMoneyHaveArray(RentMoneyHaveArray.map((Item) => ({
            ...Item,
            Status: Item.id == ItemID ? !Item.Status : Item.Status
        })))
    }

    const handleChangeIdentifyRequirment = ItemID => { //身分要求更改
        setIdentifyRequirment(IdentifyRequirment.map((Item) => ({
            ...Item,
            Status: Item.id == ItemID ? !Item.Status : Item.Status
        })))
    }

    const handleChangeQualityArray = ItemID => { //生活機能更改
        setQualityArray(QualityArray.map((Item) => ({
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
            <Stack sx={{ border: 1, borderColor: "grey.500", width: "80%", pt: 2 }} spacing={2}>

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 類型 */}
                    <Typography variant="h6">房屋類型:</Typography>
                    <FormControl>
                        <InputLabel>房屋類型:</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={HouseType}
                            defaultValue={""}
                            sx={{ width: 100 }}
                            onChange={handleHouseType}

                        >
                            <MenuItem value={""} disabled>房屋類型:</MenuItem>
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

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 格局 */}
                    <Typography variant="h6">格局:</Typography>
                    <FormControlLabel
                        label="有陽台"
                        control={
                            <Checkbox
                                checked={Balcony}
                                onChange={() => setBalcony(!Balcony)}
                                color="primary"
                            />
                        }
                    />
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 提供設備 */}
                    <Typography variant="h6">提供設備:</Typography>
                    <Paper sx={{ display: "flex", alignItems: "center", backgroundColor: "primary.main" }}>
                        <TextField
                            id="Floor"
                            value={Facility}
                            onChange={e => setFacility(e.target.value)}
                            sx={{ backgroundColor: "white" }}
                        />
                        <IconButton onClick={handleSetFacilityArray}>
                            <ArrowForwardIcon />
                        </IconButton>
                    </Paper>
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }} spacing={1.5}> {/* 提供設備陣列 */}
                    <Typography variant="h6">以提供設施:</Typography>
                    {FacilityArray.lenth != 0
                        ?
                        FacilityArray.map((Facility) => {
                            return <Chip
                                key={Facility.id}
                                label={Facility.FacilityName}
                                onDelete={() => handleChipDelete(Facility.id)}
                            />
                        })
                        :
                        null
                    }
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 提供家具 */}
                    <Typography variant="h6">提供家具:</Typography>
                    <Paper sx={{ display: "flex", alignItems: "center", backgroundColor: "primary.main" }}>
                        <TextField
                            id="Floor"
                            value={Funiture}
                            onChange={e => setFuniture(e.target.value)}
                            sx={{ backgroundColor: "white" }}
                        />
                        <IconButton onClick={handleSetFunitureArray}>
                            <ArrowForwardIcon />
                        </IconButton>
                    </Paper>
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }} spacing={1.5}> {/* 提供家具設備 */}
                    <Typography variant="h6">以提供家具:</Typography>
                    {FunitureArray.lenth != 0
                        ?
                        FunitureArray.map((Funiture) => {
                            return <Chip
                                key={Funiture.id}
                                label={Funiture.FacilityName}
                                onDelete={() => handleFunitureChipDelete(Funiture.id)}
                            />
                        })
                        :
                        null
                    }
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 電梯 */}
                    <Typography variant="h6">電梯:</Typography>
                    <FormControl>
                        <InputLabel>電梯</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Elevator}
                            sx={{ width: 100 }}
                            onChange={() => setElevator(!Elevator)}
                        >
                            <MenuItem value={false} >無</MenuItem>
                            <MenuItem value={true} >有</MenuItem>

                        </Select>
                    </FormControl>
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
                            <MenuItem value={"面議"} >面議</MenuItem>
                            <MenuItem value={"一個月租金"} >一個月租金</MenuItem>
                            <MenuItem value={"兩個月租金"} >兩個月租金</MenuItem>

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
                                        onChange={() => handleChangeRentMoneyHave(Item.id)}
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
                    />
                    年
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 車位 */}
                    <Typography variant="h6">車位:</Typography>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={CarSlot}
                                onChange={() => setCarSlot(!CarSlot)}
                                color="primary"
                            />
                        }
                    />
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
                                        onChange={() => handleChangeIdentifyRequirment(Item.id)}
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
                    <input type="date" id="AbletoGetInDate" name="AbletoGetInDate" defaultValue={defaultDateValue} onChange={e => setAbletoGetInDate(e.target.value)} />
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 隔間材料 */}
                    <Typography variant="h6">隔間材料:</Typography>
                    <FormControl>
                        <InputLabel>隔間材料</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            defaultValue={"隔間材料"}
                            value={BlockMeterial}
                            sx={{ width: 150 }}
                            onChange={e => setBlockMeterial(e.target.value)}
                        >
                            <MenuItem value={"請選擇:"} disabled>請選擇:</MenuItem>
                            <MenuItem value={"水泥磚牆"} >水泥磚牆</MenuItem>
                            <MenuItem value={"木板"} >木板</MenuItem>
                            <MenuItem value={"輕材料"} >輕材料</MenuItem>

                        </Select>
                    </FormControl>
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" }}> {/* 生活機能 */}
                    <Typography variant="h6">生活機能:</Typography>
                    {QualityArray.map((Item) => {
                        return (
                            <FormControlLabel
                                key={Item.id}
                                label={Item.Quality}
                                control={
                                    <Checkbox
                                        value=""
                                        checked={Item.Status}
                                        onChange={() => handleChangeQualityArray(Item.id)}
                                        color="primary"
                                    />
                                }
                            />
                        )
                    })}
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
                    <Typography variant="h6">照片:</Typography>
                    <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap" }}>
                        {ImgURL ? ImgURL.map((url) => {
                            return <img src={url} width="475" height="450" alt="" />
                        }) : null}
                    </Stack>
                </Stack>

                <Stack direction="row" sx={{ alignItems: "center" , justifyContent:"flex-end" }}> {/* 照片 */}
                    <Button variant="contained" color="primary" size="large">
                        新增送出
                    </Button>
                    <Button variant="contained" sx={{backgroundColor:"#ab003c"}} size="large">
                        取消
                    </Button>
                </Stack>

            </Stack>
        </Box>
    );
}

export default AddRentPages;