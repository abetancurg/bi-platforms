import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperationsComponent } from './operations/operations.component';
import { DevelopmentsComponent } from './developments/developments.component';
import { DashboardComponent } from './metlife-depurador-ventas/dashboard/dashboard.component';
import { ModulosIpdialComponent } from './metlife-depurador-ventas/modulos-ipdial/modulos-ipdial.component';



@NgModule({
  declarations: [
    AppComponent,
    OperationsComponent,
    DevelopmentsComponent,
    DashboardComponent,
    ModulosIpdialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //La siguiente librería no viene x default, así que hay
    //que hay que incluirla manualmente para que se habilite
    //la posibilidad de usar métodos propios importados a
    //los componentes. Ejemplo -> getServicesOfAnything()
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
