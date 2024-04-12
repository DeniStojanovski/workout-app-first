<template>
  <section>
    <base-card>
      <h2>Save workout now!</h2>
      <workout-form @save-data="saveData"></workout-form>
    </base-card>
  </section>
</template>

<script>
import WorkoutForm from '../../components/workouts/WorkoutForm.vue';

export default {
  components: {
    WorkoutForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('workouts/registerWorkout', data);
      this.$router.replace('/workouts');
    },
  },
};
</script>
