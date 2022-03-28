import mongoose from 'mongoose'
const Schema = mongoose.Schema
const schemaConfig = { timestamps: true }

const schema = new Schema(
  {
    option: { type: String, required: true, trim: true }
  },
  schemaConfig
)

const Activity = mongoose.model('activity', schema)

// Creating default data in DB if it doesn't exist
Activity.createCollection(collection => {
  Activity.find({}, function (error, docs) {
    if (error) throw new Error(error)
    if (docs.length === 0) {
      const data = [
        {
          option: 'Secuestro'
        },
        {
          option: 'Vandalismo'
        },
        {
          option: 'Crimen'
        },
        {
          option: 'Venta o distribución de droga'
        },
        {
          option: 'Pertenencia a un grupo delictivo'
        },
        {
          option: 'Agresión sexual'
        },
        {
          option: 'Violencia Intrafamiliar'
        },
        {
          option: 'Violencia hacia otros'
        }
      ]
      Activity.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { Activity }
