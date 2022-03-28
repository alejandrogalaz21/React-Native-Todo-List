export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'react-native-todo-list-api',
      version: '1.0.0',
      description: 'this is the backend api for the todo list app'
    },
    servers: [
      {
        url: 'http://localhost:5000'
      }
    ]
  },
  apis: ['./src/routes/**/*.js']
}
