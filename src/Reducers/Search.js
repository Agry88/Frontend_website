const initialState = {
    houseType: null, // 房屋類型 Ex. null | 公寓大樓 | 透天厝
    roomType: null, // 房間類型 Ex. null | 整層住家 | 獨立套房 | 雅房
    room: {'房間': 0, '衛浴': 0, '廳數': 0}, // 房屋格局 Ex. {'房間': 2, '衛浴': 1, '廳數': 0}
    rent: [3000, 6000], // 租金範圍 [下限值, 上限值]
    areaList: {}, // 搜尋區域 Ex. {'臺北市': ['大安區', '中正區'], '基隆市': '中正區'}
}

const Search = (state = initialState, { type, payload }) => {
    switch (type) {
        case "setAreaList":
            return { ...state, areaList: payload.data }

        case "setHouseType":
            return { ...state, houseType: payload.data }

        case "setRoomType":
            return { ...state, roomType: payload.data }
            
        case "setRoom":
            return { ...state, room: payload.data }
            
        case "setRent":
            return { ...state, rent: payload.data }

        default:
            return state
    }
}

export default Search;