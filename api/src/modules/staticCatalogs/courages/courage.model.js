import mongoose from 'mongoose'
const Schema = mongoose.Schema
const schemaConfig = { timestamps: true }

const schema = new Schema(
  {
    option: { type: String, required: true, trim: true }
  },
  schemaConfig
)

const Courage = mongoose.model('courage', schema)

// Creating default data in DB if it doesn't exist
Courage.createCollection(collection => {
  Courage.find({}, function (error, docs) {
    if (error) throw new Error(error)
    if (docs.length === 0) {
      const data = [
        {
          option: 'Triste'
        },
        {
          option: 'Serio'
        },
        {
          option: 'Féliz'
        }
      ]
      Courage.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { Courage }
