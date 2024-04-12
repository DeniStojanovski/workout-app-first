<template>
  <div>
    <base-dialog :show="!!error" title="An error occured!" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <supplement-filter @change-filter="setFilters"></supplement-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadSupplements"
            >Refresh</base-button
          >
          <base-button
            v-if="!isSupplement && !isLoading"
            link
            to="/order/supplement"
            >Sell a supplement</base-button
          >
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasSupplements">
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
      isLoading: false,
      error: null,
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
      return (
        !this.isLoading && this.$store.getters['supplements/hasSupplements']
      );
    },
  },
  created() {
    this.loadSupplements();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadSupplements() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('supplements/loadSupplements');
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
