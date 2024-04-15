import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';
import supplementsModule from './modules/supplements/index.js';
import workoutsModule from './modules/workouts/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
    supplements: supplementsModule,
    workouts: workoutsModule,
    auth: authModule,
  },
  // state() {
  //   return {
  //     userId: 'c7',
  //     supId: 'c8',
  //     workoutId: 'c9',
  //   };
  // },
  // getters: {
  //   userId(state) {
  //     return state.userId;
  //   },
  //   supId(state) {
  //     return state.supId;
  //   },
  //   workoutId(state) {
  //     return state.workoutId;
  //   },
  // },
});

export default store;
