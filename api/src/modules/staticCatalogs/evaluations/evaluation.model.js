import mongoose from 'mongoose'
const Schema = mongoose.Schema
const schemaConfig = { timestamps: true }

const schema = new Schema(
  {
    option: { type: String, required: true, trim: true }
  },
  schemaConfig
)

const Evaluation = mongoose.model('evaluation', schema)

// Creating default data in DB if it doesn't exist
Evaluation.createCollection(collection => {
  Evaluation.find({}, function (error, docs) {
    if (error) throw new Error(error)
    if (docs.length === 0) {
      const data = [
        {
          option: 'ASQ'
        },
        {
          option: 'IDI'
        },
        {
          option: 'IFD'
        },
        {
          option: 'MCHAT'
        },
        {
          option: 'ESASEN'
        },
        {
          option: 'SDQ CAS'
        },
        {
          option: 'ASQ SE'
        },
        {
          option: 'OTRO'
        }
      ]
      Evaluation.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { Evaluation }
