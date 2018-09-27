export const getReducers = ({reducers: handlers, initialState }) => {
  const reducers = Object.keys(handlers).map(type => (state, action) => {
    if (action.type === type) {
      return handlers[type](state, action);
    }
    return state;
  });


  function reduceReducers(initReducers) {
    return (previous, current) =>
      initReducers.reduce((p, r) => r(p, current), previous);
  }
  return (state = initialState, action) => {
    const rootReducer = reduceReducers(reducers);
    return rootReducer(state, action);
  };
};