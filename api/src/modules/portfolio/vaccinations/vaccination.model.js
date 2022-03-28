import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const vaccinationFields = {
  infant: { type: ObjectId, ref: 'infant' },
  bcgVaccine: {
    nextVaccineDate: {
      type: Date
    },
    vaccineDate: {
      type: Date
    },
    observations: {
      type: String
    },
    status: {
      type: Boolean,
      required: [true, 'is required']
    }
  },
  hepatitisBVaccine: {
    nextVaccineDate: {
      type: Date
    },
    vaccineDate: {
      type: Date
    },
    observations: {
      type: String
    },
    status: {
      type: Boolean,
      required: [true, 'is required']
    }
  },
  hepatitisBVaccine2: {
    nextVaccineDate: {
      type: Date
    },
    vaccineDate: {
      type: Date
    },
    observations: {
      type: String
    },
    status: {
      type: Boolean,
      required: [true, 'is required']
    }
  },
  hepatitisBVaccine3: {
    nextVaccineDate: {
      type: Date
    },
    vaccineDate: {
      type: Date
    },
    observations: {
      type: String
    },
    status: {
      type: Boolean,
      required: [true, 'is required']
    }
  },
  acellularPentavalentVaccine: {
    nextVaccineDate: {
      type: Date
    },
    vaccineDate: {
      type: Date
    },
    observations: {
      type: String
    },
    status: {
      type: Boolean,
      required: [true, 'is required']
    }
  },
  acellularPentavalentVaccine2: {
    nextVaccineDate: {
      type: Date
    },
    vaccineDate: {
      type: Date
    },
    observations: {
      type: String
    },
    status: {
      type: Boolean,
      required: [true, 'is required']
    }
  },
  acellularPentavalentVaccine3: {
    nextVaccineDate: {
      type: Date
    },
    vaccineDate: {
      type: Date
    },
    observations: {
      type: String
    },
    status: {
      type: Boolean,
      required: [true, 'is required']
    }
  },
  acellularPentavalentVaccine4: {
    nextVaccineDate: {
      type: Date
    },
    vaccineDate: {
      type: Date
    },
    observations: {
      type: String
    },
    status: {
      type: Boolean,
      required: [true, 'is required']
    }
  },
  dptVaccine: {
    nextVaccineDate: {
      type: Date
    },
    vaccineDate: {
      type: Date
    },
    observations: {
      type: String
    },
    status: {
      type: Boolean,
      required: [true, 'is required']
    }
  },
  rotavirusVaccine: {
    nextVaccineDate: {
      type: Date
    },
    vaccineDate: {
      type: Date
    },
    observations: {
      type: String
    },
    status: {
      type: Boolean,
      required: [true, 'is required']
    }
  },
  rotavirusVaccine2: {
    nextVaccineDate: {
      type: Date
    },
    vaccineDate: {
      type: Date
    },
    observations: {
      type: String
    },
    status: {
      type: Boolean,
      required: [true, 'is required']
    }
  },
  pneumococcalVaccine: {
    nextVaccineDate: {
      type: Date
    },
    vaccineDate: {
      type: Date
    },
    observations: {
      type: String
    },
    status: {
      type: Boolean,
      required: [true, 'is required']
    }
  },
  pneumococcalVaccine2: {
    nextVaccineDate: {
      type: Date
    },
    vaccineDate: {
      type: Date
    },
    observations: {
      type: String
    },
    status: {
      type: Boolean,
      required: [true, 'is required']
    }
  },
  pneumococcalVaccine3: {
    nextVaccineDate: {
      type: Date
    },
    vaccineDate: {
      type: Date
    },
    observations: {
      type: String
    },
    status: {
      type: Boolean,
      required: [true, 'is required']
    }
  },
  influenzaVaccine: {
    nextVaccineDate: {
      type: Date
    },
    vaccineDate: {
      type: Date
    },
    observations: {
      type: String
    },
    status: {
      type: Boolean,
      required: [true, 'is required']
    }
  },
  influenzaVaccine2: {
    nextVaccineDate: {
      type: Date
    },
    vaccineDate: {
      type: Date
    },
    observations: {
      type: String
    },
    status: {
      type: Boolean,
      required: [true, 'is required']
    }
  },
  influenzaVaccine3: {
    nextVaccineDate: {
      type: Date
    },
    vaccineDate: {
      type: Date
    },
    observations: {
      type: String
    },
    status: {
      type: Boolean,
      required: [true, 'is required']
    }
  },
  influenzaVaccine4: {
    nextVaccineDate: {
      type: Date
    },
    vaccineDate: {
      type: Date
    },
    observations: {
      type: String
    },
    status: {
      type: Boolean,
      required: [true, 'is required']
    }
  },
  influenzaVaccine5: {
    nextVaccineDate: {
      type: Date
    },
    vaccineDate: {
      type: Date
    },
    observations: {
      type: String
    },
    status: {
      type: Boolean,
      required: [true, 'is required']
    }
  },
  influenzaVaccine6: {
    nextVaccineDate: {
      type: Date
    },
    vaccineDate: {
      type: Date
    },
    observations: {
      type: String
    },
    status: {
      type: Boolean,
      required: [true, 'is required']
    }
  },
  srpVaccine: {
    nextVaccineDate: {
      type: Date
    },
    vaccineDate: {
      type: Date
    },
    observations: {
      type: String
    },
    status: {
      type: Boolean,
      required: [true, 'is required']
    }
  },
  srpVaccine2: {
    nextVaccineDate: {
      type: Date
    },
    vaccineDate: {
      type: Date
    },
    observations: {
      type: String
    },
    status: {
      type: Boolean,
      required: [true, 'is required']
    }
  },
  otherVaccine: [
    {
      name: { type: String },
      disease: { type: String },
      vaccineDate: { type: Date },
      observations: { type: String }
    }
  ],
  vaccinationCard: {
    type: String
  },
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const vaccinationSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(vaccinationFields, vaccinationSchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('vaccination', schema)
