// const inquirer = require('inquirer')
const promptRecursive = require('inquirer-recursive')

const config = plop => {
  // * set handlebars helpers equal to registerHelper

  plop.setHelper('switch', function (value, options) {
    this._switch_value_ = value
    var html = options.fn(this) // Process the body of the switch block
    delete this._switch_value_
    return html
  })

  plop.setHelper('case', function (value, options) {
    if (value == this._switch_value_) {
      return options.fn(this)
    }
  })

  // * set prompt's
  plop.setPrompt('recursive', promptRecursive)

  // * custom action's
  plop.setActionType('logAction', function (answers, config, plop) {
    // do something
    // if something went wrong
    throw 'error message'
    // otherwise
    return 'success status message'
  })

  plop.setGenerator('module', {
    description: 'Create a basic C.R.U.D Module ',
    prompts: [
      {
        type: 'input',
        name: 'noun',
        message: 'Type the module name in plural please 💻:'
      },
      {
        type: 'input',
        name: 'modelName',
        message: 'Type the model name in singular please 📄:'
      },
      {
        type: 'recursive',
        message:
          'Do you want to add a property ❓ \n 👀 available options : [String, Slug, Number, Date, Boolean, ObjectId, [ObjectId]]',
        name: 'fields',
        prompts: [
          {
            type: 'input',
            name: 'fieldName',
            message: 'Type the key name ✍:',
            validate: function (value) {
              if (/.+/.test(value)) {
                return true
              }
              return 'name is required'
            }
          },
          {
            type: 'list',
            message: 'Select the type of the value 🔍:',
            name: 'fieldType',
            choices: [
              'String',
              'Slug',
              'Number',
              'Date',
              'Boolean',
              'ObjectId',
              '[ObjectId]'
            ]
          }
        ]
      }
    ],
    actions: [
      // {
      //   type: 'logAction',
      //   configProp: 'available from the config param'
      // },
      {
        type: 'add',
        path: 'src/modules/{{camelCase noun}}/{{camelCase modelName}}.model.js',
        templateFile: 'plop/plop-templates/model.hbs',
        skipIfExists: true
      },
      {
        type: 'add',
        path: 'src/modules/{{camelCase noun}}/{{camelCase modelName}}.service.js',
        templateFile: 'plop/plop-templates/apiMoongoseService.hbs',
        skipIfExists: true
      },
      {
        type: 'add',
        path: 'src/modules/{{camelCase noun}}/{{camelCase noun}}.controller.js',
        templateFile: 'plop/plop-templates/apiController.hbs',
        skipIfExists: true
      },
      // * Append in the new routes in the router
      {
        type: 'add',
        path: 'src/modules/{{camelCase noun}}/{{camelCase noun}}.routes.js',
        templateFile: 'plop/plop-templates/apiRoutes.hbs',
        skipIfExists: true
      },
      {
        type: 'append',
        path: 'src/router.js',
        pattern: `/* PLOP_INJECT_API_ROUTES_IMPORT */`,
        template: `import {{camelCase noun}} from './modules/{{camelCase noun}}/{{camelCase noun}}.routes.js'`,
        skipIfExists: true
      },
      {
        type: 'append',
        path: 'src/router.js',
        pattern: `/* PLOP_INJECT_API_ROUTES */`,
        template: `\t{{camelCase noun}},`,
        skipIfExists: true
      }
    ]
  })
}

module.exports = config
