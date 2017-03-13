import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class StopService {
  constructor(private http: Http) { }

  getStops() : Observable<any> {
    return this.http.get('https://securesite.voyenbus.com/services/bus-widget/cities-veb.php?agente=tol')
      .map(res => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}


