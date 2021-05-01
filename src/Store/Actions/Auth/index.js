import * as types from '../../actionTypes';
import services from '../../../Helper/services';

const AUTH_TOKEN = '@authToken';

export const signInWithUsernameAndPassword = (payload) => async (dispatch) => {
  try {
    const response = await services.signInWithUsernameAndPassword(payload);
    localStorage.setItem(AUTH_TOKEN, response.data.username);
    await dispatch(setUserInfo(response.data));
  } catch (error) {
    console.log('error: ', error);
  }
};

export const setUserInfo = (data) => {
  return {
    type: types.SET_CURRENT_USER,
    data,
  };
};

export const getUserInfo = (data) => async (dispatch) => {
  const username = localStorage.getItem(AUTH_TOKEN);
  await dispatch(setUserInfo({username}));
};
