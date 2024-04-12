export default {
  addCoachRequest(state, payload) {
    state.coachRequests.push(payload);
  },
  addWorkoutRequest(state, payload) {
    state.workoutRequests.push(payload);
  },
  addSupplementRequest(state, payload) {
    state.supplementRequests.push(payload);
  },
  setCoachRequests(state, payload) {
    state.coachRequests = payload;
  },
  setSupplementRequests(state, payload) {
    state.supplementRequests = payload;
  },
  setWorkoutRequests(state, payload) {
    state.workoutRequests = payload;
  },
};
