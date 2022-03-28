import HttpStatus from 'http-status-codes'
import * as debtService from './debt.service'
import * as ctrlHelpers from './../../utils/controllers.util'
import { blue } from './../../helpers/chalk.helper'
import { ErrorHandler } from '../../helpers/error.helper'
import { notificationModules } from '../notifications/notification.model'

/**
 ** @desc   Controller method to get all products results paginated
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const readManyPagination = async (req, res, next) => {
  try {
    blue('collection > controller > readManyPagination')
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await debtService.getAllCollectionPagination(query, page, limit)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all collections fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to create new product
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const create = async (req, res, next) => {
  try {
    blue('collection > controller > create')
    const infoInscription = await debtService.getOneInscription(req.params.id)
    const fullName =
      infoInscription.general.name +
      ' ' +
      infoInscription.general.lastName +
      ' ' +
      infoInscription.general.motherLastName

    const { concept, date, observations } = req.body
    const newPay = {
      inscription: req.params.id,
      name: fullName,
      conceptName: concept.label,
      concept: concept.value,
      amount: concept.amount,
      date,
      observations,
      currentDebt: concept.amount,
      collections: []
    }
    const newAmount = parseInt(concept.amount)
    const recal = infoInscription.debt + newAmount
    const checkDebts = await debtService.checkAllDebts(req.params.id, concept.value)
    if (checkDebts.length >= 1) {
      throw new ErrorHandler({
        status: 400,
        message: 'Adeudo ya registrado',
        description: 'El registro ya tiene un adeudo relacionado a este concepto activo'
      })
    } else {
      const doc = await debtService.createCollection(newPay)
      await debtService.updateInscriptionDebt(req.params.id, recal)
      const response = ctrlHelpers.responseFormat(
        HttpStatus.CREATED,
        doc,
        'Debt created successfully'
      )
      req.app.emit('notification', req.user, 'creó', 'adeudo', doc, notificationModules.debt)
      return res.status(HttpStatus.CREATED).json(response)
    }
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single product available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const readOne = async (req, res, next) => {
  try {
    blue('collection > controller > readOne')
    const doc = await debtService.getOneCollection(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      doc,
      'collection fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to update single product
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const update = async (req, res, next) => {
  try {
    blue('collection > controller > update')
    const doc = await debtService.updateCollection(req.params.id, req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'collection updated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'actualizó',
      'adeudo',
      doc,
      notificationModules.debt
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to update single product
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export async function readAllChildDebts(req, res, next) {
  try {
    blue('collection > controller > readAllChildDebts')
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await debtService.getAllChildDebts(req.params.id, query, page, limit)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      documents,
      'all debts fetched successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get all products available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const readMany = async (req, res, next) => {
  try {
    const documents = await debtService.getAllDebts(req.params.id, req.query.concept)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all debts fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get all products available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const readManyFalse = async (req, res, next) => {
  try {
    const documents = await debtService.getAllDebtsFalse(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all debts fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}
