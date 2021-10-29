import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpServices {

  constructor(private http:HttpClient) { }

    crearOrden (url: string){

      let params = new HttpParams().append('churrito','churrito');

      /*
        Si deseo un servicio via GET, parte de la estructura es:

            this.http.get(url)

        Si deseo un servicio via POST, parte de la estructura es:

            this.http.post(url, params) <-- Los params son por protocolo, en ellos
            no es necesario enviar datos.
      */
     
      return this.http.post(url, params)

    }

    getStatusOrder (url: string){

      return this.http.get(url)

    }
    
    downloadFilesFromOrder (url: string){

      return this.http.get(url)

    }
}
