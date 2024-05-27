import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TopbarComponent} from './topbar/topbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopbarComponent],
  template: `
<main>
      <header class="brand-name">
      </header>
      <section class="content">
        <app-topbar></app-topbar>
      </section>
    </main>
    `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DesafioHeitor';
}
