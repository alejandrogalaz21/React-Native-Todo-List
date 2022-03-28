<h3 align="center">Mongoose ES6 Example</h3> 
<p align="center">
  <a href="https://github.com/alejandrogalaz21/js-babel-node">
    <img src="https://media.giphy.com/media/13HBDT4QSTpveU/giphy.gif" alt="cat developer" width=350 height=250>
  </a>

  <p align="center">
    This is a practice repo using a mongodb object modeling for node.js
    <br>
    <a href="https://github.com/alejandrogalaz21/js-babel-node/issues">Report bug</a>
    ·
    <a href="https://github.com/alejandrogalaz21/js-babel-node/pulls">Request feature</a>
    <br>
    Author 
    <br>
    <a href="https://github.com/alejandrogalaz21">Alejandro Galaz</a>
      <p align="center">
        <a href="https://github.com/alejandrogalaz21">
          <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />    
        </a>
        <a href="https://gitlab.com/alejandrogalaz21">
          <img src="https://img.shields.io/badge/GitLab-330F63?style=for-the-badge&logo=gitlab&logoColor=white" />    
        </a>
        <a href="https://www.linkedin.com/in/jesus-alejandro-galaz-icedo-496b94115/">
          <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />    
        </a>
        <a href="https://alejandrogalaz21@gmail.com">
          <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />    
        </a>
    </p>
  </p>
</p>

## Table of Contents

1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)
4. [Dependecies](#dependencies)
5. [Refs](#refs)
6. [Bugs and feature requests](#bugs-and-feature-requests)
7. [Refs](#refs)
8. [Legal](#legal)
9. [Thanks](#thanks)

### General Info

---

Project Structure :

```text
src/
├── config/
│   └── mongoose.connection.js
├── models/
│   └── product.model.js
├── services/
│   └── product.service.js
├── utils/
│   └── product.util.js
│   └── product.util.test.js
└── index.js

```

## Technologies

---

A list of technologies used within the project:

 <p align="">  
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" /> 
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node-dot-js&logoColor=white" /> 
    <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white"/> 
    <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/>
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>    
  </p>

Requiriments:

[![node.js](https://img.shields.io/badge/node.js-v14.15.4-<COLOR>)](https://nodejs.org/es/)
[![node.js](https://img.shields.io/badge/mongodb-v4.2-<COLOR>)](https://nodejs.org/es/)

## Installation

---

Create your .env file :

```
MONGO_DB_HOST=localhost
MONGO_DB_NAME=dbName
MONGO_DB_USER=root
MONGO_DB_PASSWORD=root
SECRET=secret
PORT=3005
```

Run the Application in development mode :

```bash
$ git clone https://github.com/alejandrogalaz21/js-babel-node
$ cd ../path/to/the/file
$ yarn
$ yarn dev
```

Run the aplication in debug :bug: mode in [Visual Studio Code](https://code.visualstudio.com/) :

Create your Visual Studio Code config file .vscode/launch.json

```JSON
{
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Attach",
      "restart": true,
      "port": 9229
    },
    {
      "type": "node",
      "request": "launch",
      "protocol": "inspector",
      "name": "ES6 Debugger",
      "program": "${workspaceFolder}/src/server.js",
      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/babel-node",
      "runtimeArgs": ["--nolazy"],
      "env": {
        "BABEL_ENV": "debug"
      },
      "resolveSourceMapLocations": [
        "${workspaceFolder}/**",
        "!**/node_modules/**"
      ]
    }
  ]
}

```

## Dependencies :

---

### Integrating Prettier and ESLint With VS Code

Make sure you gave installed the eslint and prettier extensions for vsCode

See : https://enlear.academy/integrating-prettier-and-eslint-with-vs-code-1d2f6fb53bc9

```bash
$ yarn add eslint eslint-config-prettier eslint-plugin-prettier prettier -D
```

Create your .eslintrc file :

```json
{
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "plugins": [],
  "extends": [],
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "no-debugger": "warn",
    "no-console": "warn",
    "no-eval": "error",
    "import/first": "off",
    "import/no-named-as-default": "off",
    "import/no-unresolved": "off",
    "no-unused-vars": "warn"
  },
  "globals": {
    "fixture": "writable"
  }
}
```

Create your .prettierrc file :

```json
{
  "bracketSpacing": true,
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "printWidth": 80,
  "proseWrap": "preserve",
  "quoteProps": "as-needed",
  "requirePragma": false,
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none",
  "useTabs": false,
  "vueIndentScriptAndStyle": false,
  "arrowParens": "avoid"
}
```

### Install nodemoon

See : https://www.npmjs.com/package/nodemon

```bash
$ yarn add nodemon -D
```

### Configure Babel for a Nodejs Application

See : https://dev.to/adebayoileri/configure-babel-for-nodejs-application-3798

```bash
$ yarn add @babel/cli @babel/core @babel/node @babel/plugin-transform-runtime
$ yarn add @babel/polyfill @babel/preset-env @babel/runtime
```

Create your .babelrc file :

```json
{
  "presets": ["@babel/preset-env"],
  "plugins": [["@babel/transform-runtime"]],
  "env": {
    "debug": {
      "sourceMaps": "inline",
      "retainLines": true
    }
  }
}
```

## Jest

See : https://jestjs.io/docs/getting-started

To use Babel, install required dependencies via yarn:

```bash
$ yarn add jest babel-jest -D
```

Based on your project, Jest will ask you a few questions and will create a basic configuration file with a short description for each option:

```bash
$ jest --init
```

### Install dotenv

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.

See : https://www.npmjs.com/package/dotenv

```bash
$ yarn add dotenv
```

### Install chalk for logs

See : https://www.npmjs.com/package/chalk

```bash
$ yarn add chalk
```

### Mongoose

Docs : https://mongoosejs.com/

npm : https://www.npmjs.com/package/mongoose

See : https://github.com/azat-co/cheatsheets/blob/master/mongodb-mongoose/readme.md

```bash
$ yarn add mongoose
```

Basic CRUD Example :

```js
// Create
const post = new Post({title: 'a', text: 'b')
post.save(function(error, document){
  ...
})


// Read
Post.findOne(criteria, function(error, post) {
  ...
})

// Update
Post.findOne(criteria, function(error, post) {
  post.set()
  post.save(function(error, document){
    ...
  })
})

// Delete
Post.findOne(criteria, function(error, post) {
  post.remove(function(error){
    ...
  })
})

```

Service example :

```js
//get all users
export const getAllUsers = async () => {
  const data = await User.find()
  return data
}

//create new user
export const newUser = async body => {
  const data = await User.create(body)
  return data
}

//update single user
export const updateUser = async (_id, body) => {
  const data = await User.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  )
  return data
}

//delete single user
export const deleteUser = async id => {
  await User.findByIdAndDelete(id)
  return ''
}

//get single user
export const getUser = async id => {
  const data = await User.findById(id)
  return data
}
```

Controller Example :

```js

```

# Refs :

- https://www.toptal.com/developers/gitignore
- https://www.markdownguide.org/basic-syntax/
- https://gist.github.com/rxaviers/7360908
- https://github.com/Naereen/badges/blob/master/README.md
- https://shields.io/
- https://github.com/alexandresanlim/Badges4-README.md-Profile

# Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/alejandrogalaz21/js-babel-node/pulls) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/alejandrogalaz21/js-babel-node/issues).

# [](https://github.com/pranavms13/whatsapp-node-api#legal)📃 Legal

This code is in no way affiliated with, authorized, maintained, sponsored or endorsed or any of its affiliates or subsidiaries. This is an independent and unofficial software. Use at your own risk. **Commercial use of this code/repo is strictly prohibited.**

## Thanks 👋
