import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'

mongoose.plugin(slug)

const Schema = mongoose.Schema

export const religionFields = {
  option: {
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

export const religionSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(religionFields, religionSchemaConfig)
const Religion = mongoose.model('religion', schema)

// Creating default data in DB if it doesn't exist
Religion.createCollection(collection => {
  Religion.find({}, function (error, docs) {
    if (error) throw new Error(error)
    if (docs.length === 0) {
      const data = [
        {
          option: 'Catolica'
        },
        {
          option: 'Cristiano no catolico'
        },
        {
          option: 'Testigo de Jehova'
        },
        {
          option: 'Judio'
        },
        {
          option: 'Islam'
        },
        {
          option: 'Hinduismo'
        },
        {
          option: 'Budismo'
        },
        {
          option: 'Ateo'
        },
        {
          option: 'Otro'
        }
      ]
      Religion.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { Religion }
