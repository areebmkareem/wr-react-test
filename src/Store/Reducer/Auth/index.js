import * as types from '../../actionTypes';

const initialState = {
  userInfo: {},
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.data,
      };
    default:
      return state;
  }
};

export default auth;
