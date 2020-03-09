import { Component, OnInit } from '@angular/core';
import {Employee} from '../Services/employee';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employees :any ;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let resp =this.http.get("http://localhost:3000/employee") ;
    resp.subscribe((data)=>this.employees=data) ;
  }
  

}
