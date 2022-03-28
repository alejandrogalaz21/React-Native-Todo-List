import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'

mongoose.plugin(slug)

const Schema = mongoose.Schema

export const interestFields = {
  option: {
    type: String,
    required: [true, 'is required'],
    trim: true
  }
}

export const interestSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(interestFields, interestSchemaConfig)
const Interest = mongoose.model('interest', schema)

// Creating default data in DB if it doesn't exist
Interest.createCollection(collection => {
  Interest.find({}, function (error, docs) {
    if (error) throw new Error(error)
    if (docs.length === 0) {
      const data = [
        {
          option: 'SI, lo busca y conviven con frecuencia'
        },
        {
          option: 'Si, pero es inestable, no es constante'
        },
        {
          option: 'No muestra interés ni responsabilidad'
        },
        {
          option:
            'Si muestra interés pero la madre o padre que cuida al menor no permite la convivencia por temor a un trato negligente'
        },
        {
          option:
            'Si muestra interés pero la madre o padre que cuida al menor no permite la convivencia porque no aporta económicamente para la manutención'
        }
      ]
      Interest.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { Interest }
