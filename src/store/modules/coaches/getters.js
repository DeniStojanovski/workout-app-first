export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    return coaches.some(coach => coach.id === userId);
  },
  shouldCoachUpdate(state) {
    const lastCoachFetch = state.lastCoachFetch;
    if (!lastCoachFetch) {
      return true;
    }
    const currentCoachTimestamp = new Date().getTime();
    return (currentCoachTimestamp - lastCoachFetch) / 1000 > 60;
  },
};
