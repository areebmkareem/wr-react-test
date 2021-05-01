import * as types from '../../actionTypes';
import services from '../../../Helper/services';
import {getUsersFromStore} from '../../reduxSelectors';

export const getUsers = () => async (dispatch, getState) => {
  try {
    dispatch({type: types.USER_LIST_REQUEST});
    const URL = 'https://randomuser.me/api/0.8/?results=20';
    const state = getState();
    const users = getUsersFromStore(state);
    const shouldFetchFromService = users.length < 1;
    const response = await services.getData(URL);
    console.log('response: ', response);
    dispatch({type: types.USER_LIST_SUCCESS, data: response.results});
  } catch (error) {
    //
  }
};
