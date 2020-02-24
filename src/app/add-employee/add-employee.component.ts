import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeComponent } from '../employee/employee.component';
import {Employee} from '../Services/employee';
import { Subscriber } from 'rxjs';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employeeObj:object ;
  confirmMsg :string ="new product added !" ;
  newAdded:boolean=false ;
  constructor(private http :HttpClient) { }
  addNewEmployee(e){
    this.employeeObj={
      name:e.name,
      salary:e.salary
   
    }
    this.http.post("//localhost:3000/employee/",this.employeeObj).subscribe((res:Response)=>
    {this.newAdded=true})

    }
    
    
  
  ngOnInit(){

  }

}
