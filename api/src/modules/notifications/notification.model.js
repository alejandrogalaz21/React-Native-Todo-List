import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const notificationFields = {
  createdBy: {
    type: ObjectId,
    ref: 'user'
  },
  document: {
    type: ObjectId
  },
  type: {
    type: String,
    enum: ['emailNotification', 'notification', 'pushNotification']
  },
  module: {
    type: String
  },
  recipients: [
    {
      admin: { type: ObjectId, ref: 'user' },
      isReading: {
        desc: 'was read tag',
        type: Boolean,
        default: false
      }
    }
  ],
  description: {
    type: String,
    required: [true, 'is required']
  },
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const notificationSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}
export const notificationTypes = {
  emailNotification: 'emailNotification',
  pushNotification: 'pushNotification',
  notification: 'notification'
}

export const notificationModules = {
  // module names
  planning: 'planning',
  classroom: 'classroom',
  position: 'position',
  center: 'center',
  service: 'service',
  cycle: 'cycle',
  payment: 'payment',
  dropout: 'dropout',
  modality: 'modality',
  cost: 'cost',
  canalization: 'canalization',
  canalizationLocation: 'canalizationLocation',
  scholarship: 'scholarship',
  percentage: 'percentage',
  groupAssignment: 'groupAssignment',
  user: 'user',
  debt: 'debt',
  appointment: 'appointment',
  inscription: 'inscription',
  developmentalEvaluation: 'developmentalEvaluation',
  evaluationPerson: 'evaluationPerson',
}
const schema = new Schema(notificationFields, notificationSchemaConfig)
schema.plugin(mongoosePaginate)

export default mongoose.model('notification', schema)
