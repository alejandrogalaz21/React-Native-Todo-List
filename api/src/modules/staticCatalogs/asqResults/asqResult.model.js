import mongoose from 'mongoose'
const Schema = mongoose.Schema
const schemaConfig = { timestamps: true }

const schema = new Schema(
  {
    option: { type: String, required: true, trim: true }
  },
  schemaConfig
)

const AsqResult = mongoose.model('asqResult', schema)

// Creating default data in DB if it doesn't exist
AsqResult.createCollection(collection => {
  AsqResult.find({}, function (error, docs) {
    if (error) throw new Error(error)
    if (docs.length === 0) {
      const data = [
        {
          option: 'Tipico'
        },
        {
          option: 'Monitoreo'
        },
        {
          option: 'Referencia'
        }
      ]
      AsqResult.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { AsqResult }
