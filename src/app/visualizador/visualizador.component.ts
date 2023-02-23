import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IAcaoDocumento } from '../app.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-visualizador',
  templateUrl: './visualizador.component.html',
  styleUrls: ['./visualizador.component.css'],
})
export class VisualizadorComponent implements OnInit, OnDestroy {
  @Input() acaoDocumentos: BehaviorSubject<IAcaoDocumento[]>;

  acaoDocumentosSubscription: Subscription;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.acaoDocumentosSubscription = this.acaoDocumentos.subscribe(() => {
      console.log('ola');
    });
  }

  ngOnDestroy() {
    if (this.acaoDocumentosSubscription)
      this.acaoDocumentosSubscription.unsubscribe();

    this.acaoDocumentos = null;
  }
}
