import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JsonserviceService } from './jsonservice.service'

@Component({
  selector: 'app-button-download-depurador-metlife',
  templateUrl: './button-download-depurador-metlife.component.html',
  styleUrls: ['./button-download-depurador-metlife.component.css']
})
export class ButtonDownloadDepuradorMetlifeComponent implements OnInit {

  constructor(public json: JsonserviceService) {}

  ngOnInit(): void {
  }

  /*
    Sólo para pruebas: se pueden inhabilitar los CORS de chrome
    para que la consola no arroje errores de este tipo.
    1. Windows + R
    2. chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
    Ref: https://stackoverflow.com/a/42024918
  */

  correrConsultaTMO (){
    this.json.consultaTMO("http://localhost:5000/outcomes/?outcome_type=consulta-tmo&since=2021-10-06&until=2021-10-07&ip_dialcode=intcob-serfinanza&prefix=ejemplo_curl&separator=%7C")
        .subscribe((res) => {
        console.log(res);
    })
  }
 
  //http://localhost:5000/outcomes/?outcome_type=consulta-tmo&since=2021-10-06&until=2021-10-07&ip_dialcode=intcob-serfinanza&prefix=ejemplo_curl&separator=%7C
  //http://localhost:5000/outcomes/
  //http://localhost:5000/orders/c395a96c-ef86-41af-bf65-610892c5aeb4
  //https://reqres.in/api/users
  //https://storage.cloud.google.com/bigdata-metlife-contento-developer/outcomes/toma-de-token-consulta-tmo.csv

}
