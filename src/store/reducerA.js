const initState = {
  a: 1,
};

const reducer = (store = initState, actions) => {
  switch (actions.type) {
    case "SUBMIT_A":
      return {
        ...store,
        a: store.a + parseInt(actions.b),
      };

    default:
      break;
  }

  return store;
};

export default reducer;
