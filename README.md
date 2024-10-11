# Formulário de Cadastro de Membros - Processo Seletivo Frontend Fusion

Este projeto é um **Formulário de Cadastro de Membros** desenvolvido para o processo seletivo **Frontend Fusion**. O objetivo é coletar informações básicas de candidatos e armazená-las no **localStorage**. O formulário conta com validação de dados utilizando **Zod** e estilização com **Tailwind CSS**.

## Funcionalidades

- **Campos do Formulário**:
  - Nome
  - Email
  - Telefone
  - Vaga Pretendida (campo de seleção)
  - LinkedIn
  - GitHub

- **Validação com Zod**: O projeto utiliza **Zod** para garantir que os dados inseridos pelos usuários atendam aos critérios exigidos.

- **Armazenamento no localStorage**: Após o envio, os dados do formulário são armazenados no **localStorage** do navegador.

- **Mensagens de Estado**:
  - Exibe uma mensagem de sucesso se todos os campos forem preenchidos corretamente.
  - Exibe uma mensagem de erro caso algum campo esteja incorreto.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces dinâmicas.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.
- **Zod**: Biblioteca para validação de schemas.
- **localStorage**: Armazenamento dos dados diretamente no navegador.

## Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
2. Entre no diretório do projeto:
   ```bash
   cd formulario_desafio03
3. Instale as dependências:
   ```bash
   npm install
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev

## Licença

Este projeto está licenciado sob a MIT License.