import { NumberFormatStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {SimpleComponent} from './simple/simple.component';
import {ServicewithhttpService} from './servicewithhttp/servicewithhttp.service';
import { Iservice } from './servicewithhttp/servicewithhttp';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mydreamapp';
  message:String="";
  x = true;
  str:String="";
  address:string="kolkata";

  str_app = "Toto";
   services : Iservice[] = [];

  constructor(private _servicewithhttp:ServicewithhttpService)
  {
  }

  ngOnInit()
  {
    this._servicewithhttp.getstudents()
    .subscribe(data=>{
      console.log(data)
      this.services=data
    
    });
  }


  check_child = false; // introduced a variable to check the child check box

  public fruit = "apple";

  xyz(){
    console.log("button click")
    this.str = "button click"
  }

  onclick()
    {
        this.message = "clicked";
    }
  

  public special_danger = {
    "special" : true,
    "danger" :true
  }


  bindData(data:any){
    this.message = data
      console.log(data)
  }

  name = "";
  

}
