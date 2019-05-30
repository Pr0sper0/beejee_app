function setLoginPending(isLoginPending) {
  return {
    type: 'SET_LOGIN_PENDING',
    isLoginPending
  };
}

function setLoginSuccess(isLoginSuccess) {
  return {
    type: 'SET_LOGIN_SUCCESS',
    isLoginSuccess
  };
}

function setLoginError(loginError) {
  return {
    type: 'SET_LOGIN_ERROR',
    loginError
  }
}

export const login = (username, password) => {
  console.log('action login')
    return async dispatch => {
      dispatch(setLoginPending(true));
      dispatch(setLoginSuccess(false));
      dispatch(setLoginError(null));
  
      callLoginApi(username, password, error => {
        dispatch(setLoginPending(false));
        if (!error) {
          dispatch(setLoginSuccess(true));
        } else {
          dispatch(setLoginError(error));
        }
      });
    }
  }

export const logout = () => {
    console.log('action logout')
    return async dispatch => {
      dispatch(setLoginPending(true));
      dispatch(setLoginSuccess(false));
      dispatch(setLoginError(null));
    }
  }

  function callLoginApi(username, password, result) {
      if (username === 'admin' && password === '123') {
        return result(null);
      } else {
        return result(new Error('Invalid username or password'));
      }
    
  }

