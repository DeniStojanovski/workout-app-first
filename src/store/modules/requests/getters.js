export default {
    // requests(state) {
    //     return state.requests;
    // },
    // hasRequests(state) {
    //     return state.requests && state.requests.length > 0;
    // },
    coachRequests(state, _, _2, rootGetters) {
        const coachId = rootGetters.userId;
        return state.coachRequests.filter(req => req.coachId === coachId);
    },
    hasCoachRequests(_, getters) {
        return getters.coachRequests && getters.coachRequests.length > 0;
    },
    supplementRequests(state, _, _2, rootGetters) {
        const supId = rootGetters.supplementId;
        return state.supplementRequests.filter(req => req.supId === supId);
    },
    hasSupplementRequests(_, getters) {
        return getters.supplementRequests && getters.supplementRequests.length > 0;
    },
    workoutRequests(state, _, _2, rootGetters) {
        const workoutId = rootGetters.workId;
        return state.workoutRequests.filter(req => req.workoutId === workoutId);
    },
    hasWorkoutRequests(_, getters) {
        return getters.workoutRequests && getters.workoutRequests.length > 0;
    },
};