import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastWorkoutFetch: null,
      workouts: [
        {
          id: 'c5',
          name: 'Lower Back',
          areas: ['back'],
          description: 'This workout is hard workout',
        },
        {
          id: 'c6',
          name: 'Upper Chest',
          areas: ['chest', 'shoulder'],
          description: 'Calesthetic workout',
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
