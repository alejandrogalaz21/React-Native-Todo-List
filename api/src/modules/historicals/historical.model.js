import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const historicalFields = {
  module: {
    type: String,
    required: [true, 'is required']
  },
  title: {
    type: String,
    default: ''
  },
  cause: {
    type: String,
    required: [true, 'is required']
  },
  icon: {
    type: String
  },
  description: {
    type: String,
    required: [true, 'is required']
  },
  document: { type: ObjectId },
  createdBy: { type: ObjectId, ref: 'user', required: true }
}

export const historicalSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(historicalFields, historicalSchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('historical', schema)
