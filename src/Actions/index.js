export const SetMember = (username) => {
    return{
        type:"SetMemberUserName",
        payload:{
            username:username
        }
    }
}