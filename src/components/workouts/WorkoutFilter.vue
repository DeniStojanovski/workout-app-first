<template>
  <base-card>
    <h2>Find Your Workout</h2>
    <span class="filter-option">
      <input type="checkbox" id="back" checked @change="setFilter" />
      <label for="back">Back</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="chest" checked @change="setFilter" />
      <label for="chest">Chest</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="shoulder" checked @change="setFilter" />
      <label for="shoulder">Shoulder</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        back: true,
        chest: true,
        shoulder: true,
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
