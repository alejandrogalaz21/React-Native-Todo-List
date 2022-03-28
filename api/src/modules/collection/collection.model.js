import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'
import aggregatePaginate from 'mongoose-aggregate-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const collectionFields = {
  inscription: { type: ObjectId, ref: 'inscription' },
  name: { type: String, required: true },
  concept: { type: ObjectId, ref: 'debt' },
  amount: { type: Number, default: 0 },
  amountInFavor: { type: Number, default: 0 },
  monthAndYear: { type: Date, required: true },
  date: { type: Date, required: true },
  folio: { type: String, required: false },
  associatedCenter: { type: String, required: true },
  associatedService: { type: String, required: true },
  observations: { type: String, required: true },
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const collectionSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(collectionFields, collectionSchemaConfig)
schema.plugin(mongoosePaginate)
schema.plugin(aggregatePaginate)

export default mongoose.model('collection', schema)
