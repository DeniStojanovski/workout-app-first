export default {
  async contactCoach(context, payload) {
    const newRequest = {
      // id: new Date().toISOString(),
      //   coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://workout-app-first-1d90f-default-rtdb.europe-west1.firebasedatabase.app/requests/coaches/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.id = payload.coachId;

    context.commit('addCoachRequest', newRequest);
  },

  async fetchCoachRequests(context) {
    const coachId = context.rootGetters.userId;
    const response = await fetch(
      `https://workout-app-first-1d90f-default-rtdb.europe-west1.firebasedatabase.app/requests/coaches/${coachId}.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const coachRequests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        coachId: coachId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      coachRequests.push(request);
    }
    context.commit('setCoachRequests', coachRequests);
  },

  async orderSupplement(context, payload) {
    const newRequest = {
      // id: new Date().toISOString(),
      //   supId: payload.supId,
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://workout-app-first-1d90f-default-rtdb.europe-west1.firebasedatabase.app/requests/supplements/${payload.supId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.id = payload.supId;

    context.commit('addSupplementRequest', newRequest);
  },

  async fetchSupplementRequests(context) {
    const supId = context.rootGetters.supplementId;
    const response = await fetch(
      `https://workout-app-first-1d90f-default-rtdb.europe-west1.firebasedatabase.app/requests/supplements/${supId}.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const supplementRequests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        supId: supId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      supplementRequests.push(request);
    }
    context.commit('setSupplementRequests', supplementRequests);
  },

  async saveWorkout(context, payload) {
    const newRequest = {
      // id: new Date().toISOString(),
      //   workoutId: payload.workoutId,
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://workout-app-first-1d90f-default-rtdb.europe-west1.firebasedatabase.app/requests/workouts/${payload.workoutId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.id = payload.workoutId;

    context.commit('addWorkoutRequest', newRequest);
  },

  async fetchWorkoutRequests(context) {
    const workoutId = context.rootGetters.workId;
    const response = await fetch(
      `https://workout-app-first-1d90f-default-rtdb.europe-west1.firebasedatabase.app/requests/workouts/${workoutId}.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const workoutRequests = [];

    for (const key in responseData) {
      const request = {
        id: key,
        workoutId: workoutId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
      };
      workoutRequests.push(request);
    }
    context.commit('setWorkoutRequests', workoutRequests);
  },
};
