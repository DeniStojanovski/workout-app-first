import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      // userIsCoach: false,
      lastCoachFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'Denka',
          lastName: 'Strongman',
          areas: ['strongman', 'powerlifting'],
          description:
            'I am looking for an iron that I cannot lift, still unlucky',
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Bob',
          lastName: 'Bomb',
          areas: ['bodybuilding'],
          description: 'Leg day is every day',
          hourlyRate: 30,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
