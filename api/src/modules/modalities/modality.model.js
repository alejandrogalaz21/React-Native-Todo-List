import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const modalityFields = {
  name: {
    type: String,
    required: [true, 'is required'],
    trim: true,
    unique: true
  },
  description: {
    type: String,
    required: [true, 'is required'],
    trim: true
  },
  historical: [{ type: ObjectId, ref: 'historical' }],
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const modalitySchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(modalityFields, modalitySchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('modality', schema)
