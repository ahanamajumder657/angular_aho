import { Component, OnInit } from '@angular/core';
import { OrderElement } from '../model/OrderElements';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  showConfirmOrder: string = "";

  visual = {
    "d-none":true 
  }


  constructor() { }

  
  arrayLength : number = 1    ;
  elements :any = new Array(this.arrayLength);
  ngOnInit(): void {
      //this.arrayLength  = 5;
  }


  addItem(itemName:any){
    console.log(itemName)
    this.elements.push(new OrderElement("Mouse",1));
  }

  removeItem(){
    this.elements.pop();
  }

  initiateOrder(){
    this.visual['d-none'] = !this.visual['d-none'];
  }

}
