import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const healthFields = {
  infant: { type: ObjectId, ref: 'infant' },
  allergyType: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  allergy: {
    type: String
  },
  allergicMedication: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  medicine: {
    type: String
  },
  imss: {
    type: Number
  },
  issste: {
    type: Number
  },
  insabi: {
    type: Number
  },
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const healthSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(healthFields, healthSchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('health', schema)