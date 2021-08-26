import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Plantilla } from './plantillas-ventas-schema';
import { PLANTILLAS } from './plantillas-ventas-list';

@Injectable({
    providedIn: 'root'
})
export class PlantillasServices {

    constructor (){}
    
    getPlantillas(): Plantilla[]{
        return PLANTILLAS;
    }
}