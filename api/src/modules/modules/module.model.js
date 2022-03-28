import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema

export const moduleFields = {
  name: {
    type: String,
    required: [true, 'is required'],
    trim: true
  },
  label: {
    type: String,
    required: [true, 'is required'],
    trim: true
  },
  app: {
    type: String,
    required: [true, 'is required']
  },
  api: {
    type: String,
    required: [true, 'is required']
  },
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const moduleSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(moduleFields, moduleSchemaConfig)
schema.plugin(mongoosePaginate)
const Module = mongoose.model('module', schema)

// Creating default data in DB if it doesn't exist
Module.createCollection(collection => {
  Module.find({}, function (error, docs) {
    if (error) throw new Error(error)
    if (docs.length === 0) {
      const data = [
        {
          _id: '613fbebc21541b3ecc4875d5',
          name: 'inscription',
          label: 'Inscripciones',
          app: '/dashboard/inscription',
          api: '/api/inscriptions'
        },
        {
          _id: '613fbebc21541b3ecc4875d6',
          name: 'admin',
          label: 'Usuarios',
          app: '/dashboard/user-admin',
          api: '/api/users'
        },
        {
          _id: '613fbebc21541b3ecc4875d7',
          name: 'planning',
          label: 'Planeaciones',
          app: '/dashboard/planning',
          api: '/api/plannings'
        },
        {
          _id: '613fbebc21541b3ecc4875d8',
          name: 'classroom',
          label: 'Aulas',
          app: '/dashboard/classroom',
          api: '/api/classrooms'
        },
        {
          _id: '613fbebc21541b3ecc4875d9',
          name: 'position',
          label: 'Puestos',
          app: '/dashboard/position',
          api: '/api/positions'
        },
        {
          _id: '613fbebc21541b3ecc4875da',
          name: 'center',
          label: 'Centros',
          app: '/dashboard/center',
          api: '/api/centers'
        },
        {
          _id: '613fbebc21541b3ecc4875db',
          name: 'service',
          label: 'Servicios',
          app: '/dashboard/service',
          api: '/api/services'
        },
        {
          _id: '613fbebc21541b3ecc4875dc',
          name: 'cycle',
          label: 'Ciclos',
          app: '/dashboard/cycle',
          api: '/api/cycles'
        },
        {
          _id: '613fbebc21541b3ecc4875dd',
          name: 'payment',
          label: 'Concepto Pagos',
          app: '/dashboard/payment',
          api: '/api/payments'
        },
        {
          _id: '613fbebc21541b3ecc4875de',
          name: 'dropout',
          label: 'Bajas',
          app: '/dashboard/dropout',
          api: '/api/dropouts'
        },
        {
          _id: '613fbebc21541b3ecc4875df',
          name: 'modality',
          label: 'Modalidades',
          app: '/dashboard/modality',
          api: '/api/modalities'
        },
        {
          _id: '613fbebc21541b3ecc4875e0',
          name: 'cost',
          label: 'Costos',
          app: '/dashboard/cost',
          api: '/api/costs'
        },
        {
          _id: '613fbebc21541b3ecc4875e1',
          name: 'canalization',
          label: 'Canalizaciones',
          app: '/dashboard/canalization',
          api: '/api/canalizations'
        },
        {
          _id: '613fbebc21541b3ecc4875e2',
          name: 'canalizationLocation',
          label: 'Ubicación de canalizaciones',
          app: '/dashboard/canalizationLocation',
          api: '/api/canalizationLocations'
        },
        {
          _id: '613fbebc21541b3ecc4875e3',
          name: 'scholarship',
          label: 'Becas (Conceptos)',
          app: '/dashboard/scholarship',
          api: '/api/scholarships'
        },
        {
          _id: '613fbebc21541b3ecc4875e4',
          name: 'percentage',
          label: 'Becas (Porcentajes)',
          app: '/dashboard/percentage',
          api: '/api/percentages'
        },
        {
          _id: '613fbebc21541b3ecc4875e5',
          name: 'groupAssignment',
          label: 'Asignación de grupos',
          app: '/dashboard/groupAssignment',
          api: '/api/groupAssignments'
        },
        {
          _id: '613fbebc21541b3ecc4875e6',
          name: 'general',
          label: 'Datos generales',
          app: '/dashboard/general',
          api: '/api/generals'
        },
        {
          _id: '613fbebc21541b3ecc4875e7',
          name: 'address',
          label: 'Dirección',
          app: '/dashboard/address',
          api: '/api/addresses'
        },
        {
          _id: '613fbebc21541b3ecc4875e9',
          name: 'tutor',
          label: 'Tutores',
          app: '/dashboard/tutor',
          api: '/api/tutors'
        },
        {
          _id: '613fbebc21541b3ecc4875ea',
          name: 'ailment',
          label: 'Padecimientos',
          app: '/dashboard/ailment',
          api: '/api/ailments'
        },
        {
          _id: '613fbebc21541b3ecc4875eb',
          name: 'environment',
          label: 'Entorno social',
          app: '/dashboard/environment',
          api: '/api/environments'
        },
        {
          _id: '613fbebc21541b3ecc4875ec',
          name: 'documentation',
          label: 'Documentación',
          app: '/dashboard/documentation',
          api: '/api/documentations'
        },
        {
          _id: '613fbebc21541b3ecc4875ed',
          name: 'infant',
          label: 'Niños',
          app: '/dashboard/infant',
          api: '/api/infants'
        },
        {
          _id: '613fbebc21541b3ecc4875ee',
          name: 'nutrition',
          label: 'Nutrición',
          app: '/dashboard/nutrition',
          api: '/api/nutritions'
        },
        {
          _id: '613fbebc21541b3ecc4875ef',
          name: 'socioeconomic',
          label: 'Estudio socioeconomico',
          app: '/dashboard/socioeconomic',
          api: '/api/socioeconomics'
        },
        {
          _id: '613fbebc21541b3ecc4875f0',
          name: 'health',
          label: 'Salud',
          app: '/dashboard/health',
          api: '/api/healths'
        },
        {
          _id: '613fbebc21541b3ecc4875f1',
          name: 'collection',
          label: 'Cobranza',
          app: '/dashboard/collection',
          api: '/api/collections'
        },
        {
          _id: '613fbebc21541b3ecc4875f2',
          name: 'appointments',
          label: 'Citas',
          app: '/dashboard/appointment',
          api: '/api/appointments'
        },
        {
          _id: '613fbebc21541b3ecc4875f3',
          name: 'access',
          label: 'Accesos',
          app: '/dashboard/access',
          api: '/api/access'
        }
      ]
      Module.insertMany(data).then(() => {
        if (error) throw new Error(error)
      })
    }
  })
})

export default Module
