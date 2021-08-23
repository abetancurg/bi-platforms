import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-depurador-metlife',
  templateUrl: './dashboard-depurador-metlife.component.html',
  styleUrls: ['./dashboard-depurador-metlife.component.css']
})
export class DashboardDepuradorMetlifeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*
    Recuerda que !this.toggle te cambia el valor de verdad
    al valor opuesta cada vez que hagas clic, es decir, de V
    pasa F falso después de un clic y viceversa.
  */
  toggle = true ;

  changeColorCargaArchivo(){
     this.toggle = true;     
  }
  changeColorDescargaArchivo(){
     this.toggle = false;     
  }
}
