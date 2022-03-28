import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'

mongoose.plugin(slug)

const Schema = mongoose.Schema

export const prevalenceFields = {
  option: {
    type: String,
    required: [true, 'is required'],
    trim: true
  }
}

export const prevalenceSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(prevalenceFields, prevalenceSchemaConfig)
const Prevalence = mongoose.model('prevalence', schema)

// Creating default data in DB if it doesn't exist
Prevalence.createCollection(collection => {
  Prevalence.find({}, function (error, docs) {
    if (error) throw new Error(error)
    if (docs.length === 0) {
      const data = [
        {
          option: 'Primera vez'
        },
        {
          option: 'Recurrente'
        }
      ]
      Prevalence.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { Prevalence }
