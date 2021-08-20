import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Operation } from './operation-schema';
import { OPERATIONS } from './operations-list';



//Se debe introducir el siguiente decorador el cual
//provee las dependencias necesarias para que las clases
//que se crean puedan funcionar correctamente
@Injectable({
    providedIn: 'root'
})
export class OperationService {
    constructor (
        private http: HttpClient,
        // private OPERATIONS: Operation[]
    ){}
    
    //el schema Operation[] tiene implícitamente la interface {id: , name:''}
    getOperations(): Operation[]{
        return OPERATIONS;
    }
}