import mongoose from 'mongoose'
const Schema = mongoose.Schema
const schemaConfig = { timestamps: true }

const schema = new Schema(
  {
    option: { type: String, required: true, trim: true }
  },
  schemaConfig
)

const Contact = mongoose.model('contact', schema)

// Creating default data in DB if it doesn't exist
Contact.createCollection(collection => {
  Contact.find({}, function (error, docs) {
    if (error) throw new Error(error)
    if (docs.length === 0) {
      const data = [
        {
          option: 'Presencial'
        },
        {
          option: 'Videoconferencia'
        },
        {
          option: 'Teléfonica'
        }
      ]
      Contact.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { Contact }
