import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'

mongoose.plugin(slug)

const Schema = mongoose.Schema

export const situationFields = {
  option: {
    type: String,
    required: [true, 'is required'],
    trim: true
  }
}

export const situationSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(situationFields, situationSchemaConfig)
const Situation = mongoose.model('situation', schema)

// Creating default data in DB if it doesn't exist
Situation.createCollection(collection => {
  Situation.find({}, function (error, docs) {
    if (error) throw new Error(error)
    if (docs.length === 0) {
      const data = [
        {
          option: 'Separación'
        },
        {
          option: 'Divorcio'
        },
        {
          option: 'Conflicto de parejas'
        },
        {
          option: 'Muerte de algún familiar cercano'
        },
        {
          option: 'Robo o asalto'
        },
        {
          option: 'Incendio casa'
        },
        {
          option: 'Enfermedad grave de algún miembro de la familia'
        },
        {
          option: 'Problemas ecónommicos'
        },
        {
          option: 'Violencia familiar'
        },
        {
          option: 'Accidente de algún familiar directo'
        },
        {
          option: 'Afectación por desastres naturales'
        },
        {
          option: 'Secuestro de algún familiar'
        },
        {
          option: 'Consumo desmedido de alcohol de algúno de los miembros que viven en casa'
        },
        {
          option: 'Consumo de drogas de alguno de los miembros que viven en casa'
        },
        {
          option: 'Enfermedad mental de alguno de los miembros que viven en casa'
        },
        {
          option: 'La madre padece depresión'
        }
      ]
      Situation.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { Situation }
