import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const canalizationLocationFields = {
  location: {
    type: String,
    required: [true, 'is required']
  },
  historical: [{ type: ObjectId, ref: 'historical' }],
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const canalizationLocationSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(canalizationLocationFields, canalizationLocationSchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('canalizationLocation', schema)