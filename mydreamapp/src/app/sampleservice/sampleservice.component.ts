import { Component, OnInit } from '@angular/core';
import { Isample } from './sampleservice';
import {SampleserviceService} from './sampleservice.service';
import {NavigationExtras, Router} from '@angular/router';
import {SampleDetailComponent} from '../sample-detail/sample-detail.component';

@Component({
  selector: 'app-sampleservice',
  templateUrl: './sampleservice.component.html',
  styleUrls: ['./sampleservice.component.scss'],
  providers : [SampleserviceService]
})
export class SampleserviceComponent {

  samples:Isample[];
  constructor(private _sampleservice:SampleserviceService,private _router:Router)
  {
    this.samples= _sampleservice.getSample();
  }

  onSelect(sample: { id: any; }){
    this._router.navigate(['./sample',sample.id])
  }


}
