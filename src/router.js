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
import UserAuth from './pages/auth/UserAuth.vue';
import NotFound from './pages/NotFound.vue';
import store from './store/index.js';

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
    {
      path: '/register/workout',
      component: WorkoutRegistration,
      meta: { requiresAuth: true },
    },
    { path: '/coaches', component: CoachList },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      props: true,
      children: [{ path: 'contact', component: ContactCoach }],
    },
    {
      path: '/register/coach',
      component: CoachRegistration,
      meta: { requiresAuth: true },
    },
    { path: '/supplements', component: SupplementList },
    {
      path: '/supplements/:id',
      component: SupplementDetail,
      props: true,
      children: [{ path: 'order', component: OrderSupplement }],
    },
    {
      path: '/order/supplement',
      component: SupplementOrder,
      meta: { requiresAuth: true },
    },
    {
      path: '/requests',
      component: RequestsReceived,
      meta: { requiresAuth: true },
      children: [
        { path: 'workouts', component: SaveWorkout },
        { path: 'coaches', component: ContactCoach },
        { path: 'supplements', component: OrderSupplement },
      ],
    },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/home');
  } else {
    next();
  }
});

export default router;
