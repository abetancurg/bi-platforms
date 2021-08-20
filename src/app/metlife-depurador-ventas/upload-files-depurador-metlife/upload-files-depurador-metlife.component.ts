import { Component, OnInit } from '@angular/core';

import { File_type } from '../file-type-schema'
import { FileTypeServices } from '../file-type-services'

@Component({
  selector: 'app-upload-files-depurador-metlife',
  templateUrl: './upload-files-depurador-metlife.component.html',
  styleUrls: ['./upload-files-depurador-metlife.component.css'],
  providers: [FileTypeServices]
})
export class UploadFilesDepuradorMetlifeComponent implements OnInit {

  seleccionado = '';

  constructor(
    private fileTypeServices : FileTypeServices
  ) { }

  public File_type: File_type[] = []

  ngOnInit(): void {
    this.File_type = this.fileTypeServices.getFileType()
  }

}
