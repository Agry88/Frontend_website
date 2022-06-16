const initialState = {
    username:"",
}

const Member = (state = initialState, { type, payload }) => {
  switch (type) {

  case "SetMember":
    return { ...state,username:payload.username }

  default:
    return state
  }
}

export default Member;