import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  state() {
    return {
      userId: 'c7',
      supId: 'c8',
      workoutId: 'c9',
    };
  },
  mutations,
  actions,
  getters,
};
