import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCustomer from 'src/app/customer/store/reducer/customer.reducer';

export const selectCustomerState = createFeatureSelector<fromCustomer.CustomerState>(
    fromCustomer.customerFeatureKey //data
) //ngrx store - function <type along with interface as state>

export const selectCustomers = createSelector(    //selector function
    selectCustomerState,        //declared above const
    (state:fromCustomer.CustomerState) => state.customers      //(state - param with type )
)