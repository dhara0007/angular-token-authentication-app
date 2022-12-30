import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee.component';
import {RouterModule} from '@angular/router';




@NgModule({
  declarations: [
    RegisterComponent,
    EditComponent,
    EmployeeComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    FormsModule,

    

  ]
})
export class EmployeeModule { }
