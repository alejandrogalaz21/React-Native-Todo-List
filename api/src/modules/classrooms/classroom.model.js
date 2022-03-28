import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const classroomFields = {
  name: {
    type: String,
    required: [true, 'is required']
  },
  classroom: {
    type: String,
    required: [true, 'is required']
  },
  cant: {
    type: Number,
    required: [true, 'is required']
  },
  groupAssignmentId: { type: ObjectId, ref: 'groupAssignment', default: null },
  historical: [{ type: ObjectId, ref: 'historical' }],
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const classroomSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(classroomFields, classroomSchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('classroom', schema)
