import { Component, Input, OnInit } from '@angular/core';
import { JsonserviceService } from '../button-download-tmo-metlife/jsonservice.service';
import { Ipdial_modules } from '../ipdial-modules-schema';
import { IpdialModulesService } from '../ipdial-modules-services';

@Component({
  selector: 'app-modulos-ipdial-tmo-metlife',
  templateUrl: './modulos-ipdial-tmo-metlife.component.html',
  styleUrls: ['./modulos-ipdial-tmo-metlife.component.css']
})
export class ModulosIpdialTmoMetlifeComponent implements OnInit {

  @Input() fechaIni = 0;
  @Input() fechaFin = 0;

  statusOrdenId: string = "";
  downloadOrdenId: string = "";

  createOrderId: string = "";

  seleccionado: any = '';

  constructor(
    private ipdialModuleService: IpdialModulesService,
    public json: JsonserviceService,
  ) { }
  
  public ipdial_modules: Ipdial_modules[] = []

  ngOnInit(): void {
    this.ipdial_modules = this.ipdialModuleService.getIpdialModules()
  }

  crearOrden(){
    this.json.consultaTMO(`http://localhost:5000/outcomes/?outcome_type=consulta-tmo&since=${this.fechaIni}&until=${this.fechaFin}&ip_dialcode=${this.seleccionado}&separator=%7C`)
      // this.json.consultaTMO('http://localhost:5000/outcomes/?outcome_type=consulta-tmo&since=2021-10-15&until=2021-10-16&ip_dialcode=intcob-serfinanza&separator=%7C')
          .subscribe(
            (res: any) => {
                const orderId = res.order_id;
                const status = res.status;
                console.log("LA ORDEN FUE CREADA: ",orderId);
                console.log("EL STATUS ES: ",status);
            }

      )
    }
    
    solicitarStatusOrden(){
      // mostrarRueditaDeEspera()

      console.log("La orden solicitada es: ",this.statusOrdenId)
      this.json.getStatusOrder(`http://localhost:5000/orders/${this.statusOrdenId}`)
            .subscribe(
              (res: any) => {
                  const orderId = res.order_id;
                  const status = res.status;
                  const fileList = res.outcome_files;
                  console.log("EL STATUS ES: ",status);
                  console.log("ARCHIVO A DESCARGAR: ",fileList);
                  // apagarRueditaDeEspera()

              }
  
        )
      }
      
      descargarArchivo(){
        console.log("El archivo a descargar es de la orden: ",this.downloadOrdenId)
        this.json.downloadFilesFromOrder(`http://localhost:5000/orders/${this.statusOrdenId}/files`)
              .subscribe(
                (res: any) => {
                  //Acá recibo el archivo que quiero descargar tal como se hizo con el outcome_order para
                  //guardarlo en json
    
                }
    
          )

  }

}
