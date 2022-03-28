import HttpStatus from 'http-status-codes'
import * as accidentService  from './accident.service'
import * as ctrlHelpers from './../../../helpers/controllers.util'
import * as accidentDto from './accidents.dto'

export const getAllAccidentsPagination = async (req, res, next) => {
  try {
    const infantId = req.params.infantId
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await accidentService.getAccidentsPagination(query, page, limit, infantId)
    const result = accidentDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all accidents fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const getAllAccidents = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await accidentService.getAllAccidents(query)
    const result = accidentDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all accidents fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const createAccident = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await accidentService.createAccident(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'accident created successfully'
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

export const getOneAccident = async (req, res, next) => {
  try {
    const doc = await accidentService.getAccident(req.params.id)
    const result = accidentDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'accident fetched successfully'
    )
   return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const updateAccident = async (req, res, next) => {
  try {
    const doc = await accidentService.updateAccident(req.params.id, req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'accident updated successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

export const deleteAccident = async (req, res, next) => {
  try {
    const doc = await accidentService.deleteAccident(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'accident deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
