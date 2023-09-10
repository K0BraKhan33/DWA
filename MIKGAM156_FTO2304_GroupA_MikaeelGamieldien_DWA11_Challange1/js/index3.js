// Define initial stateMe
let stateMe = {
    count: 0
  };
  
  // Define a reducerMe function to handle actions
  function reducerMe(action) {
    switch (action.type) {
      case 'ADD':
        stateMe.count += 1;
        break;
      case 'SUBTRACT':
        stateMe.count -= 1;
        break;
      case 'RESET':
        stateMe.count = 0;
        break;
      default:
        break;
    }
  }
  
  // Subscribe to stateMe changes and log to the console
  function subscribe() {
    console.log(`stateMe updated: Count = ${stateMe.count}`);
  }
  
  // Initial stateMe log
  subscribe();
  
  // Dispatch actions
  function dispatch(action) {
    reducerMe(action);
    subscribe();
  }
  

  console.warn('main combo')
  // Test the scenarios
  console.log('SCENARIO 1:');
  dispatch({ type: 'GET_stateMe' }); // Should log "stateMe updated: Count = 0"
  
  console.log('SCENARIO 2:');
  dispatch({ type: 'ADD' });
  dispatch({ type: 'ADD' }); // Should log "stateMe updated: Count = 2"
  
  console.log('SCENARIO 3:');
  stateMe.count = 2; // Set the initial count to 2
  dispatch({ type: 'SUBTRACT' }); // Should log "stateMe updated: Count = 1"
  
  console.log('SCENARIO 4:');
  stateMe.count = 1; // Set the initial count to 1
  dispatch({ type: 'RESET' }); // Should log "stateMe updated: Count = 0"
  