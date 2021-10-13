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

  correrConsultaTMO (){
    this.json.consultaTMO("http://localhost:5000/outcomes/").subscribe((res: any) => {
      console.log(res);
    })
  }
 

}
