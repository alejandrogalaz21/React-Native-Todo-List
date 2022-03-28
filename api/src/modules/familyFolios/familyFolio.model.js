import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const familyFolioFields = {
  folio: {
    type: String,
    required: [true, 'is required']
  },
  inscription: [ { type: ObjectId, ref: 'inscription' } ],
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const familyFolioSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(familyFolioFields, familyFolioSchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('familyFolio', schema)