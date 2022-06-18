const initialState = {
    priceRange: [3000, 6000], // 租金範圍 [下限值, 上限值]
    areaList: {}, // 搜尋區域 Ex. {'臺北市': ['大安區', '中正區'], '基隆市': '中正區'}
    address: {
        city: '',
        township: [],
    }, 
    houseInfo: {
        houseType: null, // 房屋類型 Ex. null | 公寓大樓 | 透天厝
        roomType: null, // 房間類型 Ex. null | 整層住家 | 獨立套房 | 雅房
        room: {'房間': 0, '衛浴': 0, '廳數': 0}, // 房屋格局 Ex. {'房間': 2, '衛浴': 1, '廳數': 0}
    }, 
    equipmentAndServices: {
        condition: {
            role: null,
            gender: null
        },
        houseRule: {
            pets: null,
            fire: null
        },
        equipment: []
    }
}

const Search = (state = initialState, { type, payload }) => {
    switch (type) {
        case "setCity":
            var { address } = state;
            var newAddress = {...address, city: payload.data};
            return { ...state, address: newAddress }

        case "setTownship":
            var { address } = state;
            var newAddress = {...address, township: payload.data};
            return { ...state, address: newAddress }

        case "setAreaList":
            return { ...state, areaList: payload.data }

        case "setHouseType":
            var { houseInfo } = state;
            var newHouseInfo = {...houseInfo, houseType: payload.data};
            return { ...state, houseInfo: newHouseInfo }

        case "setRoomType":
            var { houseInfo } = state;
            var newHouseInfo = {...houseInfo, roomType: payload.data};
            return { ...state, houseInfo: newHouseInfo }
            
        case "setRoom":
            var { houseInfo } = state;
            var newHouseInfo = {...houseInfo, room: payload.data};
            return { ...state, houseInfo: newHouseInfo }
            
        case "setPriceRange":
            return { ...state, priceRange: payload.data }

        case "setGender":
            var { equipmentAndServices } = state;
            var { condition } = equipmentAndServices;

            var newCondition = {...condition, gender: payload.data};
            var newEquipmentAndServices = {...equipmentAndServices, condition: newCondition};
            return { ...state, equipmentAndServices: newEquipmentAndServices }

        case "setRoles":
            var { equipmentAndServices } = state;
            var { condition } = equipmentAndServices;

            var newCondition = {...condition, role: payload.data};
            var newEquipmentAndServices = {...equipmentAndServices, condition: newCondition};
            return { ...state, equipmentAndServices: newEquipmentAndServices }

        default:
            return state
    }
}

export default Search;