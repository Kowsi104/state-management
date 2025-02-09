import { createReducer, on } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';
import * as CustomerActions from 'src/app/customer/store/action/customer.actions'

export const customerFeatureKey = 'data';   //state name or key

export interface CustomerState {
  customers:Customer[];
}

export const initialState: CustomerState = {
  customers:[]
};

export const CustomerReducer = createReducer(
  initialState,
  on(CustomerActions.addCustomers,(state:CustomerState,{customer})=>(       //(param state : type State(declared above) , {property})
    {
      ...state, // copy of state
      customers:[...state.customers,customer]  //inserting new customer data
    }
  ))
);

