import { createStore } from "redux";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return { ...state, counter: state.counter + 1 };
  } else if (action.type === "decrement") {
    return { ...state, counter: state.counter - 1 };
  } else if (action.type === "increase") {
    return {
      ...state,
      counter: state.counter + action.payload,
    };
  } else if (action.type === "toggleCounter") {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  } else {
    return state;
  }
};

const store = createStore(counterReducer);

export default store;
