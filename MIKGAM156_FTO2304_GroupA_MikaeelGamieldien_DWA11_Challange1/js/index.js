// Define the initial state
const initialState = {
    count: 0
  };

// Define the reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, count: state.count + 1 };
    case "SUBTRACT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

// Create a store
const createStore = (reducer) => {
  let state = reducer(undefined, {}); // Initialize the state with the default value

  // Array to hold subscribers
  const subscribers = [];

  // Get the current state
  const getState = () => state;

  // Dispatch an action
  const dispatch = (action) => {
    state = reducer(state, action); // Update the state
    subscribers.forEach((subscriber) => subscriber()); // Notify subscribers
  };

  // Subscribe to changes
  const subscribe = (subscriber) => {
    subscribers.push(subscriber);
    return () => {
      // Unsubscribe function
      const index = subscribers.indexOf(subscriber);
      if (index !== -1) {
        subscribers.splice(index, 1);
      }
    };
  };

  return { getState, dispatch, subscribe };
};

// Create a store using the reducer
const store = createStore(reducer);

// Subscribe to log state changes
const unsubscribe = store.subscribe(() => {
  console.log("State updated:", store.getState());
});

console.warn('strict method')
// Test scenarios
let l=store.dispatch({ type: "ADD" }); // Increment the counter by one
console.log(store.getState());
store.dispatch({ type: "ADD" }); // Increment the counter by one
console.log(store.getState()); 
store.dispatch({ type: "SUBTRACT" }); // Decrement the counter by one
console.log(store.getState());
store.dispatch({ type: "RESET" }); // Reset the counter
console.log(store.getState()); 

// Unsubscribe when you're done
unsubscribe();
