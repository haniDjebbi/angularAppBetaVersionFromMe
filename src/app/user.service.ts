import { Injectable } from '@angular/core';
import { User } from './user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[] ;
getProdects():User[]{
return [


  {
  "id":1,
  "name" :"hani",
  "email" :"hani@gmail.com",
  "mobile" :25831615
  } ,

  {
    "id":2,
    "name" :"ali",
    "email" :"ali@gmail.com",
    "mobile" :25831615
  } ,

  {
      "id":3,
      "name" :"lala",
      "email" :"lala@gmail.com",
      "mobile" :25831615
  } 

              ];
}
}




