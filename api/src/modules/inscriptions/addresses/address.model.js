import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const addressFields = {
  inscription: { type: ObjectId, required: [true, 'is required'], ref: 'inscription' },
  phone: {
    type: Number,
    required: [true, 'is required']
  },
  street: {
    type: String,
    required: [true, 'is required'],
    trim: true
  },
  interiorNumber: {
    type: Number,
    required: [true, 'is required']
  },
  outdoorNumber: {
    type: Number,
    required: [true, 'is required']
  },
  suburb: {
    type: String,
    required: [true, 'is required'],
    trim: true
  },
  municipality: {
    type: String,
    required: [true, 'is required'],
    trim: true
  },
  state: {
    type: String,
    required: [true, 'is required'],
    trim: true
  },
  country: {
    type: String,
    required: [true, 'is required'],
    trim: true
  },
  cp: {
    type: String,
    required: [true, 'is required'],
    trim: true
  },
  historical: [{ type: ObjectId, ref: 'historical' }],
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const addressSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(addressFields, addressSchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('address', schema)
