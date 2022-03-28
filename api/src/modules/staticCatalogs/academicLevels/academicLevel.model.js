import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'

mongoose.plugin(slug)

const Schema = mongoose.Schema

export const academicLevelFields = {
  option: {
    type: String,
    required: [true, 'is required'],
    trim: true
  }
}

export const academicLevelSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(academicLevelFields, academicLevelSchemaConfig)
const AcademicLevel = mongoose.model('academicLevel', schema)

// Creating default data in DB if it doesn't exist
AcademicLevel.createCollection(collection => {
  AcademicLevel.find({}, function (error, docs) {
    if (error) throw new Error(error)
    if (docs.length === 0) {
      const data = [
        {
          option: 'Primaria'
        },
        {
          option: 'Secundaria'
        },
        {
          option: 'Carrera Técnica'
        },
        {
          option: 'Preparatoria'
        },
        {
          option: 'Preparatoria Técnica'
        },
        {
          option: 'Técnico Superior Universitario'
        },
        {
          option: 'Titulo Universitario'
        },
        {
          option: 'Posgrado'
        }
      ]
      AcademicLevel.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { AcademicLevel }
