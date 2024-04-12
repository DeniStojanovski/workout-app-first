export default {
  async registerWorkout(context, data) {
    const workoutId = context.rootGetters.workoutId;
    const workoutData = {
      // id: context.rootGetters.workoutId,
      name: data.name,
      description: data.desc,
      areas: data.areas,
    };

    const response = await fetch(
      `https://workout-app-first-1d90f-default-rtdb.europe-west1.firebasedatabase.app/workouts/${workoutId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(workoutData),
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error...
    }

    context.commit('registerWorkout', {
      ...workoutData,
      id: workoutId,
    });
  },

  async loadWorkouts(context) {
    const response = await fetch(
      `https://workout-app-first-1d90f-default-rtdb.europe-west1.firebasedatabase.app/workouts.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const workouts = [];

    for (const key in responseData) {
      const workout = {
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        areas: responseData[key].areas,
      };
      workouts.push(workout);
    }

    context.commit('setWorkouts', workouts);
  },
};
