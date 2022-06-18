export const SetMember = (username) => {
    return{
        type:"SetMemberUserName",
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