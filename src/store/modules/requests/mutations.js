export default {
    addCoachRequest(state, payload) {
        state.coachRequests.push(payload);
    },
    addWorkoutRequest(state, payload) {
        state.workoutRequests.push(payload);
    },    
    addSupplementRequest(state, payload) {
        state.supplementRequests.push(payload);
    }
};