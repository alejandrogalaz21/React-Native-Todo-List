import HttpStatus from 'http-status-codes'
import * as vaccinationService from './vaccination.service'
import * as ctrlHelpers from '../../../helpers/controllers.util'
import * as vaccinationDto from './vaccinations.dto'
import { uploadFileToAzure } from '../../storage/storage.controller'

/**
 ** @desc   Controller method to get all vaccinations results paginated
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllVaccinationsPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await vaccinationService.getVaccinationsPagination(query, page, limit)
    const result = vaccinationDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all vaccinations fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get all vaccinations available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllVaccinations = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await vaccinationService.getAllVaccinations(query)
    const result = vaccinationDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all vaccinations fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to create new vaccination
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const createVaccination = async (req, res, next) => {
  try {
    console.log('user controller -> newVaccination()')
    // Intentamos subir la imagen al blob storage
    const images = {}
    const vaccinationCard = req.files['vaccinationCard']
      ? await uploadFileToAzure(req.files['vaccinationCard'])
      : { image: null }

    images.vaccinationCard = vaccinationCard

    // Verificamos si se subió
    const doc = !images.error
      ? await vaccinationService.createVaccination(req.body, images)
      : await vaccinationService.createVaccination(req.body, null)

    // Enviamos mensaje según se haya guardado o no
    const message = images.logo
      ? { success: 'Cartilla de vacunación guardada.' }
      : {
          success: 'Cartilla de vacunación guardada.',
          error:
            'Pero la imagen no pudo ser guardada ya que el servicio no estaba disponible, intente editarla más tarde.'
        }
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      message,
      'vaccination created successfully'
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single vaccination available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneVaccination = async (req, res, next) => {
  try {
    const doc = await vaccinationService.getVaccination(req.params.id)
    const result = vaccinationDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'vaccination fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to update single vaccination
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const updateVaccination = async (req, res, next) => {
  try {
    const doc = await vaccinationService.updateVaccination(req.params.id, req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'vaccination updated successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to delete a vaccination
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const deleteVaccination = async (req, res, next) => {
  try {
    const doc = await vaccinationService.deleteVaccination(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'vaccination deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
