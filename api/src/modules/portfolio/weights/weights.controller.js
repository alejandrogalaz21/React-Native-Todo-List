import HttpStatus from 'http-status-codes'
import * as weightService  from './weight.service'
import * as ctrlHelpers from './../../../helpers/controllers.util'
import * as weightDto from './weights.dto'

export const getAllWeightsPagination = async (req, res, next) => {
  try {
    const infantId = req.params.infantId
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await weightService.getWeightsPagination(query, page, limit, infantId)
    const result = weightDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all weights fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const getAllWeights = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await weightService.getAllWeights(query)
    const result = weightDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all weights fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const createWeight = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await weightService.createWeight(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'weight created successfully'
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

export const getOneWeight = async (req, res, next) => {
  try {
    const doc = await weightService.getWeight(req.params.id)
    const result = weightDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'weight fetched successfully'
    )
   return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const updateWeight = async (req, res, next) => {
  try {
    const doc = await weightService.updateWeight(req.params.id, req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'weight updated successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

export const deleteWeight = async (req, res, next) => {
  try {
    const doc = await weightService.deleteWeight(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'weight deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
