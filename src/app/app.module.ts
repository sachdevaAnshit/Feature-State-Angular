import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

import { StoreModule } from "@ngrx/store";
import { StateModule } from './state/stateModule/state.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({}),
    StateModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
