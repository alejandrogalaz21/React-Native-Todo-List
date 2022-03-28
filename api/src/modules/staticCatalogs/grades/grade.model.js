import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'

mongoose.plugin(slug)

const Schema = mongoose.Schema

export const gradeFields = {
  option: {
    type: String,
    required: [true, 'is required'],
    trim: true
  }
}

export const gradeSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(gradeFields, gradeSchemaConfig)
const Grade = mongoose.model('grade', schema)

// Creating default data in DB if it doesn't exist
Grade.createCollection(collection => {
  Grade.find({}, function (error, docs) {
    if (error) throw new Error(error)
    if (docs.length === 0) {
      const data = [
        {
          option: '1o prescolar'
        },
        {
          option: '2o prescolar'
        },
        {
          option: '3o prescolar'
        }
      ]
      Grade.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { Grade }
