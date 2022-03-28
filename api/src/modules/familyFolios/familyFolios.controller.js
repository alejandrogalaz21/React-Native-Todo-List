import HttpStatus from 'http-status-codes'
import * as familyFolioService  from './familyFolio.service'
import * as ctrlHelpers from './../../helpers/controllers.util'
import * as familyFolioDto from './familyFolios.dto'

export const getAllFamilyFoliosPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await familyFolioService.getFamilyFoliosPagination(query, page, limit)
    const result = familyFolioDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all familyFolios fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const getAllFamilyFolios = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await familyFolioService.getAllFamilyFolios(query)
    const result = familyFolioDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all familyFolios fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const createFamilyFolio = async (req, res, next) => {
  try {
    console.log('familyFolio controller -> newFamilyFolio()')
    const doc = await familyFolioService.createFamilyFolio(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'familyFolio created successfully'
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

export const getOneFamilyFolio = async (req, res, next) => {
  try {
    const doc = await familyFolioService.getFamilyFolio(req.params.id)
    const result = familyFolioDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'familyFolio fetched successfully'
    )
   return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const updateFamilyFolio = async (req, res, next) => {
  try {
    const doc = await familyFolioService.updateFamilyFolio(req.params.id, req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'familyFolio updated successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

export const deleteFamilyFolio = async (req, res, next) => {
  try {
    const doc = await familyFolioService.deleteFamilyFolio(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'familyFolio deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
