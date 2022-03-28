import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'
import aggregatePaginate from 'mongoose-aggregate-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const groupAssignmentFields = {
  name: {
    type: String,
    required: [true, 'is required']
  },
  service: { type: ObjectId, required: true, ref: 'service' },
  classroom: { type: ObjectId, required: true, ref: 'classroom' },
  titular: { type: ObjectId, required: true, ref: 'user' },
  assistant: [{ type: ObjectId, required: true, ref: 'user' }],
  planningId: { type: ObjectId, ref: 'planning', default: null },
  historical: [{ type: ObjectId, ref: 'historical' }],
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const groupAssignmentSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(groupAssignmentFields, groupAssignmentSchemaConfig)
schema.plugin(mongoosePaginate)
schema.plugin(aggregatePaginate)
export default mongoose.model('groupAssignment', schema)
