const authUtil = (state, fetchingUser, isAuthenticated, email) =>
  Object.assign({}, state, {
    fetchingUser,
    isAuthenticated,
    email,
  });

export default authUtil;