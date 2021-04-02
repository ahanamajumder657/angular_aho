import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnChanges {

  @Input() parentdata :string="";

  ngOnChanges(changes:SimpleChanges){
    for(let propertyName in changes)
    {
       let change=changes[propertyName];
       let current=JSON.stringify(change.currentValue);
       let previous =JSON.stringify(change.previousValue);
       console.log(propertyName + current + previous);
    }
  }

}
