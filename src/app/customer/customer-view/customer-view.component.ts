import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { selectCustomers } from '../store/selector/customer.selectors';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  customer$ : Observable<Customer[]>;

  constructor(private store:Store) { 
    this.customer$ = this.store.pipe(select(selectCustomers))      //setting the value to customer observable from store using selector
  }

  ngOnInit(): void {
  }

}
