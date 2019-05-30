const logiReducerDefaultState = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null
}

export default (state = logiReducerDefaultState, action) => {
    switch (action.type) {
      case 'SET_LOGIN_PENDING':
      return { ...state, isLoginPending: action.isLoginPending }
  
      case 'SET_LOGIN_SUCCESS':
        console.log('SET_LOGIN_SUCCESS')
        console.log(action.isLoginSuccess)
        return { ...state, isLoginSuccess: action.isLoginSuccess };
  
      case 'SET_LOGIN_ERROR':
        return { ...state, loginError: action.loginError }
  
      default:
        return state;
    }
  }