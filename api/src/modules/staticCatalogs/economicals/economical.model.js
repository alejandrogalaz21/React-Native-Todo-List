import mongoose from 'mongoose'
const Schema = mongoose.Schema
const schemaConfig = { timestamps: true }

const schema = new Schema(
  {
    option: { type: String, required: true, trim: true }
  },
  schemaConfig
)

const Economical = mongoose.model('economical', schema)

// Creating default data in DB if it doesn't exist
Economical.createCollection(collection => {
  Economical.find({}, function (error, docs) {
    if (error) throw new Error(error)
    if (docs.length === 0) {
      const data = [
        {
          option: 'Empleado Admvo Empresa'
        },
        {
          option: 'Empleado Operario Empresa'
        },
        {
          option: 'Negocio Propio'
        },
        {
          option: 'Empleado Peq. Negocio'
        },
        {
          option: 'Taxista'
        },
        {
          option: 'Comisionista'
        },
        {
          option: 'Desempleado'
        },
        {
          option: 'Estudiante'
        },
        {
          option: 'Trabajador sector salud'
        },
        {
          option: 'Trabajador magisterial'
        },
        {
          option: 'Cargo público'
        },
        {
          option: 'Seguridad pública o privada'
        }
      ]
      Economical.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export { Economical }
