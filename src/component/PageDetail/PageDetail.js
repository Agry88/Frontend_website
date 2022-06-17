import React from 'react';
import { Box, Typography, Link} from '@mui/material';
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import './PageDetail.css';
import '../../img/male-gender.png';
import '../../img/female.png';
import Carousels from "./image"; // 幻燈片
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cardput from "./Cardput"; // 側邊欄
import Outline from "./Outline";//標籤
import CardDetail from "./CardDetail";//屋主說
import HouseDetail from "./houseDetail";//房屋詳情

import EquipmentAndServices from "./EquipmentAndServices";//list


// 後端傳入資料
const title = "近慈濟大學大/中/小方便獨立套房" //標題
const tags = [ //標籤
    {content: '屋主自租', type: '1', icon: null},
    {content: '新上架', type: '1', icon: null},
    {content: '拎包入住', type: '1', icon: null},
    {content: '隨時可遷入', type: '0', icon: null},
    {content: '押一付一', type: '0', icon: null},
    {content: '可短租', type: '0', icon: null}
]

const roomType = '獨立套房' //房間類型
const size = 5 //坪數
const floor = 5 //樓層
const totalFloor = 5 //總共樓層
const houseType = '透天厝' //房屋類型
const rentMoney = 6000 //租金
const securityDeposit = 6000 //押金
const manageMoney = 6000 //管理費
const direction = '坐南朝北'//方向
const islegal = '見使照'
const area = '見使照'
const registration = '已辦理'
const conditions = {
    'a': ['男女皆可', 'student', 'officeWorker', 'year'],
    'b': ['可養寵', '可開火'],
    'c': ['床', '書桌', '冰箱', '冷氣', '熱水器', '電視'],
    'd': ['管理室', '回收室', '網路', '第四台', '電梯', '車位'],
    'e': ['游泳池', '視聽室'],
}

const landlordIcon = 'https://icon.url'; //房東icon url
const landlordStatus = 0; //0為房東, 1為代理人, 2為仲介
const landlordNickName = '季先生'; //發文者稱呼
const phoneNumber = '0900111222'; //發文者設定的電話號碼
const Line = 'qwe910108';
const lineAddress = `http://line.me/ti/p/~${Line}`; //發文者設定的LINE連結
const say = `body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
    quasi quidem quibusdam.
    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
    quasi quidem quibusdam.
    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
    quasi quidem quibusdam.`;



const address = "南投縣草屯鎮富寮里富春路116巷57號";
// 菜公村民生路一段426號

const icons = {
    '限女性': 'https://cdn-icons-png.flaticon.com/512/103/103277.png',
    '限男性': 'https://cdn-icons-png.flaticon.com/512/103/103278.png',
    '男女皆可': 'https://cdn-icons-png.flaticon.com/512/98/98120.png',
    '床': 'https://cdn-icons-png.flaticon.com/512/952/952776.png',
    '雙人床': 'https://cdn-icons-png.flaticon.com/512/952/952772.png',
    '沙發': 'https://cdn-icons-png.flaticon.com/512/638/638135.png',
    '衣櫃': 'https://cdn-icons-png.flaticon.com/512/952/952799.png',
    '電梯': 'https://cdn-icons-png.flaticon.com/512/952/952821.png',
    '管理室': 'https://cdn-icons-png.flaticon.com/512/952/952802.png',
    '電視': 'https://cdn-icons-png.flaticon.com/512/952/952798.png',
    '洗衣機': 'https://cdn-icons-png.flaticon.com/512/952/952786.png',
    '冷氣': 'https://cdn-icons-png.flaticon.com/512/952/952777.png',
    '游泳池': 'https://cdn-icons-png.flaticon.com/512/1027/1027251.png',
    '視聽室': 'https://cdn-icons-png.flaticon.com/512/708/708874.png',
    '書桌': 'https://cdn-icons-png.flaticon.com/512/686/686668.png',
    '車位': 'https://cdn-icons-png.flaticon.com/512/103/103946.png',
    '回收室': 'https://cdn-icons-png.flaticon.com/512/2371/2371735.png',
    '網路': 'https://cdn-icons-png.flaticon.com/512/93/93158.png'
}

function PageDetail(props) {
    const outlineValue = {
        title: title, 
        tags: tags, 
        roomType: roomType, 
        size: size, 
        floor: floor, 
        totalFloor: totalFloor,
        houseType: houseType, 
        rentMoney: rentMoney,  
        securityDeposit: securityDeposit
    }
    const equipmentAndServicesValue = {
        conditions: conditions,
        icons: icons,
    }
    const landlordValue = {
        landlordStatus: landlordStatus,
        landlordNickName: landlordNickName,
        phoneNumber: phoneNumber,
        lineAddress: lineAddress
    }

    const HouseDetailval ={
        rentMoney: rentMoney,  
        manageMoney : manageMoney,
        direction : direction,
        islegal : islegal,
        area : area,
        registration : registration


    }

    const addressValue = address;
    const addressMap = `https://maps.google.com/maps?q='${addressValue}'&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    const searchMap = `https://www.google.com/maps/search/${addressValue}`
    return (
        <Box sx={{
            backgroundColor: '#ffffff',
            mx: '50px',
            
            position: 'relative',
        }}>
            {/* 麵包屑 */}
            <Box sx={{
                width: '100%',
                backgroundColor: '#ffffff',
                minHeight: '30px'
            }}>
                <BreadCrumbs />
            </Box>
            {/* 幻燈片 */}
            <Box sx={{
                width: '100%',
                backgroundColor: '#0fafaf',
                minHeight: '300px'
            }}>
                <Carousels />
            </Box>
            {/* 內容*/}
            <Box sx={{
                display: 'flex',
                height:"1500px",
                justifyContent: "center", 
                flexGrow: 3,
       
            }}>
                <Box sx={{
                  
                    flexDirection: 'column',
                    
                    backgroundColor: '#ffffff',
                    p: 1
                }}>
                    {/* 租屋大標 */}
                    <Box fullWidth sx={{
                        backgroundColor: '#ffffff',flexGrow: 1,
                 
                    }}> 
                        <Outline outlineValue={outlineValue} />
                    </Box>
                    <hr />
                    {/* 屋況詳情 */}
                    <Box fullWidth sx={{
                        backgroundColor: '#ffffff',flexGrow: 1,
                    
                    }}>
                        <HouseDetail  HouseDetailval={HouseDetailval}/>
                    </Box>
                    <hr />
                    {/* 設備與服務 */}
                    <Box fullWidth sx={{
                        backgroundColor: '#fff',
                    }}>
                        <EquipmentAndServices equipmentAndServicesValue={equipmentAndServicesValue} />
                    </Box>
                    <hr />
                
                    {/* 屋況介紹 */}
                    <Box fullWidth sx={{
                       ml:'3px'
                    }}>
                        <CardDetail say={say}/>
                    </Box>
                </Box>
                {/* Sidebar */}
                <Box sx={{

                    width: '50%',
                    backgroundColor: '#ffffff',
                    p: 1,
                    borderLeft:1,
                }}>                  
                   
                    <Box fullWidth sx={{
                        backgroundColor: '#ffffff',
                        position:"sticky",
                        top:100,
                    }}>
                         <Cardput landlord={landlordValue} />
                        <Typography variant="h5" sx={{fontWeight: 'bold', pb: 1}}>位置與週邊:</Typography>
                        <Box sx={{ p: 1 }}>
                            <Link color="inherit" href={searchMap} target="_blank">地址:{addressValue}</Link>
                            <Box sx={{ pt: 1 }}>
                                <iframe style={{ minWidth:"600px", minHeight:"320px"}} src={addressMap} id="gmap_canvas" ></iframe>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default PageDetail;

