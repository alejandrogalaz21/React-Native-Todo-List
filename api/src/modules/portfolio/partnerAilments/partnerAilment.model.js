import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'
import aggregatePaginate from 'mongoose-aggregate-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const partnerAilmentFields = {
  infant: { type: ObjectId, ref: 'infant' },
  date: {
    type: Date
  },
  time: {
    type: String
  },
  groupAssignment: { type: ObjectId, ref: 'groupAssignment' },
  symptom: {
    type: String,
    required: [true, 'is required']
  },
  action: {
    type: String,
    required: [true, 'is required']
  },
  medicalRequest: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  diagnosis: {
    type: String,
    required: [true, 'is required']
  },
  accident: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  suffering: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  suspension: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const partnerAilmentSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(partnerAilmentFields, partnerAilmentSchemaConfig)
schema.plugin(mongoosePaginate)
schema.plugin(aggregatePaginate)
export default mongoose.model('partnerAilment', schema)