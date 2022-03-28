import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const environmentFields = {
  inscription: { type: ObjectId, required: true, ref: 'inscription' },
  q1: { type: Boolean, required: true },
  q2: { type: Boolean, required: true },
  q3: { type: Boolean, required: true },
  activity: [{ type: ObjectId, ref: 'activity' }],
  relationship3: { type: ObjectId, ref: 'relationship' },
  q4: { type: Boolean, required: true },
  relationship4: { type: ObjectId, ref: 'relationship' },
  q5: { type: Boolean, required: true },
  relationship5: { type: ObjectId, ref: 'relationship' },
  historical: [{ type: ObjectId, ref: 'historical' }],
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const environmentSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(environmentFields, environmentSchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('environment', schema)
