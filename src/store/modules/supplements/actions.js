export default {
  async orderSupplement(context, data) {
    const supId = context.rootGetters.supId;
    const supplementData = {
      // id: context.rootGetters.supId,
      name: data.name,
      description: data.desc,
      rate: data.rate,
      areas: data.areas,
    };

    const response = await fetch(
      `https://workout-app-first-1d90f-default-rtdb.europe-west1.firebasedatabase.app/supplements/${supId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(supplementData),
      }
    );

    // const responseData = await response.json();

    if (!response.ok) {
      // error...
    }

    context.commit('orderSupplement', {
      ...supplementData,
      id: supId,
    });
  },

  async loadSupplements(context) {
    const response = await fetch(
      `https://workout-app-first-1d90f-default-rtdb.europe-west1.firebasedatabase.app/supplements.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const supplements = [];

    for (const key in responseData) {
      const supplement = {
        id: key,
        name: responseData[key].name,
        description: responseData[key].description,
        rate: responseData[key].rate,
        areas: responseData[key].areas,
      };
      supplements.push(supplement);
    }

    context.commit('setSupplements', supplements);
  },
};
