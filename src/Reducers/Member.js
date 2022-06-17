const initialState = {
    username:"",
    FirstName:"",
    SecondName:"",
    PhoneNumber:"",
}

const Member = (state = initialState, { type, payload }) => {
  switch (type) {

  case "SetMemberUserName":
    return { ...state,username:payload.username }

  default:
    return state
  }
}

export default Member;