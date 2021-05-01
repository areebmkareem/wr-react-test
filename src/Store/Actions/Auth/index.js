import * as types from '../../actionTypes';
import services from '../../../Helper/services';

export const signInWithUsernameAndPassword = (payload) => async (dispatch) => {
  try {
    const response = await services.signInWithUsernameAndPassword(payload);
    await dispatch(setUserInfo(response.data));
  } catch (error) {
    console.log('error: ', error);
  }
};

export const setUserInfo = (data) => {
  return {
    type: types.SET_USER_INFO,
    data,
  };
};
