import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './metlife-depurador-ventas/dashboard/dashboard.component'

const routes: Routes = [
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    children: [
      // { 
      //   path: 'modulos-ipdial-plantilla-inspector', 
      //   component: ModulosIpdialPlantillaInspectorComponent
      // },
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
