import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const costFields = {
  name: {
    type: String,
    required: [true, 'is required'],
    unique: true
  },
  payment: { type: ObjectId, ref: 'payment' },
  amount: {
    type: Number,
    required: [true, 'is required']
  },
  modality: { type: ObjectId, required: [true, 'is required'], ref: 'modality' },
  center: { type: ObjectId, required: [true, 'is required'], ref: 'center' },
  service: { type: ObjectId, required: [true, 'is required'], ref: 'service' },
  historical: [{ type: ObjectId, ref: 'historical' }],
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const costSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(costFields, costSchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('cost', schema)
