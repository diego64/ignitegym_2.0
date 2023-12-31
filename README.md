# Ignitegym (Novas Funcionalidades)

Essa aplicação é uma continuação do APP [Ignitegym](https://github.com/diego64/ignitegym) que é um aplicativo Mobile desenvolvido em React Native com o objetivo de ser uma aplicação de marçação e acompanhamento de exercicio fisicos em academia.

## Tecnologias utilizadas

 - [React Native](https://reactnative.dev/)
 - [Expo](https://expo.dev/)
 - [Styled Components](https://styled-components.com/)
 - [React Navigation](https://reactnavigation.org/)
 - [JWT](https://jwt.io/)

## Desenvolvimento

O desenvolvimento da aplicação foi divido em 4 partes:

- Estrutura da aplicação
- CSS-in-JS
- Navegação
- Local Storage

## Relato

O código utilizou as versões mais recente das tecnologias no momento como **Expo SDK 49.0.0** e **React Native 0.72**.

O começo do desenvolvimento foi voltado para a organização das pastas de downloads das imagens da aplicação.

Já na segunda parte, foi aplciado o **Styled Components** como forma de auxiliar a estilização da aplicação junto com a instalação das fontes e bibliotecas de icones e a criação das telas da aplicação.

Ja na penultima fase, foi aplicado a **Navegação** pela biblioteca **React Navigation** sendo escolhido a forma de **React Navigation**.

Por fim, foi aplicado o **Local Storage** atraveis do **Async Storage** com o objetivo de armazenar os dados no dispositivo do usuário(a).

## Funcionalidades

- Criar um Grupo
- Remover um Grupo
- Criar um usuário
- Remover um usuário

## Clone e Instalação do Projeto

Clone o projeto


```bash
  git clone https://github.com/diego64/ignitegym_2.0
```

Entre no diretório do projeto

```bash
  cd igniteteams
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```







# Ignitegym 2.0

Essa aplicação é uma continuação do APP [Ignitegym](https://github.com/diego64/ignitegym) que é um aplicativo Mobile desenvolvido em React Native com o objetivo de ser uma aplicação de marçação e acompanhamento de exercicio fisicos em academia.

---

### Stack

- React Native;
- Node.js
- Expo (SDK 49);
- AXIOS;
- Yup;
- JWT;

#### Desenvolvimento

- Fetch API;
- HTTP Client;
- JWT:
  - Autenticação;
  - Refresh token;
- Upload de imagem;

#### Funcioanlidades

- Criação de usuário;
- Atualização de cadastro de usuário (Troca de avatar e senha);
- Login de usuário;
- Marcação de exercicio;
- Listagem de exercicios feitos;

#### Utilizando a aplicação

O Aplicativo ele é composto por um backend desenvolvido em Node.js então é necessário ter instalado em sua máquina. Também é necessário ter a CLI do EXPO em seu computador para rodar a aplicação mobile e um dispositivo com o Expo Client (Seja o dispositivo físico ou emulador).

```bash
  git clone https://github.com/diego64/ignitegym_2.0
```

Entre na pasta do projeto

```bash
  cd ignitegym_2.0
```

Entre no backend

```bash
  cd api
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run dev
```

Entre no APP

```bash
  cd mobile
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  npm run start
```