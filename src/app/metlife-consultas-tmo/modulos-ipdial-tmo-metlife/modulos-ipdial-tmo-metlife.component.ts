import { Component, Input, OnInit } from '@angular/core';
import { Ipdial_modules } from '../ipdial-modules-schema';
import { IpdialModulesService } from '../ipdial-modules-services';

@Component({
  selector: 'app-modulos-ipdial-tmo-metlife',
  templateUrl: './modulos-ipdial-tmo-metlife.component.html',
  styleUrls: ['./modulos-ipdial-tmo-metlife.component.css']
})
export class ModulosIpdialTmoMetlifeComponent implements OnInit {

  @Input() fechaIni = 0;
  @Input() fechaFin = 0;

  seleccionado: any = '';

  constructor(
    private ipdialModuleService: IpdialModulesService
  ) { }
  
  public ipdial_modules: Ipdial_modules[] = []

  ngOnInit(): void {
    this.ipdial_modules = this.ipdialModuleService.getIpdialModules()
  }

}
