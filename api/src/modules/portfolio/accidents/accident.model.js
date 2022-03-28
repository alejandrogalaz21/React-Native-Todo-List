import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'
import aggregatePaginate from 'mongoose-aggregate-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const accidentFields = {
  infant: { type: ObjectId, ref: 'infant' },
  date: {
    type: Date
  },
  time: {
    type: String,
    required: [true, 'is required']
  },
  prevalence: {
    type: String,
    enum: ['Primera vez', 'Recurrente']
  },
  happenedOp1: {
    type: Boolean,
    default: false
  },
  happenedOp2: {
    type: Boolean,
    default: false
  },
  happenedOp3: {
    type: Boolean,
    default: false
  },
  happenedOp4: {
    type: Boolean,
    default: false
  },
  happenedOp5: {
    type: Boolean,
    default: false
  },
  happenedOp6: {
    type: Boolean,
    default: false
  },
  happenedOp7: {
    type: Boolean,
    default: false
  },
  happenedOp8: {
    type: Boolean,
    default: false
  },
  happenedOp9: {
    type: Boolean,
    default: false
  },
  happenedOp10: {
    type: Boolean,
    default: false
  },
  happenedOp11: {
    type: Boolean,
    default: false
  },
  happenedJustify: {
    type: String
  },
  caused1: {
    type: Boolean,
    default: false
  },
  caused2: {
    type: Boolean,
    default: false
  },
  caused3: {
    type: Boolean,
    default: false
  },
  caused4: {
    type: Boolean,
    default: false
  },
  caused5: {
    type: Boolean,
    default: false
  },
  caused6: {
    type: Boolean,
    default: false
  },
  caused7: {
    type: Boolean,
    default: false
  },
  caused8: {
    type: Boolean,
    default: false
  },
  causedJustify: {
    type: String
  },
  consequence1: {
    type: Boolean,
    default: false
  },
  consequence2: {
    type: Boolean,
    default: false
  },
  consequence3: {
    type: Boolean,
    default: false
  },
  consequence4: {
    type: Boolean,
    default: false
  },
  consequence5: {
    type: Boolean,
    default: false
  },
  consequence6: {
    type: Boolean,
    default: false
  },
  consequence7: {
    type: Boolean,
    default: false
  },
  consequence8: {
    type: Boolean,
    default: false
  },
  consequence9: {
    type: Boolean,
    default: false
  },
  consequence10: {
    type: Boolean,
    default: false
  },
  consequenceJustify: {
    type: String
  },
  place1: {
    type: Boolean,
    default: false
  },
  place2: {
    type: Boolean,
    default: false
  },
  place3: {
    type: Boolean,
    default: false
  },
  place4: {
    type: Boolean,
    default: false
  },
  place5: {
    type: Boolean,
    default: false
  },
  place6: {
    type: Boolean,
    default: false
  },
  place7: {
    type: Boolean,
    default: false
  },
  place8: {
    type: Boolean,
    default: false
  },
  place9: {
    type: Boolean,
    default: false
  },
  place10: {
    type: Boolean,
    default: false
  },
  place11: {
    type: Boolean,
    default: false
  },
  place12: {
    type: Boolean,
    default: false
  },
  place13: {
    type: Boolean,
    default: false
  },
  placeJustify: {
    type: String
  },
  gravity: {
    type: String,
    enum: ['Leve', 'Moderado', 'Grave']
  },
  aggressor: {
    type: String,
    enum: ['Padre', 'Madre', 'Padrastro', 'Madrastra', 'Personal de Villas', 'Ninguno', 'Otro']
  },
  aggressorJustify: {
    type: String
  },
  publicMinistry: {
    type: Boolean,
    default: false
  },
  dateOfComplaint: {
    type: Date
  },
  medicalCare1: {
    type: Boolean,
    default: false
  },
  medicalCare2: {
    type: Boolean,
    default: false
  },
  medicalCare3: {
    type: Boolean,
    default: false
  },
  medicalCare4: {
    type: Boolean,
    default: false
  },
  medicalCareJustify: {
    type: String
  },
  medicalUnit: {
    type: String
  },
  needMedicalCare: {
    type: Boolean,
    default: false
  },
  dateOfMedicalAttention: {
    type: Date
  },
  timeOfMedicalAttention: {
    type: String
  },
  diagnosis: {
    type: String
  },
  urgency1: {
    type: Boolean,
    default: false
  },
  urgency2: {
    type: Boolean,
    default: false
  },
  urgency3: {
    type: Boolean,
    default: false
  },
  urgency4: {
    type: Boolean,
    default: false
  },
  disability: {
    type: Boolean,
    default: false
  },
  disabilityJustify: {
    type: String
  },
  life: {
    type: Boolean,
    default: false
  },
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const accidentSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(accidentFields, accidentSchemaConfig)
schema.plugin(mongoosePaginate)
schema.plugin(aggregatePaginate)
export default mongoose.model('accident', schema)
