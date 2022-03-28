import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'

mongoose.plugin(slug)

const Schema = mongoose.Schema

export const relationshipFields = {
  option: {
    type: String,
    required: [true, 'is required'],
    trim: true
  }
}

export const relationshipSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(relationshipFields, relationshipSchemaConfig)
const Relationship = mongoose.model('relationship', schema)

// Creating default data in DB if it doesn't exist
Relationship.createCollection(collection => {
  Relationship.find({}, function (error, docs) {
    if (error) throw new Error(error)
    if (docs.length === 0) {
      const data = [
        {
          option: 'Tutor Legal'
        },
        {
          option: 'Padre'
        },
        {
          option: 'Madre'
        },
        {
          option: 'Abuela Materna'
        },
        {
          option: 'Abuela Paterna'
        },
        {
          option: 'Abuelo Materno'
        },
        {
          option: 'Abuelo Paterno'
        },
        {
          option: 'Tio Directo'
        },
        {
          option: 'Tio Politico'
        },
        {
          option: 'Tia Directa'
        },
        {
          option: 'Tia Politica'
        },
        {
          option: 'Primo'
        },
        {
          option: 'Prima'
        },
        {
          option: 'Hermano'
        },
        {
          option: 'Hermano Politico'
        },
        {
          option: 'Hermana'
        },
        {
          option: 'Hermana Politica'
        },
        {
          option: 'Padrastro'
        },
        {
          option: 'Madrastra'
        },
        {
          option: 'Vecinos'
        },
        {
          option: 'Otro'
        }
      ]
      Relationship.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { Relationship }
