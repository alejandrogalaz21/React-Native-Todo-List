import HttpStatus from 'http-status-codes'
import * as familyEnvironmentService  from './familyEnvironment.service'
import * as ctrlHelpers from './../../../helpers/controllers.util'
import * as familyEnvironmentDto from './familyEnvironments.dto'

export const getAllFamilyEnvironmentsPagination = async (req, res, next) => {
  try {
    const infantId = req.params.infantId
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await familyEnvironmentService.getFamilyEnvironmentsPagination(query, page, limit, infantId)
    const result = familyEnvironmentDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all familyEnvironments fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const getAllFamilyEnvironments = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await familyEnvironmentService.getAllFamilyEnvironments(query)
    const result = familyEnvironmentDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all familyEnvironments fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const createFamilyEnvironment = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await familyEnvironmentService.createFamilyEnvironment(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'familyEnvironment created successfully'
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

export const getOneFamilyEnvironment = async (req, res, next) => {
  try {
    const doc = await familyEnvironmentService.getFamilyEnvironment(req.params.id)
    const result = familyEnvironmentDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'familyEnvironment fetched successfully'
    )
   return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const updateFamilyEnvironment = async (req, res, next) => {
  try {
    const doc = await familyEnvironmentService.updateFamilyEnvironment(req.params.id, req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'familyEnvironment updated successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

export const deleteFamilyEnvironment = async (req, res, next) => {
  try {
    const doc = await familyEnvironmentService.deleteFamilyEnvironment(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'familyEnvironment deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
