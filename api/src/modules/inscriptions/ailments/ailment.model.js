import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const ailmentFields = {
  inscription: { type: ObjectId, required: [true, 'is required'], ref: 'inscription' },
  q1: { type: Boolean, required: [true, 'is required'] },
  justify1: { type: String, trim: true },
  q2: { type: Boolean, required: [true, 'is required'] },
  justify2: { type: String, trim: true },
  q3: { type: String, trim: true, required: [true, 'is required'] },
  q4: { type: String, trim: true, required: [true, 'is required'] },
  q5: { type: String, trim: true, required: [true, 'is required'] },
  q6: { type: String, trim: true, required: [true, 'is required'] },
  historical: [{ type: ObjectId, ref: 'historical' }],
  active: { desc: 'is Active tag', type: Boolean, default: true }
}

export const ailmentSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(ailmentFields, ailmentSchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('ailment', schema)
