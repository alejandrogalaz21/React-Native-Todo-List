import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'

mongoose.plugin(slug)

const Schema = mongoose.Schema

export const ifdResultFields = {
  option: {
    type: String,
    required: [true, 'is required'],
    trim: true
  }
}

export const ifdResultSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(ifdResultFields, ifdResultSchemaConfig)
const IfdResult = mongoose.model('ifdResult', schema)

// Creating default data in DB if it doesn't exist
IfdResult.createCollection(collection => {
  IfdResult.find({}, function (error, docs) {
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
      IfdResult.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { IfdResult }
