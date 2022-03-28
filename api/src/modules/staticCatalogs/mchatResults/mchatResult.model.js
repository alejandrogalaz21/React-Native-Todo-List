import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'

mongoose.plugin(slug)

const Schema = mongoose.Schema

export const mchatResultFields = {
  option: {
    type: String,
    required: [true, 'is required'],
    trim: true
  }
}

export const mchatResultSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(mchatResultFields, mchatResultSchemaConfig)
const MchatResult = mongoose.model('mchatResult', schema)

// Creating default data in DB if it doesn't exist
MchatResult.createCollection(collection => {
  MchatResult.find({}, function (error, docs) {
    if (error) throw new Error(error)
    if (docs.length === 0) {
      const data = [
        {
          option: 'Riesgo Bajo'
        },
        {
          option: 'Riesgo Medio'
        },
        {
          option: 'Riesgo Alto'
        }
      ]
      MchatResult.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { MchatResult }
