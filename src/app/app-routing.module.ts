import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './metlife-depurador-ventas/dashboard/dashboard.component'
import { ModulosIpdialComponent } from './metlife-depurador-ventas/modulos-ipdial/modulos-ipdial.component'

const routes: Routes = [
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    children: [
      { 
        path: 'modulos-ipdial', 
        component: ModulosIpdialComponent
      }
      // ,
      // { 
      //   path: 'modulos-ipdial-descarga-plantilla-inspector', 
      //   component: IpdialModulesDescargaPlantillaInspectorComponent
      // }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
