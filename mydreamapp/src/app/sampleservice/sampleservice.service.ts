import { Injectable } from '@angular/core';
import { Isample } from './sampleservice';

@Injectable({
  providedIn: 'root'
})
export class SampleserviceService {

  getSample(): Isample[]
  {
    return[ { id:1, name:'aho', marks:100},
    {id:2, name:'ashim', marks:60}

  ];
  }

  constructor() { }
}
