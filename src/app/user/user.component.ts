import { Component, OnInit } from '@angular/core';
import { User } from './user' ;
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
num :number =0 ;
users:any ;
  constructor(private http : HttpClient) {  
  let resp:any= this.http.get("https://jsonplaceholder.typicode.com/users");
  resp.subscribe((data)=>this.users=data);
  }

  ngOnInit(): void {
    
  }

}
