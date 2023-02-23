import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IAcaoDocumento {
  id: number;
  nome: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
}
