import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  state() {
    return {
      userId: null,
      supId: null,
      workoutId: null,
      token: null,
      // tokenExpiration: null,
      // supId: 'c8',
      // workoutId: 'c9',
      didAutoLogout: false,
    };
  },
  mutations,
  actions,
  getters,
};
