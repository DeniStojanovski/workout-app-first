export default {
  workouts(state) {
    return state.workouts;
  },
  hasWorkouts(state) {
    return state.workouts && state.workouts.length > 0;
  },
  isWorkout(_, getters, _2, rootGetters) {
    const workouts = getters.workouts;
    const workoutId = rootGetters.workoutId;
    return workouts.some(workout => workout.id === workoutId);
  },
  shouldWorkoutUpdate(state) {
    const lastWorkoutFetch = state.lastWorkoutFetch;
    if (!lastWorkoutFetch) {
      return true;
    }
    const currentWorkoutTimestamp = new Date().getTime();
    return (currentWorkoutTimestamp - lastWorkoutFetch) / 1000 > 60;
  },
};
