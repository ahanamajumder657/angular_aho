import { Component, OnInit } from '@angular/core';
import {Form, NgForm} from '@angular/forms';
import {registration} from '../data/registration';
import {DataserviceService} from '../data/dataservice.service';

@Component({
  selector: 'app-registrationpage',
  templateUrl: './registrationpage.component.html',
  styleUrls: ['./registrationpage.component.css']
})
export class RegistrationpageComponent implements OnInit {

  registration:registration ={
    name: "null",
    notification:false,
    gender:"male",
    subscriptiontype:"monthly",
    password:"default"
  };

  constructor(public dataservice:DataserviceService) { }

  onSubmit(form:NgForm)
  {
     console.log('onSubmit', form.valid);
     this.dataservice.postRegistration(this.registration).subscribe(result=>
      console.log("success",result),
      error=>console.log("error", error));
  }

  

  ngOnInit(): void {
  }

}
