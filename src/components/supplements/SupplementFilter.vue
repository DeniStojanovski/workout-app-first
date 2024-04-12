<template>
  <base-card>
    <h2>Find Your Supplement</h2>
    <span class="filter-option">
      <input type="checkbox" id="protein" checked @change="setFilter" />
      <label for="protein">Protein</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="creatine" checked @change="setFilter" />
      <label for="creatine">Creatine</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="aminoacids" checked @change="setFilter" />
      <label for="aminoacids">Aminoacids</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        protein: true,
        creatine: true,
        aminoacids: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
