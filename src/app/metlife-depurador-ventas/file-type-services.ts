import { Injectable } from '@angular/core';

import { File_type } from './file-type-schema';
import { FILE_TYPE } from './file-type-list';


@Injectable({
    providedIn: 'root'
})
export class FileTypeServices {
    constructor (){}
    
    getFileType(): File_type[]{
        return FILE_TYPE;
    }
}