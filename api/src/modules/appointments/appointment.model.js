import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const appointmentFields = {
  infant: {
    type: ObjectId,
    ref: 'infant',
    required: [true, 'is required']
  },
  psychologist: {
    type: ObjectId,
    ref: 'user',
    required: [true, 'is required']
  },
  reason: {
    type: ObjectId,
    ref: 'appointmentReason',
    required: [true, 'is required']
  },
  startHour: {
    type: Date,
    required: [true, 'is required']
  },
  endHour: {
    type: Date,
    required: [true, 'is required']
  },
  historical: { type: ObjectId, ref: 'historical' },
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const appointmentSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(appointmentFields, appointmentSchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('appointment', schema)
