<template>
  <base-card>
    <h2>Find Your Coach</h2>
    <span class="filter-option">
      <input type="checkbox" id="strongman" checked @change="setFilter" />
      <label for="strongman">Strongman</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="bodybuilding" checked @change="setFilter" />
      <label for="bodybuilding">Bodybuilding</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="powerlifting" checked @change="setFilter" />
      <label for="powerlifting">Powerlifting</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        strongman: true,
        bodybuilding: true,
        powerlifting: true,
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
