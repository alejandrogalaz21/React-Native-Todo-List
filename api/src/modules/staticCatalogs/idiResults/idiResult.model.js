import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'

mongoose.plugin(slug)

const Schema = mongoose.Schema

export const idiResultFields = {
  option: {
    type: String,
    required: [true, 'is required'],
    trim: true
  }
}

export const idiResultSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(idiResultFields, idiResultSchemaConfig)
const IdiResult = mongoose.model('idiResult', schema)

// Creating default data in DB if it doesn't exist
IdiResult.createCollection(collection => {
  IdiResult.find({}, function (error, docs) {
    if (error) throw new Error(error)
    if (docs.length === 0) {
      const data = [
        {
          option: 'Tipico'
        },
        {
          option: 'Monitoreo'
        },
        {
          option: 'Referencia'
        }
      ]
      IdiResult.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { IdiResult }
