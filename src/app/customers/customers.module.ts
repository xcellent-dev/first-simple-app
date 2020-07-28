import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent }  from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { FilterTextboxComponent } from './customers-list/filter-textboxcomponent';
import { SharedModule } from "../shared/share.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [
    CustomersComponent
  ],
  declarations: [CustomersComponent, CustomersListComponent, FilterTextboxComponent ]
})
export class CustomersModule { }
