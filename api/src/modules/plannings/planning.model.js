import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'
import { ErrorHandler } from '../../helpers/error.helper'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const planningFields = {
  name: { type: String, required: [true, 'is required'], unique: true },
  center: { type: ObjectId, required: true, ref: 'center' },
  groupAssignment: [{ type: ObjectId, required: true, ref: 'groupAssignment' }],
  historical: [{ type: ObjectId, ref: 'historical' }],
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const planningSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(planningFields, planningSchemaConfig)
schema.plugin(mongoosePaginate)
schema.post('validate', async function ({ name }) {
  if (await mongoose.models.planning.exists({ name }))
    throw new ErrorHandler({
      message: 'Nombre de planeación repetida'
    })
})

schema.post('validate', async function ({ groupAssignment }) {
  if (await mongoose.models.planning.exists({ groupAssignment }))
    throw new ErrorHandler({
      message: 'Grupo ya asignado a otra planeación'
    })
})
export default mongoose.model('planning', schema)
