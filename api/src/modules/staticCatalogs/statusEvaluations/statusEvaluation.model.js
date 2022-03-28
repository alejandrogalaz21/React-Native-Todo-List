import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'

mongoose.plugin(slug)

const Schema = mongoose.Schema

export const statusEvaluationFields = {
  option: {
    type: String,
    required: [true, 'is required'],
    trim: true
  }
}

export const statusEvaluationSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(statusEvaluationFields, statusEvaluationSchemaConfig)
const StatusEvaluation = mongoose.model('statusEvaluation', schema)

// Creating default data in DB if it doesn't exist
StatusEvaluation.createCollection(collection => {
  StatusEvaluation.find({}, function (error, docs) {
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
      StatusEvaluation.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { StatusEvaluation }
