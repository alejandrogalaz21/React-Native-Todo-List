import HttpStatus from 'http-status-codes'
import * as socioeconomicService  from './socioeconomic.service'
import * as ctrlHelpers from './../../../helpers/controllers.util'
import * as socioeconomicDto from './socioeconomics.dto'

export const getAllSocioeconomicsPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await socioeconomicService.getSocioeconomicsPagination(query, page, limit)
    const result = socioeconomicDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all socioeconomics fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const getAllSocioeconomics = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await socioeconomicService.getAllSocioeconomics(query)
    const result = socioeconomicDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all socioeconomics fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const createSocioeconomic = async (req, res, next) => {
  try {
    console.log('socioeconomic controller -> newSocioeconomic()')
    const doc = await socioeconomicService.createSocioeconomic(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'socioeconomic created successfully'
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

export const getOneSocioeconomic = async (req, res, next) => {
  try {
    const doc = await socioeconomicService.getSocioeconomic(req.params.id)
    const result = socioeconomicDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'socioeconomic fetched successfully'
    )
   return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const updateSocioeconomic = async (req, res, next) => {
  try {
    const doc = await socioeconomicService.updateSocioeconomic(req.params.id, req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'socioeconomic updated successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

export const deleteSocioeconomic = async (req, res, next) => {
  try {
    const doc = await socioeconomicService.deleteSocioeconomic(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'socioeconomic deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
