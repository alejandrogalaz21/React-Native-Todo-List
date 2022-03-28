import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoosePaginate from 'mongoose-paginate-v2'

mongoose.plugin(slug)

const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.ObjectId

export const nutritionFields = {
  infant: { type: ObjectId, ref: 'infant' },
  weight: {
    type: Number,
    required: [true, 'is required']
  },
  size: {
    type: Number,
    required: [true, 'is required']
  },
  breastfed: {
    type: Boolean,
    default: true,
    required: [true, 'is required']
  },
  howLong: {
    type: Number
  },
  // foodHistory: { type: ObjectId, ref: 'file' },
  breastfedOp1: {
    type: Boolean,
    default: false
  },
  breastfedOp2: {
    type: Boolean,
    default: false
  },
  breastfedOp3: {
    type: Boolean,
    default: false
  },
  breastfedOp4: {
    type: Boolean,
    default: false
  },
  specifyOp4: {
    type: String
  },
  nurseryBreastfeed: {
    type: Boolean,
    default: true
  },
  infantFormula: {
    type: Boolean,
    default: true
  },
  justifyInfantFormula: {
    type: String
  },
  specialFormula: {
    type: Boolean,
    default: true
  },
  justifySpecialFormula: {
    type: String
  },
  millilitersInfantFormula: {
    type: Number
  },
  scheduleFormula: {
    type: String
  },
  complications: {
    type: Boolean,
    default: true
  },
  lactoseIntolerant: {
    type: Boolean,
    default: false
  },
  reflux: {
    type: Boolean,
    default: false
  },
  difficultySucking: {
    type: Boolean,
    default: false
  },
  difficultySwallowing: {
    type: Boolean,
    default: false
  },
  allergy: {
    type: Boolean,
    default: false
  },
  specifyAllergy: {
    type: String
  },
  other: {
    type: Boolean,
    default: false
  },
  specifyOther: {
    type: String
  },
  supplementaryFeedingQ1: {
    type: Boolean,
    default: true
  },
  specifySupplementaryFeedingQ1: {
    type: String
  },
  supplementaryFeedingQ2: {
    type: Number
  },
  fruitJuice: {
    type: Number
  },
  cookieOrBread: {
    type: Number
  },
  pureFruit: {
    type: Number
  },
  yolk: {
    type: Number
  },
  mashedVegetables: {
    type: Number
  },
  meats: {
    type: Number
  },
  cerealPuree: {
    type: Number
  },
  rice: {
    type: Number
  },
  wholeEgg: {
    type: Number
  },
  soup: {
    type: Number
  },
  legumes: {
    type: Number
  },
  citrus: {
    type: Number
  },
  foodIntolerance: {
    type: Boolean,
    default: true
  },
  specifyFoodIntolerance: {
    type: String
  },
  specifyTypeFood: {
    type: String
  },
  drugIntolerance: {
    type: Boolean,
    default: true
  },
  typeDrugIntolerance: {
    type: String,
    enum: ['Médico IMMS', 'Médico Particular'],
    required: function () {
      return this.drugIntolerance === true
    }
  },
  specifyDrugIntolerance: {
    type: String
  },
  puree: {
    type: Boolean,
    default: false
  },
  chopped: {
    type: Boolean,
    default: false
  },
  finelyChopped: {
    type: Boolean,
    default: false
  },
  extraFineChopping: {
    type: Boolean,
    default: false
  },
  otherFoodConsistency: {
    type: Boolean,
    default: false
  },
  specifyFoodConsistency: {
    type: String
  },
  feedingTimes: {
    type: String,
    enum: [
      'Primero la leche y después los alimentos sólidos',
      'Primero los alimentos sólidos y después la leche'
    ]
  },
  foodFrequencyOp1: {
    type: Boolean,
    default: true
  },
  foodFrequencyOp2: {
    type: Boolean,
    default: false
  },
  foodFrequencyOp3: {
    type: Boolean,
    default: false
  },
  foodFrequencyOp4: {
    type: Boolean,
    default: false
  },
  foodFrequencyOp5: {
    type: Boolean,
    default: false
  },
  banana: {
    type: Boolean,
    default: false
  },
  cantaloupe: {
    type: Boolean,
    default: false
  },
  guava: {
    type: Boolean,
    default: false
  },
  apple: {
    type: Boolean,
    default: false
  },
  papaya: {
    type: Boolean,
    default: false
  },
  watermelon: {
    type: Boolean,
    default: false
  },
  pumpkin: {
    type: Boolean,
    default: false
  },
  squash: {
    type: Boolean,
    default: false
  },
  carrot: {
    type: Boolean,
    default: false
  },
  tomato: {
    type: Boolean,
    default: false
  },
  pea: {
    type: Boolean,
    default: false
  },
  tortilla: {
    type: Boolean,
    default: false
  },
  boxCereal: {
    type: Boolean,
    default: false
  },
  aweetPotato: {
    type: Boolean,
    default: false
  },
  cookie: {
    type: Boolean,
    default: false
  },
  cerealRice: {
    type: Boolean,
    default: false
  },
  potato: {
    type: Boolean,
    default: false
  },
  beans: {
    type: Boolean,
    default: false
  },
  bean: {
    type: Boolean,
    default: false
  },
  lentil: {
    type: Boolean,
    default: false
  },
  chickpea: {
    type: Boolean,
    default: false
  },
  haricot: {
    type: Boolean,
    default: false
  },
  beef: {
    type: Boolean,
    default: false
  },
  chicken: {
    type: Boolean,
    default: false
  },
  ham: {
    type: Boolean,
    default: false
  },
  fish: {
    type: Boolean,
    default: false
  },
  pork: {
    type: Boolean,
    default: false
  },
  milk: {
    type: Boolean,
    default: false
  },
  cheese: {
    type: Boolean,
    default: false
  },
  cream: {
    type: Boolean,
    default: false
  },
  yogurt: {
    type: Boolean,
    default: false
  },
  daisyFlower: {
    type: Boolean,
    default: false
  },
  otherDairy: {
    type: String
  },
  typeInfantFormulaOp1: {
    type: Boolean,
    default: false
  },
  typeInfantFormulaOp2: {
    type: Boolean,
    default: false
  },
  typeInfantFormulaOp3: {
    type: Boolean,
    default: false
  },
  typeInfantFormulaOp4: {
    type: Boolean,
    default: false
  },
  typeInfantFormulaOp5: {
    type: Boolean,
    default: false
  },
  specifyInfantFormula: {
    type: String
  },
  feedingBottle: {
    type: Boolean,
    default: false
  },
  spoon: {
    type: Boolean,
    default: false
  },
  specialGlass: {
    type: Boolean,
    default: false
  },
  coachMug: {
    type: Boolean,
    default: false
  },
  otherUtensil: {
    type: Boolean,
    default: false
  },
  infantFormulaQ1: {
    type: Boolean,
    default: true
  },
  specifyInfantFormulaQ1: {
    type: String
  },
  infantFormulaQ2: {
    type: Boolean,
    default: true
  },
  specifyInfantFormulaQ2: {
    type: String
  },
  infantFormulaQ3: {
    type: Boolean,
    default: true
  },
  specifyInfantFormulaQ3: {
    type: String
  },
  infantFormulaQ4: {
    type: Boolean,
    default: true
  },
  specifyInfantFormulaQ4: {
    type: String
  },
  infantFormulaQ5: {
    type: Boolean,
    default: true
  },
  specifyInfantFormulaQ5: {
    type: String
  },
  infantFormulaQ6: {
    type: String
  },
  active: {
    desc: 'is Active tag',
    type: Boolean,
    default: true,
    required: true
  }
}

export const nutritionSchemaConfig = {
  versionKey: false,
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
}

const schema = new Schema(nutritionFields, nutritionSchemaConfig)
schema.plugin(mongoosePaginate)
export default mongoose.model('nutrition', schema)
