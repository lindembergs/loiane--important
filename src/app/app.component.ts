import { PraticaService } from './../services/pratica.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';
  cursos: string[] = [];
  constructor(private PraticaService: PraticaService ){

    this.cursos = PraticaService.getCursos();


  }


}
