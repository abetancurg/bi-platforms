import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OAuthModule, OAuthStorage , AuthConfig } from 'angular-oauth2-oidc'
import { authCodeFlowConfig } from './config/auth-code-flow.config'
// import { AuthGuard } from './shared/auth.guard.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperationsComponent } from './operations/operations.component';
import { DevelopmentsComponent } from './developments/developments.component';
import { DashboardDepuradorMetlifeComponent } from './developments/metlife-depurador-ventas/dashboard-depurador-metlife/dashboard-depurador-metlife.component';
import { ModulosIpdialDepuradorMetlifeComponent } from './developments/metlife-depurador-ventas/modulos-ipdial-depurador-metlife/modulos-ipdial-depurador-metlife.component';
import { UploadFilesDepuradorMetlifeComponent } from './developments/metlife-depurador-ventas/upload-files-depurador-metlife/upload-files-depurador-metlife.component';
import { ModulosIpdialDescargaDepuradorMetlifeComponent } from './developments/metlife-depurador-ventas/modulos-ipdial-descarga-depurador-metlife/modulos-ipdial-descarga-depurador-metlife.component';
import { DateDescargaDepuradorMetlifeComponent } from './developments/metlife-depurador-ventas/date-descarga-depurador-metlife/date-descarga-depurador-metlife.component';
import { ButtonSelectDepuradorMetlifeComponent } from './developments/metlife-depurador-ventas/button-select-depurador-metlife/button-select-depurador-metlife.component';
import { ButtonUploadDepuradorMetlifeComponent } from './developments/metlife-depurador-ventas/button-upload-depurador-metlife/button-upload-depurador-metlife.component';
import { PlantillasVentasDepuradorMetlifeComponent } from './developments/metlife-depurador-ventas/plantillas-ventas-depurador-metlife/plantillas-ventas-depurador-metlife.component';
import { ButtonDownloadDepuradorMetlifeComponent } from './developments/metlife-depurador-ventas/button-download-depurador-metlife/button-download-depurador-metlife.component';
import { HomeComponent } from './home/home.component';
import { InterceptorService } from 'src/interceptors/interceptor.service';
import { DateDescargaTmoMetlifeComponent } from './developments/metlife-consultas-tmo/date-descarga-tmo-metlife/date-descarga-tmo-metlife.component';
import { ModulosIpdialTmoMetlifeComponent } from './developments/metlife-consultas-tmo/modulos-ipdial-tmo-metlife/modulos-ipdial-tmo-metlife.component';
import { ButtonDownloadTmoMetlifeComponent } from './developments/metlife-consultas-tmo/button-download-tmo-metlife/button-download-tmo-metlife.component';

//THE FOLLOWING 3 LINES ARE FOR PROOF PURPOSES ONLY:
export function storageFactory(): OAuthStorage {
  return localStorage
} 

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
    ButtonSelectDepuradorMetlifeComponent,
    ButtonUploadDepuradorMetlifeComponent,
    PlantillasVentasDepuradorMetlifeComponent,
    ButtonDownloadDepuradorMetlifeComponent,
    HomeComponent,
    DateDescargaTmoMetlifeComponent,
    ModulosIpdialTmoMetlifeComponent,
    ButtonDownloadTmoMetlifeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //La siguiente librería no viene x default, así que hay
    //que hay que incluirla manualmente para que se habilite
    //la posibilidad de usar métodos propios importados a
    //los componentes. Ejemplo -> getServicesOfAnything()
    HttpClientModule,
    OAuthModule.forRoot(
      {
        resourceServer: {
            allowedUrls: ['http://localhost:5000/outcomes/'],
            sendAccessToken: true
        }
    }
    )
  ],
  providers: [
    {
      //http tipo interceptor
      provide: HTTP_INTERCEPTORS,
      //esta es la clase que se define que va a usar el interceptor
      useClass: InterceptorService,
      //para que esté pendiente de todas las peticiones que hacemos
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
