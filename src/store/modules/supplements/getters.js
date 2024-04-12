export default {
  supplements(state) {
    return state.supplements;
  },
  hasSupplements(state) {
    return state.supplements && state.supplements.length > 0;
  },
  isSupplement(_, getters, _2, rootGetters) {
    const supplements = getters.supplements;
    const supId = rootGetters.supId;
    return supplements.some(supplement => supplement.id === supId);
  },
};
