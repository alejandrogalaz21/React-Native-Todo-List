import mongoose from 'mongoose'
import { ErrorHandler } from '../../helpers/error.helper'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'
import aggregatePaginate from 'mongoose-aggregate-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const userFields = {
  name: {
    type: String,
    trim: true,
    required: [true, 'is required']
  },
  lastName: {
    type: String,
    trim: true
  },
  gender: {
    type: String,
    enum: ['Masculino', 'Femenino']
  },
  phone: {
    type: Number
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  password: {
    type: String,
    trim: true
  },
  picture: {
    type: String
  },
  thumbnail: {
    type: ObjectId,
    ref: 'file',
    default: null
  },
  position: {
    type: ObjectId,
    ref: 'position',
    default: null
  },
  centers:  [{
    type: ObjectId,
    ref: 'center',
    default: null
  }],
  service: {
    type: ObjectId,
    ref: 'service',
    default: null
  },
  permissions: [
    {
      type: ObjectId,
      ref: 'permission',
      default: null
    }
  ],
  role: {
    type: Number,
    enum: [0, 1, 2, 3],
    default: 1
  }, // 0: Administrador, 1: usuario, 2: Cuidador Titular, 3: Cuidador Auxiliar
  active: {
    type: Boolean,
    default: true
  },
  login: {
    type: Boolean,
    default: false
  },
  changePassword: {
    type: Boolean,
    default: true
  },
  recoverPasswordToken: {
    type: String,
    default: null
  },
  recoverPasswordExpires: {
    type: Date,
    default: null
  },
  groupAssignmentId: {
    type: ObjectId,
    ref: 'groupAssignment',
    default: null
  },
  historical: [
    {
      type: ObjectId,
      ref: 'historical'
    }
  ]
}

const userSchemaConfig = {
  strict: true,
  versionKey: false,
  toJSON: { virtuals: true },
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}


const schema = new Schema(userFields, userSchemaConfig)
schema.virtual('fullName').get(function () {
  return this.name + ' ' + this.lastName
})

schema.post('validate', async function ({ email }) {
  if (await mongoose.models.user.exists({ email }))
    throw new ErrorHandler({
      message: 'Usuario ya registrado',
      description: 'Correo: ' + email
    })
})

schema.plugin(mongoosePaginate)
schema.plugin(aggregatePaginate)

export default mongoose.model('user', schema)
