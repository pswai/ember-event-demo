const DEFAULT_STATE = {
  boxes: [],
};

const reducer = (state = DEFAULT_STATE, action) => {
  const { type } = action;

  switch (type) {
    case 'ADD_BOX':
      return {
        ...state,
        boxes: state.boxes.concat([
          {
            key: action.key,
            source: action.source,
          },
        ]),
      };
  }

  return state;
};

export default reducer;
