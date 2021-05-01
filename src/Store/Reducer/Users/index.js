import * as types from '../../actionTypes';

const initialState = {
  data: [],
  loading: true,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.USER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    default:
      return state;
  }
};

export default users;
