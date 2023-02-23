import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IAcaoDocumento } from '../app.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-emissor',
  templateUrl: './emissor.component.html',
  styleUrls: ['./emissor.component.css'],
})
export class EmissorComponent implements OnInit {
  acaoDocumentos = new BehaviorSubject<IAcaoDocumento[]>([]);

  documento1: IAcaoDocumento;
  documento2: IAcaoDocumento;
  listDocs: IAcaoDocumento[] = [];

  constructor(private appService: AppService) {}

  ngOnInit() {}

  enviarViaInput(nome: string) {
    this.documento1 = Object.assign({ id: 1, nome: 'testeArquivo' });
    this.documento2 = Object.assign({ id: 2, nome: 'testeArquivo2' });

    this.listDocs.push(this.documento1);
    this.listDocs.push(this.documento2);

    this.acaoDocumentos.next(this.listDocs);
  }

  enviarViaService(musica: string) {
    this.appService.alterarMusica(musica);
  }
}
