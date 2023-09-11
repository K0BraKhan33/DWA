class TallyStore {
    constructor() {
      this.state = {
        count: 0
      };
      this.subscribers = [];
    }
  
    subscribe(callback) {
      this.subscribers.push(callback);
    }
  
    dispatch(action, number) {
      switch (action.type) {
        case 'ADD':
          this.state.count += number;
          break;
        case 'SUBTRACT':
          this.state.count -= number;
          break;
        case 'RESET':
          this.state.count = 0;
          break;
        default:
          break;
      }
  
      this.notify();
    }
  
    getState() {
      return this.state;
    }
  
    notify() {
      for (const subscriber of this.subscribers) {
        subscriber(this.state);
      }
    }
  }
  
  // Create an instance of the TallyStore
  const tallyStore = new TallyStore();
  
  // Subscribe to state changes and log to the console
  tallyStore.subscribe(state => {
    console.log(`State updated: Count = ${state.count}`);
  });
  console.warn('based on above funcion code transformed into a class which can be called')
  // Test the scenarios
  console.log('SCENARIO 1:');
  console.log(tallyStore.getState()); // Should log "State updated: Count = 0"
  
  console.log('SCENARIO 2:');
  tallyStore.dispatch({ type: 'ADD' },2);
  tallyStore.dispatch({ type: 'ADD' },3); // Should log "State updated: Count = 2"
  
  console.log('SCENARIO 3:');
  tallyStore.dispatch({ type: 'SUBTRACT' },5); // Should log "State updated: Count = 1"
  
  console.log('SCENARIO 4:');
  tallyStore.dispatch({ type: 'RESET' }); // Should log "State updated: Count = 0"
  
  unsubscribe
  