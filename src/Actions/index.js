export const SetMember = (username) => {
    return{
        type:"SetMember",
        payload:{
            username:username
        }
    }
}