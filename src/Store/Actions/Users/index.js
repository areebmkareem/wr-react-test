import * as types from '../../actionTypes';
import services from '../../../Helper/services';

const USER_COLLECTION_LOCAL_STORAGE = '@userCollection';

export const getUsers = () => async (dispatch, getState) => {
  try {
    dispatch({type: types.USER_LIST_REQUEST});
    const userAvailableOnLocal = localStorage.getItem(USER_COLLECTION_LOCAL_STORAGE);
    let users = userAvailableOnLocal ? JSON.parse(userAvailableOnLocal) : [];
    const shouldFetchFromService = users.length < 1;
    if (shouldFetchFromService) {
      const URL = 'https://randomuser.me/api/0.8/?results=20';
      const response = await services.getData(URL);
      users = response.results;
      localStorage.setItem(USER_COLLECTION_LOCAL_STORAGE, JSON.stringify(users));
    }
    dispatch({type: types.USER_LIST_SUCCESS, data: users});
  } catch (error) {
    console.log('error: ', error);
    //
  }
};
