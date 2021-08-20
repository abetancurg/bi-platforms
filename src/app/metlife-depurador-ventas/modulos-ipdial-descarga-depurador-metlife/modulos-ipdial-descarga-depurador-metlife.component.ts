import { Component, OnInit } from '@angular/core';

import { Ipdial_modules } from '../ipdial-modules-schema'
import { IpdialModulesService} from '../ipdial-modules-services'

@Component({
  selector: 'app-modulos-ipdial-descarga-depurador-metlife',
  templateUrl: './modulos-ipdial-descarga-depurador-metlife.component.html',
  styleUrls: ['./modulos-ipdial-descarga-depurador-metlife.component.css'],
  providers: [IpdialModulesService]
})
export class ModulosIpdialDescargaDepuradorMetlifeComponent implements OnInit {

  seleccionado = '';

  constructor(
    private ipdialModulesService : IpdialModulesService
  ) { }

  public ipdial_modules: Ipdial_modules[] = []

  ngOnInit(): void {
    this.ipdial_modules = this.ipdialModulesService.getIpdialModules()
  }

}
