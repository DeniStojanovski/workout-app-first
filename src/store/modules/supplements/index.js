import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastSupplementFetch: null,
      supplements: [
        {
          id: 'c3',
          name: 'Protein Isolate',
          areas: ['protein', 'aminoacids'],
          description: 'This supplement is primary for a workout',
          rate: 30,
        },
        {
          id: 'c4',
          name: 'Creatine Monohydrate',
          areas: ['creatine'],
          description: 'This is the best supplement ever',
          rate: 10,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
