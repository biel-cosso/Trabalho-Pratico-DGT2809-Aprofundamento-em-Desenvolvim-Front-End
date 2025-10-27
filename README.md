# 📚 CRUD de Livros – Angular + TypeScript + Bootstrap

Este projeto faz parte do **Trabalho Prático da disciplina DGT2809 – Aprofundamento em Desenvolvimento Front-End** (Estácio).  
Consiste em uma aplicação **CRUD de Livros**, desenvolvida em **Angular**, que permite **listar, cadastrar e excluir livros**, com controle de editoras e autores, utilizando **componentes standalone** e **serviços locais**.

---

## 🚀 Tecnologias Utilizadas

| Camada | Tecnologia |
|:-------|:------------|
| Frontend | Angular 19 + TypeScript |
| Estilos | Bootstrap 5 |
| Armazenamento | Dados locais via Service |
| Extras | Angular Router, FormsModule, CommonModule |

---

## 📌 Funcionalidades

✔️ Listar todos os livros cadastrados  
✔️ Cadastrar novo livro  
✔️ Selecionar a editora vinculada  
✔️ Adicionar e remover autores dinamicamente  
✔️ Excluir livros da lista  
✔️ Navegação entre páginas (lista ↔ cadastro)  
✔️ Validações de formulário e mensagens amigáveis  

---

## 📁 Estrutura do Projeto

```
livros-angular
│
├── src
│ ├── app
│ │ ├── livro.ts
│ │ ├── editora.ts
│ │ ├── livro.service.ts
│ │ ├── editora.service.ts
│ │ ├── livro-lista
│ │ │ ├── livro-lista.component.ts
│ │ │ ├── livro-lista.component.html
│ │ ├── livro-dados
│ │ │ ├── livro-dados.component.ts
│ │ │ ├── livro-dados.component.html
│ │ ├── app.component.ts
│ │ ├── app.routes.ts
│ │ └── app.config.ts
│ ├── assets
│ ├── main.ts
│ └── styles.css
│
└── angular.json
```
---

## ⚙️ Instalação e Execução

### 1️⃣ Instalar Dependências
No diretório do projeto Angular:

```bash
npm install
---
### 2. Rodar o Servidor de Desenvolvimento
```bash
ng serve --open
---
A aplicação abrirá automaticamente em:
👉 http://localhost:4200
---
🌐 Rotas da Aplicação
| Rota     | Página            | Descrição                          |
| :------- | :---------------- | :--------------------------------- |
| `/lista` | Lista de Livros   | Exibe todos os livros cadastrados  |
| `/dados` | Cadastro de Livro | Formulário para incluir novo livro |
---
🖼️ Prints da Aplicação

📌 Lista de Livros:

Exibe título, resumo, autores e editora

Botão “Excluir” em cada linha

📌 Cadastro de Livro:

Campos: título, resumo, editora

Campo dinâmico para adicionar autores

Botão “Salvar” e validações visuais
---
🧠 Conceitos Aplicados

Componentes Standalone (Angular 16+)

Serviços (Service) para controle de dados

Diretivas estruturais (*ngFor, *ngIf)

Data binding ([(ngModel)])

Rotas com RouterModule.forRoot()

Validação de formulários Angular

Uso do Bootstrap para responsividade
---
👨‍🏫 Créditos Acadêmicos

Desenvolvido por: Gabriel Cosso Cavalcanti
Disciplina: Aprofundamento em Desenvolvimento Front-End
Instituição: Estácio de Sá
---
