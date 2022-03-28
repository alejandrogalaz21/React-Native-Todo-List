import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const userFields = {
  name: {
    type: String,
    required: [true, 'is required']
  },
  lastName: {
    type: String,
    required: [true, 'is required']
  },
  age: {
    type: Number,
    required: [true, 'is required']
  },
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const userSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(userFields, userSchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('user', schema)