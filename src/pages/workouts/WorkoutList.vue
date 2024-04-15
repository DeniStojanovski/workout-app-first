<template>
  <div>
    <base-dialog :show="!!error" title="An error occured!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <workout-filter @change-filter="setFilters"></workout-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadWorkouts(true)"
            >Refresh</base-button
          >
          <base-button
            v-if="!isWorkout && !isLoading"
            link
            to="/register/workout"
            >Add a workout</base-button
          >
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasWorkouts">
          <workout-item
            v-for="workout in filteredWorkouts"
            :key="workout.id"
            :id="workout.id"
            :name="workout.name"
            :areas="workout.areas"
          ></workout-item>
        </ul>
        <h3 v-else>No workouts found.</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import WorkoutItem from '../../components/workouts/WorkoutItem.vue';
import WorkoutFilter from '../../components/workouts/WorkoutFilter.vue';

export default {
  components: {
    WorkoutItem,
    WorkoutFilter,
  },
  data() {
    return {
      isLoading: true,
      error: null,
      activeFilters: {
        back: true,
        chest: true,
        shoulder: true,
      },
    };
  },
  computed: {
    // filteredWorkouts() {
    //   return this.$store.getters['workouts/workouts'];
    // },
    isWorkout() {
      return this.$store.getters['workouts/isWorkout'];
    },
    filteredWorkouts() {
      const workouts = this.$store.getters['workouts/workouts'];
      return workouts.filter(workout => {
        if (this.activeFilters.back && workout.areas.includes('back')) {
          return true;
        }
        if (this.activeFilters.chest && workout.areas.includes('chest')) {
          return true;
        }
        if (this.activeFilters.shoulder && workout.areas.includes('shoulder')) {
          return true;
        }
        return false;
      });
    },
    hasWorkouts() {
      return !this.isLoading && this.$store.getters['workouts/hasWorkouts'];
    },
  },
  created() {
    this.loadWorkouts();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadWorkouts(refresh = false) {
      this.isLoading = true;
      try {
        await this.$store.dispatch('workouts/loadWorkouts', {
          forceRefresh: refresh,
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
