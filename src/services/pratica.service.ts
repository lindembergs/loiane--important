

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PraticaService {

  apiUrl = environment.apiUrl

  constructor() { }

  getApi(){



  }

    getCursos(){

      return ['html', 'css', 'ts', 'angular', 'bootstrap']


    }
}
