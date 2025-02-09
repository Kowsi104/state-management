import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import * as fromState from './reducers';
import { CustomerViewComponent } from './customer/customer-view/customer-view.component';
import { CustomerAddComponent } from './customer/customer-add/customer-add.component';
import { customerFeatureKey, CustomerReducer } from './customer/store/reducer/customer.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CustomerViewComponent,
    CustomerAddComponent
  ],
  imports: [
    BrowserModule,
    //ngrx state management
    StoreModule.forFeature(fromState.stateFeatureKey, fromState.reducers, { metaReducers: fromState.metaReducers })
    // StoreModule.forFeature(customerFeatureKey,CustomerReducer)   //state's name creation function
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
