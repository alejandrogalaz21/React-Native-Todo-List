import mongoose from 'mongoose'
const Schema = mongoose.Schema
const schemaConfig = { timestamps: true }

const schema = new Schema(
  {
    option: { type: String, required: true, trim: true }
  },
  schemaConfig
)

const Doctor = mongoose.model('doctor', schema)

// Creating default data in DB if it doesn't exist
Doctor.createCollection(collection => {
  Doctor.find({}, function (error, docs) {
    if (error) throw new Error(error)
    if (docs.length === 0) {
      const data = [
        {
          option: 'Medico IMMS'
        },
        {
          option: 'Medico Particular'
        }
      ]
      Doctor.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { Doctor }
