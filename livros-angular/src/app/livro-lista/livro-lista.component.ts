import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroService } from '../livro.service';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent {
  livros: Livro[] = [];

  constructor(private servico: LivroService) {
    this.livros = this.servico.listar();
  }

  excluir(codigo: number) {
    this.servico.excluir(codigo);
    this.livros = this.servico.listar();
  }
}
