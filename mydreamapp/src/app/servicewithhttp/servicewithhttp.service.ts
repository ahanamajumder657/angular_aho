import { Injectable } from '@angular/core';
import {Iservice} from './servicewithhttp';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicewithhttpService {

  private _url:string="/assets/data/service.json"

  constructor(private http:HttpClient) {
   }

   getstudents():Observable<Iservice[]>
   {
     return this.http.get<Iservice[]>(this._url);
   }

   
}
