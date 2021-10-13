import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonserviceService {

  constructor(private http:HttpClient) { }

  consultaTMO (url: string){

    let params = new HttpParams().append('ip_dialcode','intcob-serfinanza');
    params = params.append('prefix','prueba-desde-angular');
    params = params.append('outcome_type','consulta-tmo');
    params = params.append('since','2021-10-06');
    params = params.append('until','2021-10-07');
    params = params.append('separator','%7C');
    // params = params.append('Access-Control-Allow-Origin','*');

    console.log(params)

    return this.http.post(url,{
      params
    })
    // .pipe(
    //   map(resp => resp)
    // )

  }
}
