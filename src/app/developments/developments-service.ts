import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Development } from './developments-schema';
import { DEVELOPMENTS } from './developments-list';

@Injectable({
    providedIn: 'root'
})
export class DevelopmentsServices {

    constructor (){}
    
    getDevelopment(): Development[]{
        return DEVELOPMENTS;
    }
}