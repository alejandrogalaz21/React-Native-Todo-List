import mongoose from 'mongoose'
const Schema = mongoose.Schema
const schemaConfig = { timestamps: true }

const schema = new Schema(
  {
    option: { type: String, required: true, trim: true }
  },
  schemaConfig
)

const Careful = mongoose.model('careful', schema)

// Creating default data in DB if it doesn't exist
Careful.createCollection(collection => {
  Careful.find({}, function (error, docs) {
    if (error) throw new Error(error)
    if (docs.length === 0) {
      const data = [
        {
          option: 'Tutor Legal'
        },
        {
          option: 'Padre'
        },
        {
          option: 'Madre'
        },
        {
          option: 'Abuela Materna'
        },
        {
          option: 'Abuela Paterna'
        },
        {
          option: 'Abuelo Materno'
        },
        {
          option: 'Abuelo Paterno'
        },
        {
          option: 'Tio Directo'
        },
        {
          option: 'Tio Politico'
        },
        {
          option: 'Tia Directa'
        },
        {
          option: 'Tia Politica'
        },
        {
          option: 'Primo'
        },
        {
          option: 'Prima'
        },
        {
          option: 'Hermano'
        },
        {
          option: 'Hermano Politico'
        },
        {
          option: 'Hermana'
        },
        {
          option: 'Hermana Politica'
        },
        {
          option: 'Padrastro'
        },
        {
          option: 'Madrastra'
        },
        {
          option: 'Otro Familiar'
        },
        {
          option: 'Vecino'
        },
        {
          option: 'Vecina'
        }
      ]
      Careful.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { Careful }
