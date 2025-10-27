import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark px-3">
      <a class="navbar-brand" routerLink="/">📚 Livraria Angular</a>
      <ul class="navbar-nav">
        <li class="nav-item"><a routerLink="/lista" routerLinkActive="active" class="nav-link">Lista</a></li>
        <li class="nav-item"><a routerLink="/dados" routerLinkActive="active" class="nav-link">Cadastro</a></li>
      </ul>
    </nav>

    <main class="container mt-4">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    nav a.active {
      font-weight: bold;
      text-decoration: underline;
    }
    .container { max-width: 900px; }
  `]
})
export class AppComponent {
  title = 'Livros Angular';
}
