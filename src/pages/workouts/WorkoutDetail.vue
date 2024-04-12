<template>
<div>
    <section>
        <base-card>
        <h2>{{ name }}</h2>
        </base-card>
    </section>
    <section>
        <base-card>
        <header>
            <h2>Interested? Save workout now!</h2>
            <base-button link :to="saveLink">Save</base-button>
        </header>
        <router-view></router-view>
        </base-card>
    </section>
    <section>
        <base-card>
            <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
            <p>{{ description }}</p>
        </base-card>
    </section>
</div>
</template>

<script>

export default {
    props: ['id'],
    data() {
        return {
            selectedWorkout: null,
        }
    },
    computed: {
        name() {
            return this.selectedWorkout.name;
        },
        areas() {
            return this.selectedWorkout.areas;
        },
        description() {
            return this.selectedWorkout.description;
        },
        saveLink() {
            return this.$route.path + '/' + this.id + '/order';
        }
    },
    created() {
        this.selectedWorkout = this.$store.getters['workouts/workouts'].find(workout => workout.id === this.id);
    }
}

</script>