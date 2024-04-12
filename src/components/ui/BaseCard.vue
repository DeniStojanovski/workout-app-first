<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 1rem auto;
  max-width: 40rem;
}
</style>
