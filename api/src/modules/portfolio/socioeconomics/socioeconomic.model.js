import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const socioeconomicFields = {
  infant: { type: ObjectId, ref: 'infant' },
  bedroom: {
    type: Number,
    required: [true, 'is required']
  },
  person: [
    {
      gender: {
        type: String,
        required: [true, 'is required']
      },
      age: {
        type: Number,
        required: [true, 'is required']
      },
      relationship: { type: ObjectId, ref: 'relationship' },
      levelEstudy: { type: ObjectId, ref: 'levelEstudy' },
      school: {
        type: Boolean,
        default: true,
      },
      service: {
        type: Boolean,
        default: true,
      },
      independentWork: {
        type: Boolean,
        default: true,
      },
      salariedWork: {
        type: Boolean,
        default: true,
      },
      pensioner: {
        type: Boolean,
        default: true,
      },
      afore: {
        type: Boolean,
        default: true,
      },
      lacksMoney: {
        type: Boolean,
        default: true,
      },
      totalIncome: {
        type: Number,
        required: [true, 'is required']
      },
      totalFamilyIncome: {
        type: Number,
        required: [true, 'is required']
      }
    }
  ],
  tubingWater: {
    type: Boolean,
    default: true,
  },
  sewerSystem: {
    type: Boolean,
    default: true,
  },
  electricity: {
    type: Boolean,
    default: true,
  },
  cook: {
    type: Boolean,
    default: true,
  },
  flat: {
    type: Boolean,
    default: true,
  },
  roof: {
    type: Boolean,
    default: true,
  },
  wall: {
    type: Boolean,
    default: true,
  },
  bathroom: {
    type: Boolean,
    default: true,
  },
  safeColony: {
    type: Boolean,
    default: true,
  },
  houseInCare: {
    type: Boolean,
    default: true,
  },
  childrenInCare: {
    type: Boolean,
    default: true,
  },
  neighbors: {
    type: Boolean,
    default: true,
  },
  flood: {
    type: Boolean,
    default: true,
  },
  breeding: {
    type: Boolean,
    default: true,
  },
  internet: {
    type: Boolean,
    default: true,
  },
  computer: {
    type: Boolean,
    default: true,
  },
  cellPhone: {
    type: Number,
    required: [true, 'is required']
  },
  videoGameConsole: {
    type: Boolean,
    default: true,
  },
  houseFloors: {
    type: Number,
    required: [true, 'is required']
  },
  car: {
    type: Boolean,
    default: true,
  },
  airConditioning: {
    type: Boolean,
    default: true,
  },
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const socioeconomicSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(socioeconomicFields, socioeconomicSchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('socioeconomic', schema)