import HttpStatus from 'http-status-codes'
import * as addressService from './address.service'
import * as ctrlHelpers from '../../../helpers/controllers.util'
import * as addressDto from './addresses.dto'
import { notificationModules } from '../../notifications/notification.model'

/**
 ** @desc   Controller method to get all addresses results paginated
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllAddressesPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await addressService.getAddressesPagination(query, page, limit)
    const result = addressDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all addresses fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get all addresses available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllAddresses = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await addressService.getAllAddresses(query)
    const result = addressDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all addresses fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to create new address
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const createAddress = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await addressService.createAddress(req.body, req.user._id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'address created successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'creó',
      'domicilio',
      doc,
      notificationModules.inscription
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single address available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneAddress = async (req, res, next) => {
  try {
    const doc = await addressService.getAddress(req.params.id)
    const result = addressDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'address fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to update single address
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const updateAddress = async (req, res, next) => {
  try {
    const doc = await addressService.updateAddress(req.params.id, req.body, req.user._id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'address updated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'actualizó',
      'domicilio',
      doc,
      notificationModules.inscription
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to delete a address
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const deleteAddress = async (req, res, next) => {
  try {
    const doc = await addressService.deleteAddress(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'address deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
