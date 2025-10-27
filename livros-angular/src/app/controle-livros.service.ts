import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable()
export class ControleLivrosService {
  private livros: Livro[] = [
    { codigo: 1, codEditora: 1, titulo: 'O Diario de Rookgard', resumo: 'Resumo A', autores: ['Autor A'] },
    { codigo: 2, codEditora: 2, titulo: 'Dawnport', resumo: 'Resumo B', autores: ['Autor B'] },
    { codigo: 3, codEditora: 3, titulo: 'Mainland', resumo: 'Resumo C', autores: ['Autor C'] }
  ];

  obterLivros(): Livro[] {
    // retornar uma cópia simples
    return this.livros.map(l => ({ ...l, autores: [...l.autores] }));
  }

  incluir(livro: Livro): void {
    const max = this.livros.reduce((acc, l) => Math.max(acc, l.codigo), 0);
    const novo = { ...livro, codigo: max + 1, autores: [...livro.autores] };
    this.livros.push(novo);
  }

  excluir(codigo: number): void {
    const idx = this.livros.findIndex(l => l.codigo === codigo);
    if (idx !== -1) this.livros.splice(idx, 1);
  }
}
