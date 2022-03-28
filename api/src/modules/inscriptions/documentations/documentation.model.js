import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const documentationFields = {
  inscription: { type: ObjectId, required: true, ref: 'inscription' },
  kidCertificate: { type: ObjectId, ref: 'file', default: null },
  kidCurp: { type: ObjectId, ref: 'file', default: null },
  vaccinationRecord: { type: ObjectId, ref: 'file', default: null },
  kidThumbnail: { type: ObjectId, ref: 'file', default: null },
  fatherIne: { type: ObjectId, ref: 'file', default: null },
  motherIne: { type: ObjectId, ref: 'file', default: null },
  historical: [{ type: ObjectId, ref: 'historical' }],
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const documentationSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(documentationFields, documentationSchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('documentation', schema)
