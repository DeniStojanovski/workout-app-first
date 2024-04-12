export default {
    contactCoach(context, payload) {
        const newRequest = {
            id: new Date().toISOString(),
            coachId: payload.coachId,
            userEmail: payload.email,
            message: payload.message,
        };
        context.commit('addCoachRequest', newRequest)
    },
    orderSupplement(context, payload) {
        const newRequest = {
            id: new Date().toISOString(),
            supId: payload.supId,
            userEmail: payload.email,
            message: payload.message,
        };
        context.commit('addSupplementRequest', newRequest)
    },
    saveWorkout(context, payload) {
        const newRequest = {
            id: new Date().toISOString(),
            workoutId: payload.workoutId,
            userEmail: payload.email,
            message: payload.message,
        };
        context.commit('addWorkoutRequest', newRequest)
    }
};