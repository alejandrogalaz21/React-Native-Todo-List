import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'
import aggregatePaginate from 'mongoose-aggregate-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const parentFields = {
  infant: { type: ObjectId, ref: 'infant' },
  name: {
    type: String,
    required: [true, 'is required']
  },
  lastName: {
    type: String,
    required: [true, 'is required']
  },
  address: {
    type: String,
    required: [true, 'is required']
  },
  homePhone: {
    type: Number,
    required: [true, 'is required']
  },
  cellPhone: {
    type: Number,
    required: [true, 'is required']
  },
  workPhone: {
    type: Number,
    required: [true, 'is required']
  },
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const parentSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(parentFields, parentSchemaConfig)
schema.virtual('fullName').get(function () {
  return this.name + ' ' + this.lastName
})
schema.plugin(mongoosePaginate)
schema.plugin(aggregatePaginate)
export default mongoose.model('parent', schema)