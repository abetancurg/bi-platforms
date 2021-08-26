import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { PlantillasServices } from '../plantillas-ventas-service'
import { Plantilla } from '../plantillas-ventas-schema'

@Component({
  selector: 'app-plantillas-ventas-depurador-metlife',
  templateUrl: './plantillas-ventas-depurador-metlife.component.html',
  styleUrls: ['./plantillas-ventas-depurador-metlife.component.css'],
  providers: [PlantillasServices]
})
export class PlantillasVentasDepuradorMetlifeComponent implements OnChanges {

  constructor(private plantillasServices: PlantillasServices) { }

  seleccionado = 1;
  
  @Input() id = '1';

  plantillas: Plantilla[] = this.plantillasServices.getPlantillas();

  plantillas_filtradas: Plantilla[] = [{'id':1,'name':'-- Seleccionar IpDialCode--'}]

  ngOnChanges(changes: SimpleChanges){
    if (changes.id.currentValue != changes.id.previousValue){
      const id_recibido = changes.id.currentValue;
      const registros_filtrados = this.plantillas.filter(recibe_plantillas_filtradas => recibe_plantillas_filtradas.id == id_recibido)
      this.plantillas_filtradas = registros_filtrados
    }
  }

}
