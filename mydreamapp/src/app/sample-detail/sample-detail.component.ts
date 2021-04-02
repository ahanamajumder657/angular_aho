import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {SampleserviceComponent} from '../sampleservice/sampleservice.component';

@Component({
  selector: 'app-sample-detail',
  template: `
    <p>
      sample-detail works! you have selected {{sampleid}}
    </p>
    <p>name {{samplename}}</p>
  `,
  styles: [
  ]
})
export class SampleDetailComponent implements OnInit {
  public sampleid:any;
  public samplename:any;

  constructor(private _route:ActivatedRoute) { }

  ngOnInit() {
    //let id1=this._route.snapshot.paramMap.get('id');
    //this.samplename=this._route.snapshot.paramMap.get('name');
    //this.sampleid=id1;
    this._route.paramMap.subscribe((params:ParamMap)=>{
    let id1=params.get('id');
    this.sampleid=id1;
    }
    )
  }

}
