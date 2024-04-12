export default {
  orderSupplement(state, payload) {
    state.supplements.push(payload);
  },
  setSupplements(state, payload) {
    state.supplements = payload;
  },
};
