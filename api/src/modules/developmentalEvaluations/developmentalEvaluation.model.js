import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'
import aggregatePaginate from 'mongoose-aggregate-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const developmentalEvaluationFields = {
  infant: { type: ObjectId, ref: 'infant' },
  questionnaireApplicator: { type: ObjectId, ref: 'evaluationPerson' },
  evaluationType: {
    type: String,
    required: [true, 'is required']
  },
  evaluationTotal: {
    type: Number,
    required: [true, 'is required']
  },
  lastStatus: {
    type: String,
    required: [true, 'is required']
  },
  evaluationNextNumber: {
    type: Number,
    required: [true, 'is required']
  },
  dateOfApplication: {
    type: Date
  },
  dateOfResultsCapture: {
    type: Date
  },
  infantAge: {
    type: String,
    required: [true, 'is required']
  },
  asq: {
    type: Boolean,
    default: false,
    required: [true, 'is required']
  },
  asqQuestionnaireName: {
    type: String,
    required: false
  },
  communication: {
    type: String,
    required: false
  },
  thickMotor: {
    type: String,
    required: false
  },
  fineMotor: {
    type: String,
    required: false
  },
  problemSolving: {
    type: String,
    required: false
  },
  socialPerson: {
    type: String,
    required: false
  },
  finalResultAsq: {
    type: String,
    required: false
  },
  idi: {
    type: Boolean,
    default: false,
    required: [true, 'is required']
  },
  cognitive: {
    type: String,
    required: false
  },
  linguistics: {
    type: String,
    required: false
  },
  socioemotional: {
    type: String,
    required: false
  },
  adaptive: {
    type: String,
    required: false
  },
  physical: {
    type: String,
    required: false
  },
  finalResultIdi: {
    type: String,
    required: false
  },
  ifd: {
    type: Boolean,
    default: false,
    required: [true, 'is required']
  },
  attentionHyperactivityImpulsivity: {
    type: String,
    required: false
  },
  reasoningProcess: {
    type: String,
    required: false
  },
  memory: {
    type: String,
    required: false
  },
  executiveFunction: {
    type: String,
    required: false
  },
  interpersonalSkills: {
    type: String,
    required: false
  },
  emotionalMaturity: {
    type: String,
    required: false
  },
  coordinationOfMotorFunction: {
    type: String,
    required: false
  },
  communicationIfd: {
    type: String,
    required: false
  },
  readingAndComprehensionSkills: {
    type: String,
    required: false
  },
  writingAndSpelling: {
    type: String,
    required: false
  },
  mathematicalOperations: {
    type: String,
    required: false
  },
  finalResultIfd: {
    type: String,
    required: false
  },
  mchat: {
    type: Boolean,
    default: false,
    required: [true, 'is required']
  },
  mchatFirstResult: { type: Number, required: false },
  mchatResult: {
    type: String,
    required: false
  },
  esasen: {
    type: Boolean,
    default: false,
    required: [true, 'is required']
  },
  attention: {
    type: String,
    required: false
  },
  internalization: {
    type: String,
    required: false
  },
  outsourcing: {
    type: String,
    required: false
  },
  mentalHealth: {
    type: String,
    required: false
  },
  esasenFinalResult: {
    type: String,
    required: false
  },
  sdqCas: {
    type: Boolean,
    default: false,
    required: [true, 'is required']
  },
  emotionalProblems: {
    type: Number,
    required: false
  },
  behaviorProblems: {
    type: Number,
    required: false
  },
  hyperactivityProblems: {
    type: Number,
    required: false
  },
  peerProblems: {
    type: Number,
    required: false
  },
  prosocialConduit: {
    type: Number,
    required: false
  },
  generalDifficulties: {
    type: Number,
    required: false
  },
  sdqCasResults: {
    type: String,
    required: false
  },
  asqSe: {
    type: Boolean,
    default: false,
    required: [true, 'is required']
  },
  asqSeType: {
    type: String,
    trim: true,
    required: false
  },
  asqSeFirstResult: {
    type: Number,
    trim: true,
    required: false
  },
  asqSeResults: {
    type: String,
    trim: true,
    required: false
  },
  otherQuestionnaire: {
    type: Boolean,
    default: false,
    required: [true, 'is required']
  },
  otherQuestionnaireName: {
    type: String,
    required: false
  },
  otherResult: {
    type: String,
    required: false
  },
  observations: {
    type: String,
    required: false
  },
  evaluationStatus: {
    type: String,
    required: false
  },
  nextMonthEvaluation: {
    type: Date,
    required: false
  },
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const developmentalEvaluationSchemaConfig = {
  versionKey: false,
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(developmentalEvaluationFields, developmentalEvaluationSchemaConfig)
schema.virtual('resultColor').get(function () {
  if (this.asqSeResults === 'Tipico') {
    return '#688E26'
  } else if (this.asqSeResults === 'Monitoreo') {
    return '#FBB337'
  } else if (this.asqSeResults === 'Referencia') {
    return '#A10702'
  }
})
schema.plugin(mongoosePaginate)
schema.plugin(aggregatePaginate)
export default mongoose.model('developmentalEvaluation', schema)
