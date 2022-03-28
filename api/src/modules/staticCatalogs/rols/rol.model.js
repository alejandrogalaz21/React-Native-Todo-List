import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'

mongoose.plugin(slug)

const Schema = mongoose.Schema

export const rolFields = {
  value: {
    type: Number
  },
  option: {
    type: String,
    required: [true, 'is required'],
    trim: true
  }
}

export const rolSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(rolFields, rolSchemaConfig)
const Rol = mongoose.model('rol', schema)

// Creating default data in DB if it doesn't exist
Rol.createCollection(collection => {
  Rol.find({}, function (error, docs) {
    if (error) throw new Error(error)
    if (docs.length === 0) {
      const data = [
        {
          value: 0,
          option: 'Administrador'
        },
        {
          value: 1,
          option: 'Usuario'
        },
        {
          value: 2,
          option: 'Cuidador Titular'
        },
        {
          value: 3,
          option: 'Cuidador Auxiliar'
        }
      ]
      Rol.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { Rol }
