import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'

mongoose.plugin(slug)

const Schema = mongoose.Schema

export const interpersonalFields = {
  option: {
    type: String,
    required: [true, 'is required'],
    trim: true
  }
}

export const interpersonalSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(interpersonalFields, interpersonalSchemaConfig)
const Interpersonal = mongoose.model('interpersonal', schema)

// Creating default data in DB if it doesn't exist
Interpersonal.createCollection(collection => {
  Interpersonal.find({}, function (error, docs) {
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
      Interpersonal.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { Interpersonal }
