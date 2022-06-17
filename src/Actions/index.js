export const SetMember = (username) => {
    return{
        type:"SetMember",
        payload:{
            username:username
        }
    }
}
export const SetSearch = (type, data) => {
    return {
        type: type,
        payload:{
            data: data
        }
    }
}