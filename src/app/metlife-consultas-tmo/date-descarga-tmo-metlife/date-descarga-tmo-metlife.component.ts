import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-descarga-tmo-metlife',
  templateUrl: './date-descarga-tmo-metlife.component.html',
  styleUrls: ['./date-descarga-tmo-metlife.component.css']
})

export class DateDescargaTmoMetlifeComponent  {

  constructor() { }

  // ngOnInit(): void {
  // }
  /*ngModel te permite enviar datos entre componentes,
  no sólo basta con usar [value]="prueba" dentro del <Input>*/

  fechaIni = 0;
  fechaFin = 0;

}

