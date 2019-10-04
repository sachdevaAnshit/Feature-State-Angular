import { Component } from '@angular/core';

import { Store, select } from "@ngrx/store";
import * as stateReducers from "./state/reducers/reducers";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  counter = '';
  name = '';

  constructor (private store:Store<any>){
    this.store.select<any>((state: any) => state).subscribe((completeState: any) => {
      this.counter = 'Counter value is ' + completeState[stateReducers.appComponentFeatureKey].counter;
      this.name = 'Counter value is ' + completeState[stateReducers.appComponentFeatureKey].name;
    });
  }
  
  increment(){
    this.store.dispatch({type: stateReducers.INCREMENT});
  }
  decrement(){
    this.store.dispatch({type: stateReducers.DECREMENT});
  }
  addString(){
    this.store.dispatch({type: stateReducers.INCREMENTSTRING});
  }
  removeString(){
    this.store.dispatch({type: stateReducers.DECREMENTSTRING});
  }
  
}
