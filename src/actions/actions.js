
  export const removeFeature = item => {
    // dispatch an action here to remove an item
    return { type: "REMOVE_FEATURE"};
  };

  export const buyItem = item => {
    // dipsatch an action here to add an item
    // return { type: "ADD_FEATURE"};
  };

  export const addFeatures = (payload) => {
      return { type: 'ADD_FEATURE', payload: payload }
  }