import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'
import aggregatePaginate from 'mongoose-aggregate-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const inscriptionFields = {
  general: { type: ObjectId, ref: 'general', default: null },
  address: { type: ObjectId, ref: 'address', default: null },
  tutor: { type: ObjectId, ref: 'tutor', default: null },
  ailment: { type: ObjectId, ref: 'ailment', default: null },
  environment: { type: ObjectId, ref: 'environment', default: null },
  documentation: { type: ObjectId, ref: 'documentation', default: null },
  authorization: { type: ObjectId, ref: 'authorization', default: null },
  status: { type: Number, default: 0 }, //0: pendiente, 1: aprovado, 2: rechazado
  positiveBalance: { type: Number, default: 0 },
  debt: { type: Number, default: 0 },
  folio: { type: String },
  familyFolio: { type: String },
  active: { type: Boolean, default: true },
  historical: [{ type: ObjectId, ref: 'historical' }]
}
export const inscriptionSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  toJSON: { virtuals: true }
}

const schema = new Schema(inscriptionFields, inscriptionSchemaConfig)
schema.plugin(mongoosePaginate)
schema.plugin(aggregatePaginate)

export default mongoose.model('inscription', schema)
