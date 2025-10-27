import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable()
export class ControleEditoraService {
  private editoras: Editora[] = [
    { codEditora: 1, nome: 'Livraria de Fogo' },
    { codEditora: 2, nome: 'Tibiaflix' },
    { codEditora: 3, nome: 'Rubinoff' }
  ];

  getEditoras(): Editora[] {
    // retorna cópia para evitar alterações externas acidentais
    return this.editoras.map(e => ({ ...e }));
  }

  getNomeEditora(codEditora: number): string {
    const e = this.editoras.find(ed => ed.codEditora === Number(codEditora));
    return e ? e.nome : '';
  }
}
