import HttpStatus from 'http-status-codes'
import * as partnerDocumentationService  from './partnerDocumentation.service'
import * as ctrlHelpers from './../../../helpers/controllers.util'
import * as partnerDocumentationDto from './partnerDocumentations.dto'

export const getAllPartnerDocumentationsPagination = async (req, res, next) => {
  try {
    const infantId = req.params.infantId
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await partnerDocumentationService.getPartnerDocumentationsPagination(query, page, limit, infantId)
    const result = partnerDocumentationDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all partnerDocumentations fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const getAllPartnerDocumentations = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await partnerDocumentationService.getAllPartnerDocumentations(query)
    const result = partnerDocumentationDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all partnerDocumentations fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const createPartnerDocumentation = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await partnerDocumentationService.createPartnerDocumentation(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'partnerDocumentation created successfully'
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

export const getOnePartnerDocumentation = async (req, res, next) => {
  try {
    const doc = await partnerDocumentationService.getPartnerDocumentation(req.params.id)
    const result = partnerDocumentationDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'partnerDocumentation fetched successfully'
    )
   return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const updatePartnerDocumentation = async (req, res, next) => {
  try {
    const doc = await partnerDocumentationService.updatePartnerDocumentation(req.params.id, req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'partnerDocumentation updated successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

export const deletePartnerDocumentation = async (req, res, next) => {
  try {
    const doc = await partnerDocumentationService.deletePartnerDocumentation(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'partnerDocumentation deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
