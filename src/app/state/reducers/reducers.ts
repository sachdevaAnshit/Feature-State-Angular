import { ActionReducer, Action, createSelector } from '@ngrx/store';

export interface State {
  counter: number;
  name: string
};

export const intitialState: State = {
  counter: 10,
  name: 'Anshit'
};

/* Actions to be dispatched from component */
export const INCREMENT : string = "INCREMENT";
export const DECREMENT : string = "DECREMENT";
export const INCREMENTSTRING : string = "INCREMENTSTRING";
export const DECREMENTSTRING : string = "DECREMENTSTRING";

/* Feature key to be recorded */
export const appComponentFeatureKey = 'appComponentFeatureKey';

export const mainStoreReducer: ActionReducer<State> = (state = intitialState, action: Action) => {
    switch(action.type) {
      case INCREMENT: {
        return { ...state, counter: state.counter + 1 }
      }
     case DECREMENT: {
        return { ...state, counter: state.counter - 1 }
      }
      case INCREMENTSTRING: {
        return { ...state, name: state.name + " Sachdeva" }
      }
      case DECREMENTSTRING: {
        return { ...state, name: state.name + " Sharma" }
      }
      default: {
        return state;
      }
    }
};
