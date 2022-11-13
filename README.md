## Getting started

```
npm install
npm run dev
```

Using yarn

```
yarn
yarn run dev
```

### Using docker

```
npm run docker:build
npm run docker:start
```

> Note: All script has two versions `*:win` in `package.json` is for windows devices. Please change the script according to your platforms supported script. Enhance scripts PR welcome.

---

## Features

- [Express](https://expressjs.com/) framework
- [TypeScript](https://www.typescriptlang.org/) v4 codebase
- [TypeORM](https://typeorm.io/#/) using Data Mapper pattern
- Docker environment:
  - Easily start local development using Docker Compose with single command

```
npm run docker:build
npm run docker:start
```

- Set local, stage or production environmental variables with type definitions
- Logging with morgan
- Unit and integration tests with [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) and [supertest](https://github.com/visionmedia/supertest)
- Linting with [ESLint](https://eslint.org/)
- Prettier code formatter
- Git hooks with [Husky](https://typicode.github.io/husky/#/) and lint-staged
- Common custom Error handling with 404 route
- Standard customize error code
- Upload files using [multer](https://www.npmjs.com/package/multer)
- [Cloudinary](https://cloudinary.com/) api integrated
- Route parameters validation check before navigating to route


```
