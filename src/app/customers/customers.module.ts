import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomersComponent } from './customers.component';

@NgModule({
    imports: [CommonModule],
    declarations: [CustomersComponent],
    exports: [ CustomersComponent ]
})

export class CustomersModule { }