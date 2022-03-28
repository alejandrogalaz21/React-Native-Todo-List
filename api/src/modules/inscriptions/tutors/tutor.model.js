import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const tutorFields = {
  inscription: { type: ObjectId, required: true, ref: 'inscription' },
  typeTutor: {
    type: String,
    required: [true, 'is required'],
    enum: ['Madre', 'Padre', 'Tutor']
  },
  name: { type: String, required: [true, 'is required'], trim: true },
  lastName: { type: String, required: [true, 'is required'], trim: true },
  motherLastName: { type: String, required: [true, 'is required'], trim: true },
  relationship: {
    type: ObjectId,
    ref: 'relationship',
    required: function () {
      return this.typeTutor === 'Tutor'
    }
  },
  economical: { type: ObjectId, required: true, ref: 'economical' },
  phone: { type: Number, required: [true, 'is required'] },
  email: { type: String, required: [true, 'is required'], trim: true },
  dateOfBirth: { type: Date, required: [true, 'is required'] },
  homePhone: { type: Number, required: [true, 'is required'] },
  workPhone: { type: Number, required: [true, 'is required'] },
  company: { type: String, required: [true, 'is required'], trim: true },
  qAddress: {
    type: Boolean,
    required: function () {
      return this.typeTutor === 'Tutor'
    }
  },
  address: { type: String, required: [true, 'is required'], trim: true },
  ineTutor: {
    type: ObjectId,
    ref: 'file',
    default: null
    // required: function () {
    //   return this.typeTutor === 'Tutor'
    // }
  },
  certificateTutor: {
    type: ObjectId,
    ref: 'file',
    default: null
    // required: function () {
    //   return this.typeTutor === 'Tutor'
    // }
  },
  qTutor1: {
    type: Boolean,
    required: function () {
      return this.typeTutor === 'Tutor'
    }
  },
  qTutor2: {
    type: String,
    enum: ['Padre', 'Madre', 'Ambos'],
    required: function () {
      return this.typeTutor === 'Tutor'
    }
  },
  qParent1: {
    type: Boolean,
    required: function () {
      return this.typeTutor === 'Padre' || this.typeTutor === 'Madre'
    }
  },
  qParent2: {
    type: Boolean,
    required: function () {
      return this.typeTutor === 'Padre' || this.typeTutor === 'Madre'
    }
  },
  civilStatus: {
    type: ObjectId,
    ref: 'civilStatus',
    required: function () {
      return this.typeTutor === 'Padre' || this.typeTutor === 'Madre'
    }
  },
  religion: {
    type: ObjectId,
    ref: 'religion',
    required: function () {
      return this.typeTutor === 'Padre' || this.typeTutor === 'Madre'
    }
  },
  historical: [{ type: ObjectId, ref: 'historical' }],
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const tutorSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(tutorFields, tutorSchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('tutor', schema)
