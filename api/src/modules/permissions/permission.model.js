import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId
const schemaConfig = { timestamps: true }

const schema = new Schema(
  {
    module: { type: ObjectId, ref: 'module', required: true },
    user: { type: ObjectId, ref: 'user', required: true },
    center: { type: ObjectId, ref: 'center', required: true },
    create: { type: Boolean, default: false }, // POST
    read: { type: Boolean, default: false }, // GET
    update: { type: Boolean, default: false }, // PUT
    delete: { type: Boolean, default: false } // DELETE
  },
  schemaConfig
)

export const Permission = mongoose.model('permission', schema)
export default mongoose.model('permission', schema)
