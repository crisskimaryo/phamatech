import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/Operator/map';

@Injectable()
export class ServiceService {

  constructor(private http: Http) { }

  medicinelist() {
    return this.http.get('../assets/mockup/medicine.json').map(res => res.json());
  }

}
