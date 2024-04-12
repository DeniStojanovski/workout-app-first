<template>
    <section>
        <header>
            <h2>RECEIVED REQUESTS</h2>
        </header>
        <base-card>
        <h3>Coach Requests</h3>
        <ul v-if="hasCoachRequests">
            <coach-request v-for="req in receivedCoachRequests"
            :key="req.coachId"
            :email="req.userEmail"
            :message="req.message">
            </coach-request>
        </ul>
        <h3 v-else>You haven't received any Coach requests yet!</h3>
        </base-card>
        <base-card>
        <h3>Workout Requests</h3>
        <ul v-if="hasWorkoutRequests">
            <supplement-request v-for="req in receivedWorkoutRequests"
            :key="req.workoutId"
            :email="req.userEmail"
            :message="req.message">
            </supplement-request> 
        </ul>
        <h3 v-else>You haven't received any Workout requests yet!</h3>
        </base-card>
        <base-card>
        <h3>Supplement Requests</h3>
        <ul v-if="hasSupplementRequests">
            <workout-request v-for="req in receivedSupplementRequests"
            :key="req.supId"
            :email="req.userEmail"
            :message="req.message">
            </workout-request>
        </ul>
        <h3 v-else>You haven't received any Supplement requests yet!</h3>
        </base-card>
    </section>
</template>

<script>
import CoachRequest from '../../components/requests/CoachRequest.vue'
import SupplementRequest from '../../components/requests/SupplementRequest.vue'
import WorkoutRequest from '../../components/requests/WorkoutRequest.vue'

export default {
    components: {
        CoachRequest,
        SupplementRequest,
        WorkoutRequest
    },
    computed: {
        // receivedRequests() {
        //     return this.$store.getters['requests/requests']
        // },
        // hasRequests() {
        //     return this.$store.getters['requests/hasRequests']
        // },
        receivedCoachRequests() {
            return this.$store.getters['requests/coachRequests']
        },
        hasCoachRequests() {
            return this.$store.getters['requests/hasCoachRequests']
        },
        receivedSupplementRequests() {
            return this.$store.getters['requests/supplementRequests']
        },
        hasSupplementRequests() {
            return this.$store.getters['requests/hasSupplementRequests']
        },
        receivedWorkoutRequests() {
            return this.$store.getters['requests/workoutRequests']
        },
        hasWorkoutRequests() {
            return this.$store.getters['requests/hasWorkoutRequests']
        },
    }
}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>