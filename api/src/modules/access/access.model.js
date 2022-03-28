import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const accessFields = {
  infant: {
    type: ObjectId,
    ref: 'infant',
    required: [true, 'is required']
  },
  parent: {
    type: ObjectId,
    ref: 'parent',
   },
  accessType: {
    type: String,
    enum: ['Entrada', 'Salida']
  },
  observations: {
    type: String
  },
  hour: {
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

export const accessSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(accessFields, accessSchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('access', schema)
