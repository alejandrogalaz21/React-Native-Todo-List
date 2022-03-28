/* eslint-disable flowtype/no-types-missing-file-annotation */
import HttpStatus from 'http-status-codes'
import * as collectionService from './collection.service'
import * as ctrlHelpers from './../../utils/controllers.util'
import { blue } from './../../helpers/chalk.helper'
import Debt from './../debt/debt.model'
import { ErrorHandler } from '../../helpers/error.helper'

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
    const documents = await collectionService.getAllCollectionPagination(query, page, limit)
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
 ** @desc   Controller method to get all products available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const readMany = async (req, res, next) => {
  try {
    blue('collection > controller > readMany')
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await collectionService.getAllCollections(query)
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
    const infoInscription = await collectionService.getOneInscription(req.params.id)
    const fullName =
      infoInscription.general.name +
      ' ' +
      infoInscription.general.lastName +
      ' ' +
      infoInscription.general.motherLastName

    if (infoInscription.debt <= 0) {
      throw new ErrorHandler({
        status: 400,
        message: 'Adeudos inexistente',
        description: 'La inscripción ya no cuenta con saldo a pagar'
      })
    } else {
      const {
        concept,
        amount,
        amountInFavor,
        monthAndYear,
        date,
        folio,
        observations
      } = req.body
      let newAmount = parseFloat(amount)
      let newAmountInFavor = parseFloat(amountInFavor)
      if (isNaN(newAmount)) {
        newAmount = 0
      }
      if (isNaN(newAmountInFavor)) {
        newAmountInFavor = 0
      }
      if (newAmountInFavor > infoInscription.positiveBalance) {
        throw new ErrorHandler({
          status: 400,
          message: 'Saldo a favor excedido',
          description:
            'El monto ingresado como saldo a favor excedió el saldo disponible existente'
        })
      }
      const newPay = {
        inscription: req.params.id,
        name: fullName,
        concept: concept.value,
        amount: newAmount,
        amountInFavor: newAmountInFavor,
        monthAndYear,
        date,
        folio,
        associatedCenter: infoInscription.general.center.name,
        associatedService: infoInscription.general.service.name,
        observations
      }
      const debtId = concept.value
      const debtData = await Debt.findOne({ _id: debtId })
      const newCurrentDebt = debtData.currentDebt - (newAmount + newAmountInFavor)
      if (newCurrentDebt === 0) {
        const recal = infoInscription.debt - (newAmount + newAmountInFavor)
        const newPositiveBalance = infoInscription.positiveBalance - newAmountInFavor
        const update = { currentDebt: newCurrentDebt, status: true }
        await collectionService.updateDebt(debtId, update)
        await collectionService.updateInscription1(req.params.id, recal, newPositiveBalance)
      } else if (newCurrentDebt < 0) {
        const totalAmount = newAmount + newAmountInFavor
        const difference = Math.abs(totalAmount - debtData.currentDebt)
        const recal = infoInscription.debt - totalAmount + difference
        const newPositiveBalance = difference + infoInscription.positiveBalance
        const update = { currentDebt: 0, status: true }
        await collectionService.updateDebt(debtId, update)
        await collectionService.updateInscription(req.params.id, recal, newPositiveBalance)
      } else {
        const newPositiveBalance = infoInscription.positiveBalance - newAmountInFavor
        const recal = infoInscription.debt - (newAmount + newAmountInFavor)
        const update = { currentDebt: newCurrentDebt }
        await collectionService.updateDebt(debtId, update)
        await collectionService.updateInscription3(req.params.id, recal, newPositiveBalance)
      }
      const doc = await collectionService.createCollection(newPay, debtId)
      const response = ctrlHelpers.responseFormat(
        HttpStatus.CREATED,
        doc,
        'collection created successfully'
      )
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
    const doc = await collectionService.getOneCollection(req.params.id)
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
    const doc = await collectionService.updateCollection(req.params.id, req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'collection updated successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to delete a product
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const remove = async (req, res, next) => {
  try {
    blue('collection > controller > remove')
    const doc = await collectionService.deleteCollection(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'collection deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to delete a product
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export async function reareadAuthorization(req, res, next) {
  try {
    blue('collection > controller > reareadManyPaymentsdMany')
    const doc = await collectionService.getInscription(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'info fetched successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to delete a product
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export async function readAllChildPayments(req, res, next) {
  try {
    blue('collection > controller > readAllChildPayments')
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await collectionService.getAllChildPayments(
      req.params.id,
      query,
      page,
      limit
    )
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      documents,
      'all Payments fetched successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get all inscriptions results paginated
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const readManyInscriptionsPagination = async (req, res, next) => {
  try {
    blue('collection > controller > readManyInscriptionsPagination')
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await collectionService.getAllInscriptionsPagination(query, page, limit)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all inscriptions fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get all inscriptions results paginated
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const readBalances = async (req, res, next) => {
  try {
    blue('collection > controller > readBalances')
    //const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await collectionService.getAllBalances()
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'successful balance reading'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}
