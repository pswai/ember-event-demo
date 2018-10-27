const DEFAULT_STATE = {
  boxes: [],
};

const ADD_BOX = 'ADD_BOX';
const RESET = 'RESET';

export const addBox = (key, source) => ({
  type: ADD_BOX,
  key,
  source,
});

export const reset = () => ({
  type: RESET,
});

const reducer = (state = DEFAULT_STATE, action) => {
  const { type } = action;

  switch (type) {
    case ADD_BOX:
      return {
        ...state,
        boxes: state.boxes.concat([
          {
            key: action.key,
            source: action.source,
          },
        ]),
      };

    case RESET:
      return DEFAULT_STATE;
  }

  return state;
};

export default reducer;
