import { createAction, emptyProps, props } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';

export const addCustomers = createAction(
  '[Customer] Add Customers', //state , action name
  (customer:Customer) => ({customer}) //data
);
