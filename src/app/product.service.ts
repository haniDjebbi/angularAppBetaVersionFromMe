import { Injectable } from '@angular/core';
import {Product} from './product/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProduct():Product[]{
    return[

      {
        'id'   :1 ,
        'name' :"watch202" ,
        'brand':"rolex" ,
        'price':1200 

      },
      {
        'id'   :2 ,
        'name' :"keyboard" ,
        'brand':"rayzer" ,
        'price':750 

      }
    ]

  }
}
