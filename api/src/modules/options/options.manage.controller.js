import Service from './../services/service.model'
import Center from './../centers/center.model'
import Payment from './../payments/payment.model'
import Modality from './../modalities/modality.model'
import Classroom from './../classrooms/classroom.model'
import User from './../users/user.model'
import GroupAssignment from './../groupAssignments/groupAssignment.model'
import Scholarship from './../scholarships/scholarship.model'
import Percentage from './../percentages/percentage.model'
import Canalization from './../canalizations/canalization.model'
import Cycle from './../cycles/cycle.model'
import General from './../inscriptions/generals/general.model'
import Position from './../positions/position.model'
import Cost from './../costs/cost.model'
// import Debt from './../debt/debt.model'
// import CanalizationLocation from './../canalizationLocations/canalizationLocation'

export const readServices = async (req, res, next) => {
  try {
    const result = await Service.find({ active: true })
      .select('-historical')
      .sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readCenters = async (req, res, next) => {
  try {
    const result = await Center.find({ active: true })
      .select('-historical')
      .sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readPayments = async (req, res, next) => {
  try {
    const result = await Payment.find({ active: true })
      .select('-historical')
      .sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readModalities = async (req, res, next) => {
  try {
    const result = await Modality.find({ active: true })
      .select('-historical')
      .sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readAllClassrooms = async (req, res, next) => {
  try {
    const result = await Classroom.find({ active: true })
      .select('-historical')
      .sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readClassrooms = async (req, res, next) => {
  try {
    const result = await Classroom.find({ active: true, groupAssignmentId: null })
      .select('-historical')
      .sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readTitulars = async (req, res, next) => {
  try {
    const result = await User.find({ active: true, role: 2, groupAssignmentId: null })
      .select('-historical')
      .sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readAllTitulars = async (req, res, next) => {
  try {
    const result = await User.find({ active: true, role: 2 })
      .select('-historical')
      .sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readAssistants = async (req, res, next) => {
  try {
    const result = await User.find({ active: true, role: 3, groupAssignmentId: null })
      .select('-historical')
      .sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readAllAssistants = async (req, res, next) => {
  try {
    const result = await User.find({ active: true, role: 3 })
      .select('-historical')
      .sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readGroupAssignments = async (req, res, next) => {
  try {
    const result = await GroupAssignment.find({ active: true, planningId: null })
      .select('-historical')
      .sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readGroups = async (req, res, next) => {
  try {
    const result = await GroupAssignment.find({ active: true})
      .select('-historical')
      .sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readScholarships = async (req, res, next) => {
  try {
    const result = await Scholarship.find({ active: true })
      .select('-historical')
      .sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readPercentages = async (req, res, next) => {
  try {
    const result = await Percentage.find({ active: true })
      .select('-historical')
      .sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readCanalizations = async (req, res, next) => {
  try {
    const result = await Canalization.find({ active: true })
      .select('-historical')
      .sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readCycles = async (req, res, next) => {
  try {
    const result = await Cycle.find({ active: true })
      .select('-historical')
      .sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readGenerals = async (req, res, next) => {
  try {
    const result = await General.find({ active: true })
      .select('-historical')
      .sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readPositions = async (req, res, next) => {
  try {
    const result = await Position.find({ active: true })
      .select('-historical')
      .sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readCosts = async (req, res, next) => {
  try {
    const result = await Cost.find({ active: true })
      .select('-historical')
      .sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const readDebts = async (req, res, next) => {
  try {
    const result = await Debt.find({ inscription: req.params.id, status: false })
      .populate('concept')
      .sort({
        updatedAt: -1
      })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}
// export const readCanalizationLocations = async (req, res, next) => {
//   try {
//     const result = await CanalizationLocation.find({ active: true })
//       .select('-historical')
//       .sort({ updatedAt: -1 })
//     return res.send(result)
//   } catch (error) {
//     next(error)
//   }
// }
