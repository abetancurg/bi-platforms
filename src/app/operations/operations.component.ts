import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

import { Operation } from '../operation-schema';
import { Development } from '../developments-schema';
import { OperationService } from '../operation-service';
import { DevelopmentsServices } from '../developments-service'

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css'],
  providers: [OperationService,DevelopmentsServices]
            
})
export class OperationsComponent implements OnInit {

  seleccionado = 1;

  constructor(
    private operationsServices: OperationService,
    private developmentsServices: DevelopmentsServices,

  ) {}

  public operations: Operation[] = [];
  public developments: Development[] = [];


  ngOnInit(): void {
    this.operations = this.operationsServices.getOperations();
  }

}

// USO DE NGMODEL:
// https://dev.to/jwp/native-select-element-s-default-option-using-ngmodel-and-2-way-binding-4eli
