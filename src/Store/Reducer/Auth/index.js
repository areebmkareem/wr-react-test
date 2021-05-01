import * as types from '../../actionTypes';

const initialState = {
  userInfo: {},
  loading: true,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return {
        ...state,
        userInfo: action.data,
        loading: false,
      };
    default:
      return state;
  }
};

export default auth;
