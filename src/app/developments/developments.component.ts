import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router'

import { DevelopmentsServices } from '../developments-service';
import { Development } from '../developments-schema';
import { OperationsComponent } from '../operations/operations.component'

@Component({
  selector: 'app-developments',
  templateUrl: './developments.component.html',
  styleUrls: ['./developments.component.css'],
  providers: [
    OperationsComponent,
    DevelopmentsServices
  ]
})
export class DevelopmentsComponent implements OnChanges {

  @Input() id = 1;
  seleccionado = 'x';

  constructor(
    private developmentsServices: DevelopmentsServices,
    private router: Router
  ) { }

  developments: Development[] = this.developmentsServices.getDevelopment()
  //Se agrega un primer diccionario para mejorar el look del select en el browser
  develops_filtrados: Development[] = [{id:0,name:"--Seleccionar--", component_name: 'None'}] 
  // developments: number[] = [];

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.id)
    if (changes.id.currentValue != changes.id.previousValue){
      const id_recibido = changes.id.currentValue;
      console.log(this.developments)
      const develops_filtrados = this.developments.filter(develop_filtrado => develop_filtrado.id == id_recibido)
      this.develops_filtrados = develops_filtrados
    }
  }

  //El string que contiene component_name debe coincidir con el nombre del 
  //path ubicado en el archivo app-routing, para que el método router.navigate
  //viaje al componente que quiero visualizar. Es decir, si elijo el proyecto X
  //yo esperaría que el componente que voy a visualizar sea un dashboard de ese 
  //proyecto.
  navigateTo(seleccionado: any){
    console.log(seleccionado)
    this.router.navigate([seleccionado])
  }
}
