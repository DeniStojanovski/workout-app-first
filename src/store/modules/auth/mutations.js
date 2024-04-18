export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    // state.supId = payload.supId;
    // state.workoutId = payload.workoutId;
    // state.tokenExpiration = payload.tokenExpiration;
    state.didAutoLogout = false;
  },
  setWorkout(state, payload) {
    state.token = payload.token;
    state.workoutId = payload.workoutId;
    // state.supId = payload.supId;
    // state.workoutId = payload.workoutId;
    // state.tokenExpiration = payload.tokenExpiration;
    state.didAutoLogout = false;
  },
  setSupplement(state, payload) {
    state.token = payload.token;
    state.supId = payload.supId;
    // state.supId = payload.supId;
    // state.workoutId = payload.workoutId;
    // state.tokenExpiration = payload.tokenExpiration;
    state.didAutoLogout = false;
  },
  setAutoLogout(state) {
    state.didAutoLogout = true;
  },
};
