import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'

mongoose.plugin(slug)

const Schema = mongoose.Schema

export const levelEstudyFields = {
  option: {
    type: String,
    required: [true, 'is required'],
    trim: true
  }
}

export const levelEstudySchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(levelEstudyFields, levelEstudySchemaConfig)
const LevelEstudy = mongoose.model('levelEstudy', schema)

// Creating default data in DB if it doesn't exist
LevelEstudy.createCollection(collection => {
  LevelEstudy.find({}, function (error, docs) {
    if (error) throw new Error(error)
    if (docs.length === 0) {
      const data = [
        {
          option: '1o Primaria'
        },
        {
          option: '2o Primaria'
        },
        {
          option: '3o Primaria'
        },
        {
          option: '4o Primaria'
        },
        {
          option: '5o Primaria'
        },
        {
          option: '6o Primaria'
        },
        {
          option: '1o Secundaria'
        },
        {
          option: '2o Secundaria'
        },
        {
          option: '3o Secundaria'
        },
        {
          option: '1o Preparatoria'
        },
        {
          option: '2o Preparatoria'
        },
        {
          option: '3o Preparatoria'
        },
        {
          option: '4o Preparatoria'
        },
        {
          option: '1o Licenciatura'
        },
        {
          option: '2o Licenciatura'
        },
        {
          option: '3o Licenciatura'
        },
        {
          option: '4o Licenciatura'
        },
        {
          option: 'Licenciatura Terminada'
        },
        {
          option: 'Maestría Trunca'
        },
        {
          option: 'Maestría Completa'
        },
        {
          option: 'Ninguno'
        },
        {
          option: 'Doctorado Trunco'
        },
        {
          option: 'Doctorado'
        },
        {
          option: 'Incompleto'
        }
      ]
      LevelEstudy.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { LevelEstudy }
