export default {
  userId(state) {
    return state.userId;
  },
  supId(state) {
    return state.supId;
  },
  workoutId(state) {
    return state.workoutId;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    return !!state.token;
  },
  didAutoLogout(state) {
    return state.didAutoLogout;
  },
};
