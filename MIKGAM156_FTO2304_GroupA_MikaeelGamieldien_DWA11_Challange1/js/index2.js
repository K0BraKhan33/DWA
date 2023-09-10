let count = 0;

// Define increment, decrement, and reset functions
function increment() { count++; }
function decrement() { count--; }
function reset() { count = 0; }

// Create a storeMe with dispatch function
function createstoreMe() {
  const subscriberMes = [];

  function dispatch(action) {
    action();
    subscriberMes.forEach((subscriberMe) => subscriberMe());
  }

  function subscribe(subscriberMe) {
    subscriberMes.push(subscriberMe);
    return () => {
      const index = subscriberMes.indexOf(subscriberMe);
      if (index !== -1) {
        subscriberMes.splice(index, 1);
      }
    };
  }

  return { dispatch, subscribe };
}

// Create a storeMe instance
const storeMe = createstoreMe();

// Subscribe to log state changes
const unsubscribeMe = storeMe.subscribe(() => {
  console.log("Count:", count);
});
console.warn('funcion method')
// Test scenarios
storeMe.dispatch(increment);
storeMe.dispatch(increment);
storeMe.dispatch(decrement);
storeMe.dispatch(reset);

// Unsubscribe when done
unsubscribeMe();
