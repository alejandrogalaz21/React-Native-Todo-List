import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'

mongoose.plugin(slug)

const Schema = mongoose.Schema

export const participationFields = {
  option: {
    type: String,
    required: [true, 'is required'],
    trim: true
  }
}

export const participationSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(participationFields, participationSchemaConfig)
const Participation = mongoose.model('participation', schema)

// Creating default data in DB if it doesn't exist
Participation.createCollection(collection => {
  Participation.find({}, function (error, docs) {
    if (error) throw new Error(error)
    if (docs.length === 0) {
      const data = [
        {
          option: 'Triste'
        },
        {
          option: 'Serio'
        },
        {
          option: 'Feliz'
        }
      ]
      Participation.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { Participation }
