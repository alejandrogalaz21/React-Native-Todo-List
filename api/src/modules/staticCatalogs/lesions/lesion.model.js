import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'

mongoose.plugin(slug)

const Schema = mongoose.Schema

export const lesionFields = {
  option: {
    type: String,
    required: [true, 'is required'],
    trim: true
  }
}

export const lesionSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(lesionFields, lesionSchemaConfig)
const Lesion = mongoose.model('lesion', schema)

// Creating default data in DB if it doesn't exist
Lesion.createCollection(collection => {
  Lesion.find({}, function (error, docs) {
    if (error) throw new Error(error)
    if (docs.length === 0) {
      const data = [
        {
          option: 'Leve'
        },
        {
          option: 'Moderada'
        },
        {
          option: 'Grave'
        }
      ]
      Lesion.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { Lesion }
