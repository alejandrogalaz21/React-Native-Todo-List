import HttpStatus from 'http-status-codes'
import * as nutritionService  from './nutrition.service'
import * as ctrlHelpers from './../../../helpers/controllers.util'
import * as nutritionDto from './nutritions.dto'

export const getAllNutritionsPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await nutritionService.getNutritionsPagination(query, page, limit)
    const result = nutritionDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all nutritions fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const getAllNutritions = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await nutritionService.getAllNutritions(query)
    const result = nutritionDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all nutritions fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const createNutrition = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await nutritionService.createNutrition(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'nutrition created successfully'
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

export const getOneNutrition = async (req, res, next) => {
  try {
    const doc = await nutritionService.getNutrition(req.params.id)
    const result = nutritionDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'nutrition fetched successfully'
    )
   return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const updateNutrition = async (req, res, next) => {
  try {
    const doc = await nutritionService.updateNutrition(req.params.id, req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'nutrition updated successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

export const deleteNutrition = async (req, res, next) => {
  try {
    const doc = await nutritionService.deleteNutrition(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'nutrition deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
