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
    /* Hasta el 18-11-2021 tuve en github la transformación de json a tabla bajo el orient=Index, luego se pasó 
       a transformación en función de orient=Table */
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
                   original es de 2 niveles-> [field1:{0:elemnt1},{1:elemnt2},...] */
                   var FieldsListFromResponseAsJson: any = responseAsJson['schema']['fields'].slice(1) //Se desprecia el elemento [0] xq es el field Index
                   
                /* Se instancian e inicializan las variables para
                   construir el header */
                   var headers = ""
                   var valuesLen = FieldsListFromResponseAsJson.length
                   var contador = 0
                   
                   FieldsListFromResponseAsJson.forEach((element: any) => {
                      const fieldName = element['name']
                      contador += 1
                      headers += fieldName;
                      contador < valuesLen ? headers += separator : headers += "\r\n"
                    }); 
                    
                /* Se instancian e inicializan las variables para construir el body */
                   var bodyTable = ""
                   const data = responseAsJson['data']
                   // console.log(data)
                   const dataLen = data.length

                /* Se construye string que almacena el contenido de la tabla sin los headers */
                   for (let i = 0 ; i < dataLen ; i++ ){
                     const valueForColumn1 = data[i]['id_call']
                     const valueForColumn2 = data[i]['id_customer']
                     const valueForColumn3 = data[i]['date']
                     const valueForColumn4 = data[i]['id_agent']
                     const valueForColumn5 = data[i]['cod_act']
                     const valueForColumn6 = data[i]['duration']
                     const valueForColumn7 = data[i]['ipdial_code']
                     bodyTable += valueForColumn1 + separator + 
                                  valueForColumn2 + separator + 
                                  valueForColumn3 + separator + 
                                  valueForColumn4 + separator + 
                                  valueForColumn5 + separator + 
                                  valueForColumn6 + separator + 
                                  valueForColumn7 + 
                                  "\r\n"
                   }

                /* Se concatena tanto los headers como el bodyTable */
                    var fullTable = ""
                    fullTable = headers + bodyTable

                /* SE CREA ETIQUETA HTML Y EJECUCIÓN DE LA MISMA PARA DESCARGAR TABLA*/
                   const finalList = []
                   finalList.push(fullTable)
                   const dataType = 'text/csv;charset=utf-8;'
                   // const dataType = 'text/plain;charset=utf-8'  // Se deja este para descargues en txt en caso de que sea necesario
                   const filePath = window.URL.createObjectURL(new Blob(finalList,{type: dataType}));
                   const downloadLink = document.createElement("a");
                   downloadLink.href = filePath;
                   downloadLink.setAttribute("download","Informe_Solicitado");
                   document.body.appendChild(downloadLink);
                   downloadLink.click();
              }
        )
  }
}
