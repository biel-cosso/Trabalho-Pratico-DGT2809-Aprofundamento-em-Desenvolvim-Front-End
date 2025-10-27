import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private livros: Livro[] = [
    { codigo: 1, codEditora: 1, titulo: 'O Diário de Rookgard', resumo: 'Aventuras de Rookgard', autores: ['R. Tibia'] },
    { codigo: 2, codEditora: 2, titulo: 'Dawnport', resumo: 'O início de uma jornada', autores: ['G. Sorcerer'] },
    { codigo: 3, codEditora: 3, titulo: 'Mainland', resumo: 'Conquistas e desafios', autores: ['K. Knight'] }
  ];

  listar(): Livro[] {
    return this.livros;
  }

  incluir(livro: Livro) {
    livro.codigo = this.livros.length + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number) {
    this.livros = this.livros.filter(l => l.codigo !== codigo);
  }
}
