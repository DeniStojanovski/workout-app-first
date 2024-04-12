<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
  props: ['type', 'title'],
  computed: {
    text() {
      return this.title.toUpperCase();
    },
  },
};
</script>

<style scoped>
.badge {
  background-color: #ffffff;
  color: #000000;
  border-radius: 10px;
  padding: 0.2rem 1rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.strongman,
.protein {
  background-color: #00647b;
  color: white;
}

.bodybuilding,
.aminoacids {
  background-color: #2f9ab2;
  color: white;
}

.powerlifting,
.creatine {
  background-color: #368197;
  color: white;
}

.back {
  background-color: #1990b4;
  color: white;
}

.chest {
  background-color: #105e8c;
  color: white;
}

.shoulder {
  background-color: #1b7ea2;
  color: white;
}
</style>
