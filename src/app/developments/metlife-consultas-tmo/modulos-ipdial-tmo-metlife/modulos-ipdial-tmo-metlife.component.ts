import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { HttpServices } from '../../commons/jsonservice.service';
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

  nombreIdDialCode: string = "";

  nombreModulo: any = '';

  constructor(
    private ipdialModuleService: IpdialModulesService,
    public httpServices: HttpServices,
  ) { }
  
  public ipdial_modules: Ipdial_modules[] = []

  ngOnInit(): void {
    this.ipdial_modules = this.ipdialModuleService.getIpdialModules()
  }

  crearOrden(){
    this.httpServices.crearOrden(`http://localhost:5000/outcomes/?outcome_type=consulta-tmo&since=${this.fechaIni}&until=${this.fechaFin}&ip_dialcode=${this.nombreIdDialCode}&separator=%7C`)
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
      this.httpServices.getStatusOrder(`http://localhost:5000/orders/${this.statusOrdenId}`)
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
        this.httpServices.downloadFilesFromOrder(`http://localhost:5000/orders/${this.statusOrdenId}/files`)
              .subscribe(
                (res: any) => {
                  //Acá recibo el archivo que quiero descargar tal como se hizo con el outcome_order para
                  //guardarlo en json
    
                }
    
          )

  }

}
