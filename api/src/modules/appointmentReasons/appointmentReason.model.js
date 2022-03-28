import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const appointmentReasonFields = {
  name: {
    type: String,
    required: [true, 'is required']
  },
  description: {
    type: String,
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

export const appointmentReasonSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(appointmentReasonFields, appointmentReasonSchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('appointmentReason', schema)