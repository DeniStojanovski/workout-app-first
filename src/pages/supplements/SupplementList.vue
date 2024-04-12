<template>
  <div>
    <section>
      <supplement-filter @change-filter="setFilters"></supplement-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadSupplements">Refresh</base-button>
          <base-button v-if="!isSupplement" link to="/order/supplement"
            >Sell a supplement</base-button
          >
        </div>
        <ul v-if="hasSupplements">
          <supplement-item
            v-for="supplement in filteredSupplements"
            :key="supplement.id"
            :id="supplement.id"
            :name="supplement.name"
            :rate="supplement.rate"
            :areas="supplement.areas"
          >
          </supplement-item>
        </ul>
        <h3 v-else>No supplements found.</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import SupplementItem from '../../components/supplements/SupplementItem.vue';
import SupplementFilter from '../../components/supplements/SupplementFilter.vue';

export default {
  components: {
    SupplementItem,
    SupplementFilter,
  },
  data() {
    return {
      activeFilters: {
        protein: true,
        creatine: true,
        aminoacids: true,
      },
    };
  },
  computed: {
    // filteredSupplements() {
    //   return this.$store.getters['supplements/supplements'];
    // },
    isSupplement() {
      return this.$store.getters['supplements/isSupplement'];
    },
    filteredSupplements() {
      const supplements = this.$store.getters['supplements/supplements'];
      return supplements.filter(supplement => {
        if (
          this.activeFilters.protein &&
          supplement.areas.includes('protein')
        ) {
          return true;
        }
        if (
          this.activeFilters.creatine &&
          supplement.areas.includes('creatine')
        ) {
          return true;
        }
        if (
          this.activeFilters.aminoacids &&
          supplement.areas.includes('aminoacids')
        ) {
          return true;
        }
        return false;
      });
    },
    hasSupplements() {
      return this.$store.getters['supplements/hasSupplements'];
    },
  },
  created() {
    this.loadSupplements();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    loadSupplements() {
      this.$store.dispatch('supplements/loadSupplements')
    }
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
