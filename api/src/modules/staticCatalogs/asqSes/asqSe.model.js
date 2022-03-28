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

const AsqSe = mongoose.model('asqSe', schema)
AsqSe.find({}, function (error, docs) {
  if (error) throw new Error(error)
  if (docs.length === 0) {
    const data = [
      { option: 'ASQ SE 2m' },
      { option: 'ASQ SE 6m' },
      { option: 'ASQ SE 12m' },
      { option: 'ASQ SE 18m' },
      { option: 'ASQ SE 24m' },
      { option: 'ASQ SE 30m' },
      { option: 'ASQ SE 36m' },
      { option: 'ASQ SE 48m' },
      { option: 'ASQ SE 60m' }
    ]
    AsqSe.insertMany(data).then(() => {
      if (error) throw new Error(error)
    })
  }
})

export { AsqSe }
