import mongoose from 'mongoose'
// import { MongooseAutoIncrementID } from 'mongoose-auto-increment-reworked'

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId
const schemaConfig = {
  strict: true,
  versionKey: false,
  toJSON: { virtuals: true },
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(
  {
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
  },
  schemaConfig
)

export default mongoose.model('inscription', schema)
