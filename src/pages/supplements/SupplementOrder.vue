<template>
  <section>
    <base-card>
      <h2>Order supplement now!</h2>
      <supplement-form @save-data="saveData"></supplement-form>
    </base-card>
  </section>
</template>

<script>
import SupplementForm from '../../components/supplements/SupplementForm.vue';

export default {
  components: {
    SupplementForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('supplements/orderSupplement', data);
      this.$router.replace('/supplements');
    },
  },
};
</script>
