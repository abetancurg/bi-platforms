import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardDepuradorMetlifeComponent } from './metlife-depurador-ventas/dashboard-depurador-metlife/dashboard-depurador-metlife.component'
import { UploadFilesDepuradorMetlifeComponent } from './metlife-depurador-ventas/upload-files-depurador-metlife/upload-files-depurador-metlife.component'
import { DateDescargaDepuradorMetlifeComponent } from './metlife-depurador-ventas/date-descarga-depurador-metlife/date-descarga-depurador-metlife.component'

/*
  Es importante crear los componentes que van dentro de los proyectos
  con un nombre mixto.

  Un nombre que mezcle un concepto genérico que tenga que ver con el
  propósito del componente y el nombre resumido del proyecto. Ej: 
  dashboard-depurador-metlife.

  Esto con el propósito de tener en el futuro un conjunto de paths que
  permitan ser leidos de una manera amigable.
*/

const routes: Routes = [
  { 
    path: 'dashboard_depurador_metlife', 
    component: DashboardDepuradorMetlifeComponent,
    children: [
      { 
        path: 'tipo-archivo-depurador-metlife', 
        component: UploadFilesDepuradorMetlifeComponent
      }
      ,
      { 
        path: 'date-descarga-depurador-metlife', 
        component: DateDescargaDepuradorMetlifeComponent
      }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
