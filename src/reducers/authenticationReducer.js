const authenticationReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return  { loggedIn: true }
    case 'LOGGED_OUT':
      return {
        loggedIn: false
      }
    default:
      return state
  }
}

export default authenticationReducer;
