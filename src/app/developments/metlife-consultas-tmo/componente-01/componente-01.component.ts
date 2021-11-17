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
    this.httpServices.crearOrden(`/outcomes/?outcome_type=consulta-tmo&since=${this.fechaIni}&until=${this.fechaFin}&ip_dialcode=${this.nombreIdDialCode}&separator=%7C`)
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
    this.httpServices.getStatusOrder(`/orders/${this.orderIdToGetStatus}`)
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
      this.httpServices.downloadFilesFromOrder(`/outcomes_json/?order_id=${this.downloadOrdenId}`)
            .subscribe(
              (responseAsObj: any) => {
                /* SE HACE TRANSFORMACIÓN DE JSON A TABLA */
                
                /* Se instancian e inicializan las variables
                   transversales */
                   var separator = ";"
                
                /* Se castea el response */
                   var responseAsStr = JSON.stringify(responseAsObj)
                   var responseAsJson = JSON.parse(responseAsStr)
                
                /* Se extraen los values del Json, y como resultado
                   logramos obtener varios diccionarios ya que el Json
                   original es de 2 niveles */
                   var valuesFromResponseAsJson: any = Object.values(responseAsJson)
                
                /* Se instancian e inicializan las variables para
                   construir el header */
                   var headers = ""
                   var valuesLen = valuesFromResponseAsJson.length
                   var contador = 0
                   for (let campoName in responseAsJson){
                      contador += 1
                      headers += campoName;
                      contador < valuesLen ? headers += separator : headers += "\r\n"
                }

                /* Se instancian e inicializan las variables para construir el body */
                   var bodyTable = ""
                   const keysJson = Object.keys(valuesFromResponseAsJson[0])
                   const keysLen = keysJson.length

                /* Se construye string que almacena el contenido de la tabla sin los headers */
                   for (let i = 0 ; i < keysLen ; i++ ){
                     const valueForColumn1 = Object.values(valuesFromResponseAsJson[0])
                     const valueForColumn2 = Object.values(valuesFromResponseAsJson[1])
                     const valueForColumn3 = Object.values(valuesFromResponseAsJson[2])
                     const valueForColumn4 = Object.values(valuesFromResponseAsJson[3])
                     const valueForColumn5 = Object.values(valuesFromResponseAsJson[4])
                     const valueForColumn6 = Object.values(valuesFromResponseAsJson[5])
                     const valueForColumn7 = Object.values(valuesFromResponseAsJson[6])
                     bodyTable += valueForColumn1[i] + separator + 
                                  valueForColumn2[i] + separator + 
                                  valueForColumn3[i] + separator + 
                                  valueForColumn4[i] + separator + 
                                  valueForColumn5[i] + separator + 
                                  valueForColumn6[i] + separator + 
                                  valueForColumn7[i] + 
                                  "\r\n"
                   }

                /* Se concatena tanto los headers como el bodyTable */
                    var fullTable = ""
                    fullTable = headers + bodyTable

                /* SE CREA ETIQUETA HTML Y EJECUCIÓN DE LA MISMA PARA DESCARGAR TABLA*/
                   const data = []
                   data.push(fullTable)
                   const dataType = 'text/csv;charset=utf-8;'
                   // const dataType = 'text/plain;charset=utf-8'  // Se deja este para descargues en txt en caso de que sea necesario
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
