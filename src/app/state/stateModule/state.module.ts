import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import * as stateReducers from "../reducers/reducers";

@NgModule({
  imports: [
    StoreModule.forFeature(stateReducers.appComponentFeatureKey, stateReducers.mainStoreReducer )
  ]
})

export class StateModule {}
