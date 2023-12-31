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