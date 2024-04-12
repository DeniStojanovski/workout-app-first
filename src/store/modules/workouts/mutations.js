export default {
  registerWorkout(state, payload) {
    state.workouts.push(payload);
  },
  setWorkouts(state, payload) {
    state.workouts = payload;
  },
};
