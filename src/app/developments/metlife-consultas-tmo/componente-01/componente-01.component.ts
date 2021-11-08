import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { HttpServices } from '../../commons/jsonservice.service';
import { Ipdial_modules } from '../ipdial-modules-schema';
import { IpdialModulesService } from '../ipdial-modules-services';

@Component({
  selector: 'app-componente-01',
  templateUrl: './componente-01.component.html',
  styleUrls: ['./componente-01.component.css']
})
export class Componente01TmoMetlifeComponent implements OnInit {

  fechaIni = 0;
  fechaFin = 0;
  nombreIdDialCode: string = "";

  orderIdToGetStatus: string = "";

  downloadOrdenId: string = "";

  constructor(
    private ipdialModuleService: IpdialModulesService,
    public httpServices: HttpServices,
  ) { }
  
  /* Se inicializa la variable ipdialModules */
  public ipdialModules: Ipdial_modules[] = []

  /* En el inicio de ejecución de este .ts se alimenta la lista anterior,
  y así el html tendrá disponibles todos los ipdialModules */
  ngOnInit(): void {
    this.ipdialModules = this.ipdialModuleService.getIpdialModules()
  }

  /* Se crean los métodos */
  crearOrden(){
    this.httpServices.crearOrden(`http://localhost:5000/outcomes/?outcome_type=consulta-tmo&since=${this.fechaIni}&until=${this.fechaFin}&ip_dialcode=${this.nombreIdDialCode}&separator=%7C`)
          .subscribe(
            (res: any) => {
                const orderId = res.order_id;
                const status = res.status;
                console.log("La orden es: ",res);
                console.log("La orden fue creada. El ordenId es: ",orderId);
                console.log("El status de la orden creada es: ",status);
            }
      )
    }
    
  solicitarStatusOrden(){
    // mostrarRueditaDeEspera()
    console.log("El orderId de la orden creada es: ",this.orderIdToGetStatus)
    this.httpServices.getStatusOrder(`http://localhost:5000/orders/${this.orderIdToGetStatus}`)
          .subscribe(
            (res: any) => {
                const status = res.status;
                const fileList = res.outcome_files;
                console.log("EL STATUS ES: ",status);
                console.log("ARCHIVO A DESCARGAR: ",fileList);
                // apagarRueditaDeEspera()
            }
      )
    }
    
    descargarArchivo(){
      console.log("El archivo a descargar es del orderId: ",this.downloadOrdenId)
      // this.httpServices.downloadFilesFromOrder(`http://localhost:5000/orders/${this.orderIdToGetStatus}/files`)
      this.httpServices.downloadFilesFromOrder(`http://localhost:5000/downloads/?order_id=${this.downloadOrdenId}`)
            .subscribe(
              (res: any) => {
                const resConverted = JSON.stringify(res)
                const data = []
                data.push(resConverted)
                const dataType = 'text/plain;charset=utf-8'//'application/vnd.ms-excel'
                const filePath = window.URL.createObjectURL(new Blob(data,{type: dataType}));
                const downloadLink = document.createElement("a");
                downloadLink.href = filePath;
                downloadLink.setAttribute("download","Informe_Solicitado");
                document.body.appendChild(downloadLink);
                downloadLink.click();
              }
        )
  }
}
