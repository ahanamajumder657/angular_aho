import { Component, Input } from '@angular/core';

@Component({
    selector: 'student',
    templateUrl: './student.component.html'
  })
  export class studentComponent {

    @Input() public parentData: any ;

      name1: String ="shuvo";
      marks: number =78;
  }