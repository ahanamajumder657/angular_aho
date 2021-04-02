import { Injectable } from '@angular/core';
import {registration} from './registration';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor() { }

  postRegistration(registration:registration)
  {
    return of(registration);
  }
}
