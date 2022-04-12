export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const LOGIN_SUCCES = 'LOGIN_SUCCES';

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const loginSucces = (token) => ({
  type: LOGIN_SUCCES,
  tokenReceived: token,
});
