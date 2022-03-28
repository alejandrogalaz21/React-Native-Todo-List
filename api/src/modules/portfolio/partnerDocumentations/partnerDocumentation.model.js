import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const partnerDocumentationFields = {
  infant: { type: ObjectId, ref: 'infant' },
  name: { type: String, required: [true, 'is required'] },
  file: { type: ObjectId, ref: 'file' },
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const partnerDocumentationSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(partnerDocumentationFields, partnerDocumentationSchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('partnerDocumentation', schema)