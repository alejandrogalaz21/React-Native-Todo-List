import HttpStatus from 'http-status-codes'
import * as infantService  from './infant.service'
import * as ctrlHelpers from './../../helpers/controllers.util'
import * as infantDto from './infants.dto'

export const getAllInfantsPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await infantService.getInfantsPagination(query, page, limit, req.user)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all infants fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const getAllInfants = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await infantService.getAllInfants(query)
    const result = infantDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all infants fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const createInfant = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await infantService.createInfant(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'infant created successfully'
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

export const getOneInfant = async (req, res, next) => {
  try {
    const doc = await infantService.getInfant(req.params.id)
    const result = infantDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'infant fetched successfully'
    )
   return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const updateInfant = async (req, res, next) => {
  try {
    const doc = await infantService.updateInfant(req.params.id, req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'infant updated successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

export const deleteInfant = async (req, res, next) => {
  try {
    const doc = await infantService.deleteInfant(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'infant deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
