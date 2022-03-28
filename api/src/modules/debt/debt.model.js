import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const debtFields = {
  inscription: { type: ObjectId, ref: 'inscription' },
  name: { type: String, required: true },
  conceptName: { type: String, required: true },
  concept: { type: ObjectId, ref: 'cost' },
  amount: { type: Number, required: true },
  date: { type: Date },
  observations: { type: String, required: true },
  collections: [{ type: ObjectId, ref: 'collection' }],
  currentDebt: { type: Number, required: true },
  status: {
    desc: 'debit status',
    type: Boolean,
    default: false, //false= not payed, true= paid out
    required: true
  },
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const debtSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(debtFields, debtSchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('debt', schema)
