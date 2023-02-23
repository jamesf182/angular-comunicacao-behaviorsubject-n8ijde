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
  @Input() nomeBehaviorSubject: BehaviorSubject<string>;
  @Input() acaoDocumentos: BehaviorSubject<IAcaoDocumento[]>;
  @Input() acaoDocumento: BehaviorSubject<IAcaoDocumento>;

  nomeBehaviorSubjectSubscription: Subscription;
  nomeCount = 0;

  acaoDocumentosSubscription: Subscription;
  acaoDocumentoSubscription: Subscription;

  musicaSubscription: Subscription;
  musicaCount = 0;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.nomeBehaviorSubjectSubscription = this.nomeBehaviorSubject.subscribe(
      (valor) => {
        this.nomeCount++;
      }
    );

    this.acaoDocumentosSubscription = this.acaoDocumentos.subscribe();

    this.acaoDocumentoSubscription = this.acaoDocumento.subscribe();

    this.musicaSubscription = this.appService
      .obterMusica()
      .subscribe((valor) => {
        this.musicaCount++;
      });
  }

  ngOnDestroy() {
    if (this.musicaSubscription) this.musicaSubscription.unsubscribe();

    if (this.acaoDocumentosSubscription)
      this.acaoDocumentosSubscription.unsubscribe();

    if (this.acaoDocumentoSubscription)
      this.acaoDocumentoSubscription.unsubscribe();

    if (this.nomeBehaviorSubjectSubscription)
      this.nomeBehaviorSubjectSubscription.unsubscribe();
  }

  get musica(): string {
    return this.appService.obterMusica().value;
  }
}
