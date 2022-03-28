import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const productFields = {
  name: {
    type: String,
    required: [true, 'is required']
  },
  description: {
    type: String,
    required: [true, 'is required']
  },
  price: {
    type: Number,
    required: [true, 'is required']
  },
  stock: {
    type: Number,
    required: [true, 'is required']
  },
  categorie: { type: ObjectId, ref: '' },
  reviews: [{ type: ObjectId, ref: '' }],
  image: {
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

export const productSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(productFields, productSchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('product', schema)
