# 📚 CRUD de Livros – Angular + TypeScript + Bootstrap

Este projeto faz parte do **Trabalho Prático da disciplina – Aprofundamento em Desenvolvimento Front-End** (Estácio).  
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
````
---
### 2️⃣ Rodar o Servidor de Desenvolvimento

```bash
ng serve --open
```
---
<h2>A aplicação abrirá automaticamente em:</h2>

```
👉 http://localhost:4200
```
---
<h2>🌐 Rotas da Aplicação</h2>

| Rota     | Página            | Descrição                          |
| :------- | :---------------- | :--------------------------------- |
| `/lista` | Lista de Livros   | Exibe todos os livros cadastrados  |
| `/dados` | Cadastro de Livro | Formulário para incluir novo livro |
---
<h2>🖼️ Prints da Aplicação</h2>

<h2>📌 Lista de Livros:</h2>

Exibe título, resumo, autores e editora:

<img width="1359" height="623" alt="image" src="https://github.com/user-attachments/assets/25c2db05-827b-4fae-9158-f0068f5bd9c8" />


📎 Botão “Excluir” em cada linha

<h2>📌 Cadastro de Livro:</h2>

Campos: título, resumo, editora:

<img width="1354" height="619" alt="image" src="https://github.com/user-attachments/assets/8378d775-a839-486d-925f-c20391455a69" />

<h2>📌 Campo dinâmico para adicionar autores</h2>

<img width="907" height="226" alt="image" src="https://github.com/user-attachments/assets/1167cc2c-72b0-476e-8f26-3dd1643ec45d" />

📎 Botão “Salvar” e validações visuais

---
<h2>🧠 Conceitos Aplicados</h2>

Componentes Standalone (Angular 16+)

Serviços (Service) para controle de dados

Diretivas estruturais (*ngFor, *ngIf)

Data binding ([(ngModel)])

Rotas com RouterModule.forRoot()

Validação de formulários Angular

Uso do Bootstrap para responsividade
---
<h2 align="center">👨‍🏫 Créditos Acadêmicos</h2>

<p align="center">
  <strong>Desenvolvido por:</strong> Gabriel Cosso Cavalcanti<br>
  <strong>Disciplina:</strong> <em>Aprofundamento em Desenvolvimento Front-End</em>
</p>

