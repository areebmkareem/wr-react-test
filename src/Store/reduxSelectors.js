export const getUsersFromStore = (state) => state.users.data;
export const getUsersLoadingStateFromStore = (state) => state.users.loading;

export const getCurrentUser = (state) => state.authentication.userInfo;
export const currentUserLoading = (state) => state.authentication.loading;
