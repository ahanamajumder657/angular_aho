import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() public checkTheBox: any ;

  @Output()  childEvent = new EventEmitter();
 

  ngOnInit(): void {
  }


  onClick(value:any){
    this.childEvent.emit(value)
  }

}
