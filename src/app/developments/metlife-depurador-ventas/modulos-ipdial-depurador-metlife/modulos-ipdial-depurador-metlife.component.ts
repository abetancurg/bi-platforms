import { Component, OnInit } from '@angular/core';

import { IpdialModulesService } from '../ipdial-modules-services'
import { Ipdial_modules } from '../ipdial-modules-schema'

@Component({
  selector: 'app-modulos-ipdial',
  templateUrl: './modulos-ipdial-depurador-metlife.component.html',
  styleUrls: ['./modulos-ipdial-depurador-metlife.component.css'],
  providers: [IpdialModulesService]
})
export class ModulosIpdialDepuradorMetlifeComponent implements OnInit {

  seleccionado: any = '';

  constructor(
    private ipdialModuleService: IpdialModulesService
  ) { }
  
  public ipdial_modules: Ipdial_modules[] = []

  ngOnInit(): void {
    this.ipdial_modules = this.ipdialModuleService.getIpdialModules()
  }

}
