const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload.user
    case 'UNSET_USER':
      return Object.assign({}, state, null)
    default:
      return state
  }
}

export default userReducer;
