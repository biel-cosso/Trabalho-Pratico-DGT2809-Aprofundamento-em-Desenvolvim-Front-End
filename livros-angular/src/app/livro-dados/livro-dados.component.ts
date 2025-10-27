import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Livro } from '../livro';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent {
  livro: Livro = { codigo: 0, codEditora: 0, titulo: '', resumo: '', autores: [] };
  autorTemp: string = ''; // <- campo temporário para novo autor
  editoras = [
    { codEditora: 1, nome: 'Livraria de Fogo' },
    { codEditora: 2, nome: 'Tibiaflix' },
    { codEditora: 3, nome: 'Rubinoff' }
  ];

  constructor(private servico: LivroService) {}

  adicionarAutor() {
    if (this.autorTemp.trim() !== '') {
      this.livro.autores.push(this.autorTemp.trim());
      this.autorTemp = '';
    }
  }

  removerAutor(index: number) {
    this.livro.autores.splice(index, 1);
  }

  incluir() {
    if (this.livro.autores.length === 0) {
      alert('Adicione ao menos um autor antes de salvar.');
      return;
    }

    this.servico.incluir(this.livro);
    alert(`Livro "${this.livro.titulo}" incluído com sucesso!`);
    this.livro = { codigo: 0, codEditora: 0, titulo: '', resumo: '', autores: [] };
  }
}
