import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId
const schemaConfig = {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
}

const schema = new Schema(
  {
    mailer: {
      port: { type: Number, required: true },
      host: { type: String, required: true, trim: true },
      auth: {
        user: { type: String, required: true, trim: true },
        pass: { type: String, required: true, trim: true }
      }
    },
    settings: {
      name: { type: String, required: true },
      logo: { type: ObjectId, ref: 'file', required: true }
    },
    contact: {
      address: { type: String, required: true },
      phone: { type: String, required: true },
      email: { type: String, required: true }
    },
    historical: [{ type: ObjectId, ref: 'historical' }],
    active: { type: Boolean, default: true, unique: true },
    createdBy: { type: ObjectId, ref: 'user', default: null }
  },
  schemaConfig
)

export default mongoose.model('configuration', schema)
