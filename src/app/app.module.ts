import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperationsComponent } from './operations/operations.component';
import { DevelopmentsComponent } from './developments/developments.component';
import { DashboardDepuradorMetlifeComponent } from './metlife-depurador-ventas/dashboard-depurador-metlife/dashboard-depurador-metlife.component';
import { ModulosIpdialDepuradorMetlifeComponent } from './metlife-depurador-ventas/modulos-ipdial-depurador-metlife/modulos-ipdial-depurador-metlife.component';
import { UploadFilesDepuradorMetlifeComponent } from './metlife-depurador-ventas/upload-files-depurador-metlife/upload-files-depurador-metlife.component';
import { ModulosIpdialDescargaDepuradorMetlifeComponent } from './metlife-depurador-ventas/modulos-ipdial-descarga-depurador-metlife/modulos-ipdial-descarga-depurador-metlife.component';
import { DateDescargaDepuradorMetlifeComponent } from './metlife-depurador-ventas/date-descarga-depurador-metlife/date-descarga-depurador-metlife.component';



@NgModule({
  declarations: [
    AppComponent,
    OperationsComponent,
    DevelopmentsComponent,
    DashboardDepuradorMetlifeComponent,
    ModulosIpdialDepuradorMetlifeComponent,
    UploadFilesDepuradorMetlifeComponent,
    ModulosIpdialDescargaDepuradorMetlifeComponent,
    DateDescargaDepuradorMetlifeComponent,
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
