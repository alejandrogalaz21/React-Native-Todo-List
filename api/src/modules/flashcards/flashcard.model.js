import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const flashcardFields = {
  title: {
    type: String,
    required: [true, 'is required']
  },
  description: {
    type: String,
    required: [true, 'is required']
  },
  rank: {
    type: Number,
    required: [false, 'is required']
  },
  creationdate: {
    type: Date
  },
  implentation: {
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

export const flashcardSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(flashcardFields, flashcardSchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('flashcard', schema)