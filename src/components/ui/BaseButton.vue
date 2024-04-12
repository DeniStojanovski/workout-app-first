<template>
  <button v-if="!link" :class="mode">
    <slot></slot>
  </button>
  <router-link v-else :to="to" :class="mode">
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
  },
};
</script>

<style scoped>
button,
a {
  text-decoration: none;
  padding: 0.2rem 1rem;
  font: inherit;
  background-color: #276e88;
  border: 1px solid #091415;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

a:hover,
a:active,
button:hover,
button:active {
  background-color: #70a8c2;
  border-color: #1b2d2f;
}

.flat {
  background-color: transparent;
  color: #1d8598;
  border: none;
}

.outline {
  background-color: transparent;
  border-color: #003c41;
  color: #003441;
}

.flat:hover,
.flat:active,
.outline:hover,
.outline:active {
  background-color: #aee3fd;
}
</style>
