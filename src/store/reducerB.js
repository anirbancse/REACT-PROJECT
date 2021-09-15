const initState = {
  b: 1,
};

const reducer = (store = initState, actions) => {
  switch (actions.type) {
    case "SUBMIT_B":
      return {
        ...store,
        b: store.b + parseInt(actions.a),
      };

    default:
      break;
  }

  return store;
};

export default reducer;
