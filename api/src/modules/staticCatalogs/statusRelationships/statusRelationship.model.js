import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'

mongoose.plugin(slug)

const Schema = mongoose.Schema

export const statusRelationshipFields = {
  option: {
    type: String,
    required: [true, 'is required'],
    trim: true
  }
}

export const statusRelationshipSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(statusRelationshipFields, statusRelationshipSchemaConfig)

const StatusRelationship = mongoose.model('statusRelationship', schema)

// Creating default data in DB if it doesn't exist
StatusRelationship.createCollection(collection => {
  StatusRelationship.find({}, function (error, docs) {
    if (error) throw new Error(error)
    if (docs.length === 0) {
      const data = [
        {
          option: 'Estable'
        },
        {
          option: 'Integrado'
        },
        {
          option: 'Satisfactoria'
        },
        {
          option: 'Complicada'
        },
        {
          option: 'Problematica'
        },
        {
          option: 'Inestable'
        },
        {
          option: 'Dificil'
        },
        {
          option: 'Agresiva'
        },
        {
          option: 'Insegura'
        }
      ]
      StatusRelationship.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { StatusRelationship }
