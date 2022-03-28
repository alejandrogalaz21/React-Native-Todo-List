import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
mongoose.plugin(slug)

const Schema = mongoose.Schema

export const interviewFields = {
  option: {
    type: String,
    required: [true, 'is required'],
    trim: true
  }
}

export const interviewSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(interviewFields, interviewSchemaConfig)

const Interview = mongoose.model('interview', schema)

// Creating default data in DB if it doesn't exist
Interview.createCollection(collection => {
  Interview.find({}, function (error, docs) {
    if (error) throw new Error(error)
    if (docs.length === 0) {
      const data = [
        {
          option: '1a Evaluacion'
        },
        {
          option: 'Reevaluacion'
        },
        {
          option: 'Entrega de resultados (Niños en referencia)'
        },
        {
          option: 'Cita seguimiento zona de referencia'
        },
        {
          option: 'Cita extraordinaria solicitada por el centro'
        },
        {
          option: 'Cita solicitada por papás'
        }
      ]
      Interview.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { Interview }
