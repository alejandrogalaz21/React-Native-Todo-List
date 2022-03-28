import mongoose from 'mongoose'
const Schema = mongoose.Schema
const schemaConfig = { timestamps: true }

const schema = new Schema(
  {
    option: { type: String, required: true, trim: true }
  },
  schemaConfig
)

const Dream = mongoose.model('dream', schema)

// Creating default data in DB if it doesn't exist
Dream.createCollection(collection => {
  Dream.find({}, function (error, docs) {
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
          option: 'Feliz'
        }
      ]
      Dream.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { Dream }
