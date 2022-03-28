import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const authorizationFields = {
  inscription: { type: ObjectId, ref: 'inscription', require: true },
  cost: { type: ObjectId, ref: 'cost', require: true },
  scholarship: { type: ObjectId, ref: 'scholarship', require: true },
  percentage: { type: ObjectId, ref: 'percentage', require: true },
  bankReference: { type: String, trim: true },
  group: { type: ObjectId, ref: 'groupAssignment', require: true },
  desc: { type: Number, required: [true, 'is required'] },
  historical: [{ type: ObjectId, ref: 'historical' }],
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const authorizationSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(authorizationFields, authorizationSchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('authorization', schema)
