
import { Box, Grid, Stack, Paper, Typography, Link } from '@mui/material';
import BreadCrumbs from "../BreadCrumbs/BreadCrumbs";
import './PageDetail.css';
import '../../img/male-gender.png';
import '../../img/female.png';
import Carousels from "./image"; // 幻燈片
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cardput from "./Cardput"; // 側邊欄

import {AiOutlineDollarCircle,AiOutlineCheck} from "react-icons/ai";

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
const lineAddress = 'https://www.line.com/xxxx/xxx'; //發文者設定的LINE連結
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

const notFoundIcon = "https://cdn-icons-png.flaticon.com/512/2748/2748614.png"

const genderIcon = "https://cdn-icons-png.flaticon.com/512/2324/2324529.png"
const femaleIcon = "https://cdn-icons.flaticon.com/png/512/2404/premium/2404482.png?token=exp=1654281081~hmac=36025a89fc6972b4787d2a5f7c5270e7"
const maleIcon = "https://cdn-icons.flaticon.com/png/512/2404/premium/2404544.png?token=exp=1654283047~hmac=e71d15d345eada548116d8a3cec15522"
const LGBTIcon = "https://cdn-icons-png.flaticon.com/512/2620/2620884.png"
const studentIcon = "https://cdn-icons-png.flaticon.com/512/1157/1157034.png"
const officeWorkerIcon = "https://cdn-icons.flaticon.com/png/512/4483/premium/4483845.png?token=exp=1654282938~hmac=d2aeb5e6bad3e45e29bfca495af41cfc"
const familyIcon = "https://cdn-icons-png.flaticon.com/512/646/646344.png"
const petIcon = "https://cdn-icons.flaticon.com/png/512/3737/premium/3737726.png?token=exp=1654283205~hmac=8642f2388ad561c75c2050781095b7c9"
const bedIcon = "https://cdn-icons.flaticon.com/png/512/1047/premium/1047004.png?token=exp=1654283368~hmac=1c01c9fe09ccf081a9b3048c979589b7"
const deskIcon = "https://cdn-icons-png.flaticon.com/512/3233/3233563.png"
const chairIcon = "https://cdn-icons.flaticon.com/png/512/1889/premium/1889037.png?token=exp=1654283440~hmac=1e939f00660efdc010fe5f740cbfca7c"
const airConditionerIcon = "https://cdn-icons-png.flaticon.com/512/1530/1530481.png"
const waterHeaterIcon = "https://cdn-icons.flaticon.com/png/512/2482/premium/2482562.png?token=exp=1654283595~hmac=a7e29a093a56fc6b2ffa1dfdf2b2fedc"
const gasStoveIcon = "https://cdn-icons.flaticon.com/png/512/2010/premium/2010740.png?token=exp=1654283802~hmac=4bf482c8103d68299e12c54b684b6c66"
const inductionCookerIcon = "https://cdn-icons-png.flaticon.com/512/7284/7284820.png"
const washingMachineIcon = "https://cdn-icons.flaticon.com/png/512/3124/premium/3124957.png?token=exp=1654284267~hmac=f49875da0d3577d198869c728b904c62"
const refrigeratorIcon = "https://cdn-icons.flaticon.com/png/512/4249/premium/4249396.png?token=exp=1654284535~hmac=d5efd5a129c148b021cc56b32769dab1"
const yearIcon = "https://cdn-icons-png.flaticon.com/512/7123/7123715.png";
const monthIcon = 'https://cdn-icons-png.flaticon.com/512/7123/7123306.png'


// const conditionsIcon = {
//     '限男性': <Condition text={'限男性'} icon={icons['限男性']}/>,
//     '限女性': <Condition text={'限女性'} icon={icons['限女性']}/>,
//     '男女皆可': <Condition text={'男女皆可'} icon={icons['男女皆可']}/>,
//     male: <Condition text={'限男性'} icon={maleIcon}/>,
//     female: <Condition text={'限女性'} icon={femaleIcon}/>,
//     gender: <Condition text={'男女皆可'} icon={genderIcon}/>,
//     rainbow: <Condition text={'彩虹友善'} icon={LGBTIcon}/>,
//     student: <Condition text={'學生'} icon={studentIcon}/>,
//     officeWorker: <Condition text={'上班族'} icon={officeWorkerIcon}/>,
//     family: <Condition text={'家庭'} icon={familyIcon}/>,
//     year: <Condition text={'最短租期'} icon={yearIcon}/>,
//     month: <Condition text={'最短租期'} icon={monthIcon}/>,
//     '床': <Condition text={'床'} icon={icons['床']}/>,
//     '雙人床': <Condition text={'雙人床'} icon={icons['雙人床']}/>,
//     '書桌': <Condition text={'書桌'} icon={icons['書桌']}/>,
//     '洗衣機': <Condition text={'洗衣機'} icon={icons['洗衣機']}/>,
//     '電視': <Condition text={'電視'} icon={icons['電視']}/>,
//     '游泳池': <Condition text={'游泳池'} icon={icons['游泳池']}/>,
//     '視聽室': <Condition text={'視聽室'} icon={icons['視聽室']}/>,
//     '車位': <Condition text={'車位'} icon={icons['車位']}/>
// }

function Outline(props) {
    const { title, tags, roomType, size, floor, houseType, rentMoney, securityDeposit } = props.outlineValue;
    
    return (
        <Stack spacing={1}>
        <Box>
            <Typography variant="h5" sx={{fontWeight: 'bold'}}>{title}</Typography>
        </Box>
        <Box>
            {tags.map((tag) => <PostTag content={tag.content} type={tag.type} icon={tag.icon}></PostTag>)}
        </Box>
        <Box>
            <Typography variant="h6">
                {roomType}
                <Typography sx={{ display: 'inline-block', backgroundColor: '#afafaf', width: '1px', height: '12px', mx: '6px'}} />
                {size}坪 
                <Typography sx={{ display: 'inline-block', backgroundColor: '#afafaf', width: '1px', height: '12px', mx: '6px'}} />
                {floor}F/{totalFloor}F
                <Typography sx={{ display: 'inline-block', backgroundColor: '#afafaf', width: '1px', height: '12px', mx: '6px'}} />
                {houseType}
            </Typography>
        </Box>
        <Box>
            <Typography sx={{ display: 'inline-block', fontSize: '30px', fontWeight: 'bold', color: '#FF0000'}}>{rentMoney}</Typography>
            <Typography sx={{ display: 'inline-block', fontSize: '16px', color: '#FF0000', mr: '16px'}}>元/月</Typography>
            
            <Typography sx={{ display: 'inline-block'}}>押金{securityDeposit}元</Typography>
            
        </Box>
    </Stack>
    )
}

function EquipmentAndServices(props) {
    const {conditions } = props.equipmentAndServicesValue;
    return (
        <Stack spacing={1}>
            <Typography variant="h5" sx={{fontWeight: 'bold', pb: 1}}>設備與服務</Typography>
       
                <Box sx={{ pb: 1 }}>
                    <Typography sx={{fontWeight: 'bold', pb: '2px', pl: '16px'}}>租住條件</Typography>
                    <Grid container spacing={1} columns={{ sm: 6, md: 8 }} sx={{p: '4px', pl: '16px'}}>
                        {conditions.a.map((condition) => <Condition text={condition} icon={icons[condition]}/> )}
                    </Grid>
                </Box>
                <Box sx={{ pb: 1 }}>
                    <Typography sx={{fontWeight: 'bold', pb: '2px', pl: '16px'}}>房屋規定</Typography>
                    <Grid container spacing={1} columns={{ sm: 6, md: 8 }} sx={{p: '4px', pl: '16px'}}>
                        {conditions.b.map((condition) => <Condition text={condition} icon={icons[condition]}/> )}
                    </Grid>
                </Box>
                <Box sx={{ pb: 1 }}>
                    <Typography sx={{fontWeight: 'bold', pb: '2px', pl: '16px'}}>提供設備</Typography>
                    <Grid container spacing={1} columns={{ sm: 6, md: 8 }} sx={{p: '4px', pl: '16px'}}>
                        {conditions.c.map((condition) => <Condition text={condition} icon={icons[condition]}/> )}
                    </Grid>
                </Box>
                <Box sx={{ pb: 1 }}>
                    <Typography sx={{fontWeight: 'bold', pb: '2px', pl: '16px'}}>提供服務</Typography>
                    <Grid container spacing={1} columns={{ sm: 6, md: 8 }} sx={{p: '4px', pl: '16px'}}>
                        {conditions.d.map((condition) => <Condition text={condition} icon={icons[condition]}/> )}
                    </Grid>
                </Box>
                <Box sx={{ pb: 1 }}>
                    <Typography sx={{fontWeight: 'bold', pb: '2px', pl: '16px'}}>公共設施</Typography>
                    <Grid container spacing={1} columns={{ sm: 6, md: 8 }} sx={{p: '4px', pl: '16px'}}>
                        {conditions.e.map((condition) => <Condition text={condition} icon={icons[condition]}/> )}
                    </Grid>
                </Box>
            
        </Stack>
    )
}

function PageDetail(props) {
    const outlineValue = {
        title: title, 
        tags: tags, 
        roomType: roomType, 
        size: size, 
        floor: floor, 
        houseType: houseType, 
        rentMoney: rentMoney, 
        securityDeposit: securityDeposit
    }
    const equipmentAndServicesValue = {
        conditions: conditions
    }
    const landlordValue = {
        landlordStatus: landlordStatus,
        landlordNickName: landlordNickName,
        phoneNumber: phoneNumber,
        lineAddress: lineAddress
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
            <Box sx={{
                display: 'flex',
                height:"1200px"
            }}>
                <Box sx={{
                    flexGrow: 1,
                    backgroundColor: '#ffffff',
                    p: 1
                }}>
                    {/* 租屋大標 */}
                    <Box fullWidth sx={{
                        backgroundColor: '#ffffff',
                 
                    }}> 
                        <Outline outlineValue={outlineValue} />
                    </Box>
                    <hr />
                    {/* 屋況詳情 */}
                    <Box fullWidth sx={{
                        backgroundColor: '#ffffff',
                    
                    }}>
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
                                                面議
                                            </Grid>
                                        </Grid>     
                                        <Grid container spacing={0} sx={{my:1}}>
                                            <Grid item >
                                                管理費
                                            </Grid>
                                            <Grid item sx={{ml:1}}>
                                                無
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
                                            坐南朝北
                                        </Grid>
                                    </Grid>         
                                    <Grid container spacing={0} sx={{my:1}}>
                                        <Grid item >
                                            法定用途
                                        </Grid>
                                        <Grid item sx={{ml:1}}>
                                            見使照
                                        </Grid>
                                    </Grid>     
                                    <Grid container spacing={0} sx={{my:1}}>
                                        <Grid item>
                                            建物面積
                                        </Grid>
                                        <Grid item sx={{ml:1}}>
                                            見使照
                                        </Grid>
                                    </Grid>    
                                    <Grid container spacing={0} sx={{my:1}}>
                                        <Grid item>
                                            產權登記
                                        </Grid>
                                        <Grid item sx={{ml:1}}>
                                            已辦理
                                        </Grid>
                                    </Grid>                                             
                                </Grid>
                        </Grid>
                    </Box>
                    <hr />
                    {/* 設備與服務 */}
                    {/* <Box fullWidth sx={{
                        backgroundColor: '#fff',
                        minHeight: '200px'
                    }}>
                        <EquipmentAndServices equipmentAndServicesValue={equipmentAndServicesValue} />
                    </Box>
                    <hr /> */}
                
                    {/* 屋況介紹 */}
                    <Box fullWidth sx={{
                        backgroundColor: '#e8aaef',
                
                    }}>
                         <Cardput landlord={landlordValue} />
                    </Box>
                </Box>
                {/* Sidebar */}
                <Box sx={{
                    position: 'sticky',
                    width: '50%',
                    backgroundColor: '#ffffff',
                    p: 1,
                    borderLeft:1
                }}>                  
                    <EquipmentAndServices equipmentAndServicesValue={equipmentAndServicesValue} />
                    {/* <Cardput landlord={landlordValue} /> */}
                    {/* 位置與週邊 */}
                    <hr/>
                    <Box fullWidth sx={{
                        backgroundColor: '#ffffff',
                   
                    }}>
                        <Typography variant="h5" sx={{fontWeight: 'bold', pb: 1}}>位置與週邊</Typography>
                        <Box sx={{ p: 1 }}>
                            <Link color="inherit" href={searchMap} target="_blank">{addressValue}</Link>
                            <Box sx={{ pt: 1 }}>
                                <iframe width="550" height="400" id="gmap_canvas" src={addressMap} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default PageDetail;

function Condition(props) {
    const { icon } = props;
    const { text } = props;
    const textStyle = text.length >= 5 ? {fontSize: '10px'} : {fontSize: '12px'};
    const { type } = props;
    return (
        <Grid item sm={1} md={1}>
            <Paper sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', width: '54px', height: '51px', pt: '4px'}}>
                {(icon && !icon.includes("premium")) ?
                    <Box component={'img'} sx={{width: '24px', height: '24px'}} 
                    src={icon}
                    /> : 
                    <Box component={'img'} sx={{width: '24px', height: '24px'}} 
                    src={notFoundIcon}
                    />
                }
                <Typography sx={{...textStyle}}>{text}</Typography>
            </Paper>
        </Grid>
    )
}

function PostTag(props) {
    const content = props.content;
    const type = props.type;
    const icon = props.icon;
    var style;
    switch (props.type) {
        case '1':
            style = {backgroundColor: '#fff7e6', color: '#9b5b1a'};
            
            break;

        case '2':
            style = {backgroundColor: '#fff7e6', color: '#9b5b1a'};
            break;

        default:
            style = null;
            break;
    }
    return (
        <Typography sx={{
            display: 'inline',
            backgroundColor: '#f2f6fa',
            color: '#4e71a5',
            px: '8px',
            py: '4px',
            m: '4px',
            borderRadius: 1,
            ...style
        }}>
            {icon}{content}
        </Typography>
    )
}