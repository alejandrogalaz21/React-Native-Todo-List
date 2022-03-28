import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'

mongoose.plugin(slug)

const Schema = mongoose.Schema

export const frustrationFields = {
  option: {
    type: String,
    required: [true, 'is required'],
    trim: true
  }
}

export const frustrationSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(frustrationFields, frustrationSchemaConfig)
const Frustration = mongoose.model('frustration', schema)

// Creating default data in DB if it doesn't exist
Frustration.createCollection(collection => {
  Frustration.find({}, function (error, docs) {
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
      Frustration.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { Frustration }
