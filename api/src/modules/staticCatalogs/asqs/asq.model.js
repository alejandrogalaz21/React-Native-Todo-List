import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'

mongoose.plugin(slug)

const schema = {
  option: {
    type: String,
    required: [true, 'is required'],
    trim: true
  }
}

const Asq = mongoose.model('asq', schema)
Asq.find({}, function (error, docs) {
  if (error) throw new Error(error)
  if (docs.length === 0) {
    const data = [
      { option: 'ASQ 2m' },
      { option: 'ASQ 4m' },
      { option: 'ASQ 6m' },
      { option: 'ASQ 8m' },
      { option: 'ASQ 9m' },
      { option: 'ASQ 10m' },
      { option: 'ASQ 12m' },
      { option: 'ASQ 14m' },
      { option: 'ASQ 16m' },
      { option: 'ASQ 18m' },
      { option: 'ASQ 20m' },
      { option: 'ASQ 22m' },
      { option: 'ASQ 24m' },
      { option: 'ASQ 27m' },
      { option: 'ASQ 30m' },
      { option: 'ASQ 33m' },
      { option: 'ASQ 36m' },
      { option: 'ASQ 42m' },
      { option: 'ASQ 48m' },
      { option: 'ASQ 54m' },
      { option: 'ASQ 60m' }
    ]
    Asq.insertMany(data).then(() => {
      if (error) throw new Error(error)
    })
  }
})

export { Asq }
