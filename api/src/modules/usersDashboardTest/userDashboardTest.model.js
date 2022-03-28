import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema

export const userDashboardTestFields = {
  name: {
    type: String,
    required: [true, 'is required']
  },
  lastName: {
    type: String,
    required: [true, 'is required']
  },
  mail: {
    type: String,
    required: [true, 'is required']
  },
  password: {
    type: String,
    required: [true, 'is required']
  },
  gender: {
    type: String,
    required: [true, 'is required']
  },
  role: {
    type: String,
    required: [true, 'is required']
  },
  gta: {
    type: String,
    required: [true, 'is required']
  },
  company: {
    type: String,
    required: [true, 'is required']
    },
    nationality: {
      type: String
      },
  stateResidency: {
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

export const userDashboardTestSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(userDashboardTestFields, userDashboardTestSchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('userDashboardTest', schema)