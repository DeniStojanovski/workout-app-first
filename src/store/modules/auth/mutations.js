export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.supId = payload.supId;
    state.workoutId = payload.workoutId;
    // state.tokenExpiration = payload.tokenExpiration;
    state.didAutoLogout = false;
  },
  setAutoLogout(state) {
    state.didAutoLogout = true;
  },
};
