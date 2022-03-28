import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const riskFactorFields = {
  infant: { type: ObjectId, ref: 'infant' },
  beforeWeeks: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  complications: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  caesarean: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  intensiveStay: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  seriousInfections: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  multiplePregnancy: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  congenitalAbnormalities: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  weightLessThan: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  diseasesAfterBirth: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  lackPrenatalCare: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  substanceUse: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  diseasesAfterBirthOther: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  nutritionProblems: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  hearingProblems: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  visualProblems: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  mentalProblems: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  momAge: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  motherSchooling: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  adoption: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  limitedAbility: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  sonDoubts: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  sonDoubtsPerson: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  speech: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  understanding: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  handsUse: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  legsArmsUse: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  relationships: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  autodidact: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  schoolSkills: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  therapyNeed: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  typeOfTherapy: {
    type: String
  },
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const riskFactorSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(riskFactorFields, riskFactorSchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('riskFactor', schema)
