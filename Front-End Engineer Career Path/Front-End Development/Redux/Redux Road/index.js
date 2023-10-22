const initialWagonState = {
    supplies: 100,
    distance: 0,
    days: 0,
    cash: 200
  }
  
  const wagonStateReducer = (state = initialWagonState, action) => {
    switch (action.type) {
      case 'gather': {
        return {
          ...state,
          supplies: state.supplies + 15,
          days: state.days + 1
        }
      }
      case 'travel': {
        if (state.supplies >= 20 * action.payload) {
          return {
          ...state,
          supplies: state.supplies - 20 * action.payload,
          distance: state.distance + 10 * action.payload,
          days: state.days + action.payload
          }
        } else {
          return state;
        }
      }
      case 'tippedWagon': {
        return {
          ...state,
          supplies: state.supplies - 30,
          days: state.days + 1
        }
      }
      case 'sell': {
        if (state.supplies >= 20) {
          return {
            ...state,
            supplies: state.supplies - 20,
            cash: state.cash + 5
          }
        } else {
          return state;
        }
      }
      case 'buy': {
        if (state.cash >= 15) {
          return {
            ...state,
            supplies: state.supplies + 25,
            cash: state.cash - 15
          }
        } else {
          return state;
        }
      }
      case 'theft': {
        return {
          ...state,
          cash: state.cash / 2
        }
      }
      default: {
        return state;
      }
    }
  }
  
  let wagon = wagonStateReducer(undefined, {});
  wagon = wagonStateReducer(wagon, {type: 'travel', payload: 1});
  wagon = wagonStateReducer(wagon, {type: 'gather'});
  wagon = wagonStateReducer(wagon, {type: 'tippedWagon'});
  wagon = wagonStateReducer(wagon, {type: 'travel', payload: 3});
  
  console.log(wagon);