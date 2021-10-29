import { Injectable } from '@angular/core';

import { Ipdial_modules } from './ipdial-modules-schema';
import { IPDIAL_MODULES } from './ipdial-modules-list-tmo';


@Injectable({
    providedIn: 'root'
})
export class IpdialModulesService {
    constructor (){}
    
    getIpdialModules(): Ipdial_modules[]{
        return IPDIAL_MODULES;
    }
}