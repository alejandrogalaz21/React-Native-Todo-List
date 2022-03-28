import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'
import aggregatePaginate from 'mongoose-aggregate-paginate-v2'
import moment from 'moment'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

const testDateUtc = moment.utc()
const localDate = moment(testDateUtc).local()
const date = localDate.format('YYYY-MM-DD')

export const weightFields = {
  infant: { type: ObjectId, ref: 'infant' },
  date: {
    type: Date,
    default: date
  },
  weight: {
    type: Number,
    required: [true, 'is required']
  },
  size: {
    type: Number,
    required: [true, 'is required']
  },
  perimeter: {
    type: Number,
    required: [true, 'is required']
  },
  situation: {
    type: Number
    // 0- Baja severa, 1- Talla baja, 2- Normal, 3- Ideal, 4- Alta
  },
  status: {
    type: Number,
    default: 0
    // 0- Actualizado, 1- Pendiente
  },
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const weightSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(weightFields, weightSchemaConfig)
schema.plugin(mongoosePaginate)
schema.plugin(aggregatePaginate)
export default mongoose.model('weight', schema)