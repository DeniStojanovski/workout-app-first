import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachList from './pages/coaches/CoachList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import ContactCoach from './pages/requests/ContactCoach.vue';
import OrderSupplement from './pages/requests/OrderSupplement.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import SaveWorkout from './pages/requests/SaveWorkout.vue';
import SupplementDetail from './pages/supplements/SupplementDetail.vue';
import SupplementList from './pages/supplements/SupplementList.vue';
import SupplementOrder from './pages/supplements/SupplementOrder.vue';
import WorkoutDetail from './pages/workouts/WorkoutDetail.vue';
import WorkoutRegistration from './pages/workouts/WorkoutRegistration.vue';
import WorkoutList from './pages/workouts/WorkoutList.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/workouts', component: WorkoutList },
    {
      path: '/workouts/:id',
      component: WorkoutDetail,
      props: true,
      children: [{ path: 'save', component: SaveWorkout }],
    },
    { path: '/register/workout', component: WorkoutRegistration },
    { path: '/coaches', component: CoachList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    { path: '/register/coach', component: CoachRegistration },
    { path: '/supplements', component: SupplementList },
    {
      path: '/supplements/:id',
      component: SupplementDetail,
      props: true,
      children: [{ path: 'order', component: OrderSupplement }],
    },
    { path: '/order/supplement', component: SupplementOrder },
    {
      path: '/requests',
      component: RequestsReceived,
      children: [
        { path: 'workouts', component: SaveWorkout },
        { path: 'coaches', component: ContactCoach },
        { path: 'supplements', component: OrderSupplement },
      ],
    },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
