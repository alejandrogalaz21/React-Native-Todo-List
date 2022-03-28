import { AsqResult } from './../staticCatalogs/asqResults/asqResult.model'
import { Careful } from './../staticCatalogs/carefuls/careful.model'
import { CivilStatus } from './../staticCatalogs/civilStatuses/civilStatus.model'
import { Contact } from './../staticCatalogs/contacts/contact.model'
import { Courage } from './../staticCatalogs/courages/courage.model'
import { Doctor } from './../staticCatalogs/doctors/doctor.model'
import { Dream } from './../staticCatalogs/dreams/dream.model'
import { Economical } from './../staticCatalogs/economicals/economical.model'
import { Evaluation } from './../staticCatalogs/evaluations/evaluation.model'
import { Feeling } from './../staticCatalogs/feelings/feeling.model'
import { Food } from './../staticCatalogs/foods/food.model'
import { Frustration } from './../staticCatalogs/frustrations/frustration.model'
import { Grade } from './../staticCatalogs/grades/grade.model'
import { IdiResult } from './../staticCatalogs/idiResults/idiResult.model'
import { IfdResult } from './../staticCatalogs/ifdResults/ifdResult.model'
import { Interest } from './../staticCatalogs/interests/interest.model'
import { Interpersonal } from './../staticCatalogs/interpersonals/interpersonal.model'
import { Interview } from './../staticCatalogs/interviews/interview.model'
import { Lesion } from './../staticCatalogs/lesions/lesion.model'
import { LevelEstudy } from './../staticCatalogs/levelEstudies/levelEstudy.model'
import { MchatResult } from './../staticCatalogs/mchatResults/mchatResult.model'
import { Participation } from './../staticCatalogs/participations/participation.model'
import { Prevalence } from './../staticCatalogs/prevalences/prevalence.model'
import { Relationship } from './../staticCatalogs/relationships/relationship.model'
import { Religion } from './../staticCatalogs/religions/religion.model'
import { Rol } from './../staticCatalogs/rols/rol.model'
import { Situation } from './../staticCatalogs/situations/situation.model'
import { StatusEvaluation } from './../staticCatalogs/statusEvaluations/statusEvaluation.model'
import { StatusRelationship } from './../staticCatalogs/statusRelationships/statusRelationship.model'
import { Activity } from './../staticCatalogs/activities/activity.model'
import { AcademicLevel } from './../staticCatalogs/academicLevels/academicLevel.model'
import { Asq } from '../staticCatalogs/asqs/asq.model'
import { AsqSe } from '../staticCatalogs/asqSes/asqSe.model'

export const readAsqSeOptions = async (req, res, next) => {
  try {
    const result = await AsqSe.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readAsqOptions = async (req, res, next) => {
  try {
    const result = await Asq.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readAsqResults = async (req, res, next) => {
  try {
    const result = await AsqResult.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readCarefuls = async (req, res, next) => {
  try {
    const result = await Careful.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readCivilStatuses = async (req, res, next) => {
  try {
    const result = await CivilStatus.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readContacts = async (req, res, next) => {
  try {
    const result = await Contact.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readCourages = async (req, res, next) => {
  try {
    const result = await Courage.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readDoctors = async (req, res, next) => {
  try {
    const result = await Doctor.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readDreams = async (req, res, next) => {
  try {
    const result = await Dream.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readEconomicals = async (req, res, next) => {
  try {
    const result = await Economical.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readEvaluations = async (req, res, next) => {
  try {
    const result = await Evaluation.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readFeelings = async (req, res, next) => {
  try {
    const result = await Feeling.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readFoods = async (req, res, next) => {
  try {
    const result = await Food.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readFrustrations = async (req, res, next) => {
  try {
    const result = await Frustration.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readGrades = async (req, res, next) => {
  try {
    const result = await Grade.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readIdiResults = async (req, res, next) => {
  try {
    const result = await IdiResult.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readIfdResults = async (req, res, next) => {
  try {
    const result = await IfdResult.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readInterests = async (req, res, next) => {
  try {
    const result = await Interest.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readInterpersonals = async (req, res, next) => {
  try {
    const result = await Interpersonal.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readInterviews = async (req, res, next) => {
  try {
    const result = await Interview.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readLesions = async (req, res, next) => {
  try {
    const result = await Lesion.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readLevelEstudies = async (req, res, next) => {
  try {
    const result = await LevelEstudy.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readMchatResults = async (req, res, next) => {
  try {
    const result = await MchatResult.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readParticipations = async (req, res, next) => {
  try {
    const result = await Participation.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readPrevalences = async (req, res, next) => {
  try {
    const result = await Prevalence.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readRelationships = async (req, res, next) => {
  try {
    const result = await Relationship.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readReligions = async (req, res, next) => {
  try {
    const result = await Religion.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readRols = async (req, res, next) => {
  try {
    const result = await Rol.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readSituations = async (req, res, next) => {
  try {
    const result = await Situation.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readStatusEvaluations = async (req, res, next) => {
  try {
    const result = await StatusEvaluation.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readStatusRelationships = async (req, res, next) => {
  try {
    const result = await StatusRelationship.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readActivities = async (req, res, next) => {
  try {
    const result = await Activity.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readAcademicLevels = async (req, res, next) => {
  try {
    const result = await AcademicLevel.find().sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}
