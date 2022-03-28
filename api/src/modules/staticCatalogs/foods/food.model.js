import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'

mongoose.plugin(slug)

const Schema = mongoose.Schema

export const foodFields = {
  option: {
    type: String,
    required: [true, 'is required'],
    trim: true
  }
}

export const foodSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(foodFields, foodSchemaConfig)
const Food = mongoose.model('food', schema)

// Creating default data in DB if it doesn't exist
Food.createCollection(collection => {
  Food.find({}, function (error, docs) {
    if (error) throw new Error(error)
    if (docs.length === 0) {
      const data = [
        {
          option: 'Primero la leche y despues los alimentos solidos'
        },
        {
          option: 'Primero los alimentos solidos y despues la leche'
        }
      ]
      Food.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { Food }
