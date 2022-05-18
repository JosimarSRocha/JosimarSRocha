import { Component, OnInit, Input } from '@angular/core';
import { agenda } from './arquivo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agenda';
  lista_agenda=agenda;
}
