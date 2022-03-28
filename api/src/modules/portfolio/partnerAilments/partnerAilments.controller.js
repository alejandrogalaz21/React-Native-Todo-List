import HttpStatus from 'http-status-codes'
import * as partnerAilmentService  from './partnerAilment.service'
import * as ctrlHelpers from './../../../helpers/controllers.util'
import * as partnerAilmentDto from './partnerAilments.dto'

export const getAllPartnerAilmentsPagination = async (req, res, next) => {
  try {
    const infantId = req.params.infantId
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await partnerAilmentService.getPartnerAilmentsPagination(query, page, limit, infantId)
    const result = partnerAilmentDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all partnerAilments fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const getAllPartnerAilments = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await partnerAilmentService.getAllPartnerAilments(query)
    const result = partnerAilmentDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all partnerAilments fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const createPartnerAilment = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await partnerAilmentService.createPartnerAilment(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'partnerAilment created successfully'
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

export const getOnePartnerAilment = async (req, res, next) => {
  try {
    const doc = await partnerAilmentService.getPartnerAilment(req.params.id)
    const result = partnerAilmentDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'partnerAilment fetched successfully'
    )
   return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const updatePartnerAilment = async (req, res, next) => {
  try {
    const doc = await partnerAilmentService.updatePartnerAilment(req.params.id, req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'partnerAilment updated successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

export const deletePartnerAilment = async (req, res, next) => {
  try {
    const doc = await partnerAilmentService.deletePartnerAilment(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'partnerAilment deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
