import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardDepuradorMetlifeComponent } from './developments/metlife-depurador-ventas/dashboard-depurador-metlife/dashboard-depurador-metlife.component'
import { UploadFilesDepuradorMetlifeComponent } from './developments/metlife-depurador-ventas/upload-files-depurador-metlife/upload-files-depurador-metlife.component'
import { DateDescargaDepuradorMetlifeComponent } from './developments/metlife-depurador-ventas/date-descarga-depurador-metlife/date-descarga-depurador-metlife.component'
import { DevelopmentsComponent } from './developments/developments.component'
import { HomeComponent } from './home/home.component'
import { Componente01TmoMetlifeComponent } from './developments/metlife-consultas-tmo/componente-01/componente-01.component';

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
  /* 
      El siguiente path se tuvo que comentariar porque la url cuando recibe 
      los claims, este comodín me lo redirecciona al home ... y se genera un bucle,
      como si del home se solicitaran los claims y así sucesivamente.
      
      {
        path: '**', 
        redirectTo: '/home'
      }
  */

  /*
    El home contiene de manera implícita los children de
    operations y developments.

    Hay 2 caminos para concatenar componentes.htmls
    1. <router-outlets>
    2. <nombre-componente>

    Cuando se usa el segundo camino, no es necesario
    registrar el path en este archivo, ya que al relacionar los <>
    el componente automáticamente aparece de manera fija
    sin condicionarse a un path.

    IMPORTANT!: No se puede apuntar con diferentes paths a un mismo componente.
  */
  {
    path:'home',
    component: HomeComponent,
    children: [
      {
      path:'dashboard_depurador_metlife', 
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
        ,
        {
          path:'consulta_tmo', 
          component: Componente01TmoMetlifeComponent,
        }
    ]
  }
  ,
  {
    path: 'logout', 
    redirectTo: '/',
    pathMatch: 'full'
  }  
  ,
  {
    path: '', 
    redirectTo: '/home',
    pathMatch: 'full'
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
