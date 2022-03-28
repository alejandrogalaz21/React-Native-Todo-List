import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'
import aggregatePaginate from 'mongoose-aggregate-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const infantFields = {
  infant: { type: ObjectId, ref: 'inscription' },
  nutrition: { type: ObjectId, ref: 'nutrition', default: null },
  socioeconomic: { type: ObjectId, ref: 'socioeconomic', default: null },
  health: { type: ObjectId, ref: 'health', default: null },
  parent: [{ type: ObjectId, ref: 'parent', default: null }],
  documentation: [{ type: ObjectId, ref: 'partnerDocumentation', default: null }],
  vaccination: { type: ObjectId, ref: 'vaccination', default: null },
  weight: { type: ObjectId, ref: 'weight', default: null },
  ailment: [{ type: ObjectId, ref: 'partnerAilment', default: null }],
  accident: [{ type: ObjectId, ref: 'accident', default: null }],
  environment: { type: ObjectId, ref: '', default: null },
  workplan: { type: ObjectId, ref: '', default: null },
  riskFactor: { type: ObjectId, ref: 'riskFactor', default: null },
  canalization: { type: ObjectId, ref: '', default: null },
  graduate: { type: ObjectId, ref: '', default: null },
  reentry: { type: ObjectId, ref: '', default: null },
  dropout: { type: ObjectId, ref: '', default: null },
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  },
  historical: [{ type: ObjectId, ref: 'historical' }]
}

export const infantSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(infantFields, infantSchemaConfig)
schema.plugin(mongoosePaginate)
schema.plugin(aggregatePaginate)

export default mongoose.model('infant', schema)
