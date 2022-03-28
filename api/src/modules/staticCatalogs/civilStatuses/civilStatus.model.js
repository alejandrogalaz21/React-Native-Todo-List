import mongoose from 'mongoose'
const Schema = mongoose.Schema
const schemaConfig = { timestamps: true }

const schema = new Schema(
  {
    option: { type: String, required: true, trim: true }
  },
  schemaConfig
)

const CivilStatus = mongoose.model('civilStatus', schema)

// Creating default data in DB if it doesn't exist
CivilStatus.createCollection(collection => {
  CivilStatus.find({}, function (error, docs) {
    if (error) throw new Error(error)
    if (docs.length === 0) {
      const data = [
        {
          option: 'Casado'
        },
        {
          option: 'Union Libre'
        },
        {
          option: 'Soltero'
        },
        {
          option: 'Separado'
        },
        {
          option: 'Divorcio'
        },
        {
          option: 'Viudo'
        }
      ]
      CivilStatus.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { CivilStatus }
