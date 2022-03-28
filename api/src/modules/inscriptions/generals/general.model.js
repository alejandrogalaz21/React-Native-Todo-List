import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const generalFields = {
  folio: { type: String },
  folioPrevious: { type: String, required: [true, 'is required'] },
  center: { type: ObjectId, required: true, ref: 'center' },
  name: { type: String, required: [true, 'is required'], trim: true },
  lastName: { type: String, required: [true, 'is required'], trim: true },
  motherLastName: { type: String, required: [true, 'is required'], trim: true },
  service: { type: ObjectId, required: true, ref: 'service' },
  modality: { type: ObjectId, ref: 'modality' },
  cycle: { type: ObjectId, required: true, ref: 'cycle' },
  grade: { type: ObjectId, required: true, ref: 'grade' },
  familyFolio: { type: String, required: [true, 'is required'], trim: true },
  institution: { type: String, trim: true },
  genre: { type: String, required: true, enum: ['Femenino', 'Masculino'] },
  dateOfBirth: { type: Date, required: true, trim: true },
  curp: { type: String, required: true, trim: true },
  city: { type: String, required: true, trim: true },
  state: { type: String, required: true, trim: true },
  country: { type: String, required: true, trim: true },
  sParent: { type: Boolean, default: false },
  historical: [{ type: ObjectId, ref: 'historical' }],
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const generalSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(generalFields, generalSchemaConfig)
schema.virtual('fullName').get(function () {
  return this.name + ' ' + this.lastName
})
schema.plugin(mongoosePaginate)
export default mongoose.model('general', schema)
