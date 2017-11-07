import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import  'rxjs';

@Injectable()
export class RegisterService {

  constructor(private _http: Http) { }

  register(data) : Observable<Response>
  {
    return this._http.post('http://localhost:5000/account/register', data);
  }

}
