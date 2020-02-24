import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { from } from 'rxjs';
import { UserService } from './user.service';
import { ProductService } from './product.service';
import {HttpClientModule} from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { DeletEmployeeComponent } from './delet-employee/delet-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    UserComponent,
    ProductComponent,
    AddEmployeeComponent,
    DeletEmployeeComponent,
    DeleteEmployeeComponent
  ],
  imports: [
    HttpClientModule ,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  
  ],
  providers: [UserService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
