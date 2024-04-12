<template>
<div>
    <section>
        <base-card>
        <h2>{{ name }}</h2>
        <h3>${{ rate }}</h3>
        </base-card>
    </section>
    <section>
        <base-card>
        <header>
            <h2>Interested? Order now!</h2>
            <base-button link :to="orderLink">Order</base-button>
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
            selectedSupplement: null,
        }
    },
    computed: {
        name() {
            return this.selectedSupplement.name;
        },
        areas() {
            return this.selectedSupplement.areas;
        },
        rate() {
            return this.selectedSupplement.rate;
        },
        description() {
            return this.selectedSupplement.description;
        },
        orderLink() {
            return this.$route.path + '/' + this.id + '/order';
        }
    },
    created() {
        this.selectedSupplement = this.$store.getters['supplements/supplements'].find(supplement => supplement.id === this.id);
    }
}

</script>