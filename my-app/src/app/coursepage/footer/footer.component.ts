import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  corporation: string = 'Diasoft';
  pageName: string = 'Быстрый старт Angular 2025';
}
