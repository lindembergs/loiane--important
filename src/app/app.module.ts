import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PraticaService } from 'src/services/pratica.service';
import { InputOutputComponent } from './input-output/input-output.component';
import { InputFixComponent } from './input-fix/input-fix.component';

@NgModule({
  declarations: [
    AppComponent,
    InputOutputComponent,
    InputFixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PraticaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
