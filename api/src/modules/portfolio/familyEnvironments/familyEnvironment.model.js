import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const familyEnvironmentFields = {
  infant: { type: ObjectId, ref: 'infant' },
  pregnancy: {
    type: Boolean,
    default: false,
  },
  motherReaction: {
    type: String,
    enum: ['Aceptación', 'Rechazo', 'Preocupación']
  },
  fatherReaction: {
    type: String,
    enum: ['Aceptación', 'Rechazo', 'Preocupación']
  },
  motherGrade: {
    type: ObjectId,
    ref: 'academicLevel'
  },
  fatherGrade: {
    type: ObjectId,
    ref: 'academicLevel'
  },
  live: {
    type: Boolean,
    default: false,
  },
  civilStatus: {
    type: ObjectId,
    ref: 'civilStatus'
  },
  relationship: {
    type: Boolean,
    defaul: false,
  },
  relationship2: {
    type: Boolean,
    defaul: false,
  },
  relationship3: {
    type: Boolean,
    defaul: false,
  },
  relationship4: {
    type: Boolean,
    defaul: false,
  },
  relationship5: {
    type: Boolean,
    defaul: false,
  },
  relationship6: {
    type: Boolean,
    defaul: false,
  },
  relationship7: {
    type: Boolean,
    defaul: false,
  },
  relationship8: {
    type: Boolean,
    defaul: false,
  },
  relationship9: {
    type: Boolean,
    defaul: false,
  },
  workMother: {
    type: Boolean,
    default: false,
  },
  motherHours: {
    type: Number,
    required: [true, 'is required']
  },
  workFather: {
    type: Boolean,
    default: false,
  },
  fatherHours: {
    type: Number,
    required: [true, 'is required']
  },
  entrance: {
    type: Number,
    required: [true, 'is required']
  },
  people: {
    type: String,
    required: [true, 'is required']
  },
  population: {
    type: Number,
    required: [true, 'is required']
  },
  bedrooms: {
    type: Number,
    required: [true, 'is required']
  },
  minorAge: {
    type: Number,
    required: [true, 'is required']
  },
  tutor: {
    type: String,
    enum: ['Padre', 'Madre', 'Ninguno', 'Otro']
  },
  tutorJustification: {
    type: String,
    required: [true, 'is required']
  },
  workTutor: {
    type: Boolean,
    default: false,
  },
  tutorHours: {
    type: Number,
    required: [true, 'is required']
  },
  family: { type: ObjectId, ref: 'relationship' },
  interest: { type: ObjectId, ref: 'interest' },
  courtOrder: {
    type: Boolean,
    default: false,
  },
  tutorRelationship: {
    type: Boolean,
    default: false,
  },
  tutorLive: {
    type: Boolean,
    default: false,
  },
  timeRelated: {
    type: String,
    required: [true, 'is required']
  },
  currentCouple: {
    type: String,
    required: [true, 'is required']
  },
  halfBrothers: {
    type: String,
    required: [true, 'is required']
  },
  mainTutor: { type: ObjectId, ref: 'relationship' },
  mainTutorJustification: {
    type: String,
    required: [true, 'is required']
  },
  mainTutorRelationship: {
    type: String,
    required: [true, 'is required']
  },
  unexpectedSituation: {
    type: Boolean,
    default: false,
  },
  situations: { type: ObjectId, ref: 'situation' },
  situationJustification: {
    type: String,
    required: [true, 'is required']
  },
  sleepingTime: {
    type: Boolean,
    default: false,
  },
  timeToSleep: {
    type: Number,
    required: [true, 'is required']
  },
  sharedBed: {
    type: Boolean,
    default: false,
  },
  sharedBedJustification: {
    type: String,
    required: [true, 'is required']
  },
  sharedRoom: {
    type: Boolean,
    default: false,
  },
  familyHealth: {
    type: Boolean,
    default: false,
  },
  relationshipKid: { type: ObjectId, ref: 'relationship' },
  suffering: {
    type: String,
    required: [true, 'is required']
  },
  alcoholProblems: {
    type: Boolean,
    default: false,
  },
  relationshipKid2: { type: ObjectId, ref: 'relationship' },
  mentalIllness: {
    type: Boolean,
    default: false,
  },
  mentalIllnessJustification: {
    type: String,
    required: [true, 'is required']
  },
  relationshipKid3: { type: ObjectId, ref: 'relationship' },
  depression: {
    type: Boolean,
    default: false,
  },
  anger: {
    type: Boolean,
    default: false,
  },
  relationshipKid4: { type: ObjectId, ref: 'relationship' },
  cellPhone: {
    type: Boolean,
    default: false,
  },
  inappropriateContent: {
    type: Boolean,
    default: false,
  },
  obedience: {
    type: Boolean,
    default: false,
  },
  tantrum: {
    type: Boolean,
    default: false,
  },
  rules: {
    type: Boolean,
    default: false,
  },
  trust: {
    type: Boolean,
    default: false,
  },
  excessiveWorry: {
    type: Boolean,
    default: false,
  },
  availability: {
    type: Boolean,
    default: false,
  },
  son: {
    type: Boolean,
    default: false,
  },
  affected: {
    type: Boolean,
    default: false,
  },
  brothers: {
    type: Number,
    required: [true, 'is required']
  },
  placeSon: {
    type: Number,
    required: [true, 'is required']
  },
  pregnantMother: {
    type: Boolean,
    default: false,
  },
  weeks: {
    type: Boolean,
    default: false,
  },
  multiplePregnancy: {
    type: Boolean,
    default: false,
  },
  authorization: {
    type: Boolean,
    default: false,
  },
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const familyEnvironmentSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(familyEnvironmentFields, familyEnvironmentSchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('familyEnvironment', schema)