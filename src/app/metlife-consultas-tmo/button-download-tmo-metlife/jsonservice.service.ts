import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JsonserviceService {

  constructor(private http:HttpClient) { }

    consultaTMO (url: string){

    let params = new HttpParams().append('churrito','churrito');
        // params = params.append('prefix','prueba-desde-angular');
        // params = params.append('outcome_type','consulta-tmo');
        // params = params.append('since','2021-10-06');
        // params = params.append('until','2021-10-07');
        // params = params.append('separator','%7C');
        // params = params.append('Access-Control-Allow-Origin','*');

    // console.log(params)

    /*
       Si deseo un servicio via GET, parte de la estructura es:

          this.http.get(url)

       Si deseo un servicio via POST, parte de la estructura es:

          this.http.post(url, params) <-- Los params son por protocolo, en ellos
          no es necesario enviar datos.
    */

    // const retornado$ = of('por fin')

    return this.http.post(url, params)
    // .pipe(
    //   map(resp => 
    //     // console.log(resp)
    //     resp
    //  )
    // )

    

  }
}
