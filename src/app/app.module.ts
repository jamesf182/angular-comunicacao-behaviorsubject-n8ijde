import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VisualizadorComponent } from './visualizador/visualizador.component';
import { EmissorComponent } from './emissor/emissor.component';
import { AppService } from './app.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, VisualizadorComponent, EmissorComponent],
  bootstrap: [AppComponent],
  providers: [AppService]
})
export class AppModule { }
