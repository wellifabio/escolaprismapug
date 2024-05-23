# Projeto Escola
Simples projeto backend integrado, exemplo de um fullstack integrado

|Tecnologias|
|-|
|NodeJS|
|Prisma|
|PUG|

## Documentação
### Diagrama de Classes
![DC](./docs/dc_escola_2.0.png)
### MER DER
![DC](./docs/der_escola_1.0.png)

## Para testar o projeto
- 1 Clone este repositório
- 2 Abra com o VsCode
- 3 Abra o terminal cmd ou bash instale as dependências
```bash
npm i
```
- 4 Configure o arquivo **.env** com a string a seguir:
```js
DATABASE_URL="mysql://root@localhost:3306/escola?schema=public&timezone=UTC"
```