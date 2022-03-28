import HttpStatus from 'http-status-codes'
import * as userDashboardTestService from './userDashboardTest.service'
import * as ctrlHelpers from './../../utils/controllers.util'
import { sign } from 'jsonwebtoken'
import { ENV } from '../../config/env'

/**
 * @desc   Controller method to get all usersDashboardTest results paginated
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */
export const getAllUsersDashboardTestPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents =
      await userDashboardTestService.getUsersDashboardTestPagination(
        query,
        page,
        limit
      )
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all usersDashboardTest fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to get all usersDashboardTest available
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */
export const getAllUsersDashboardTest = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await userDashboardTestService.getAllUsersDashboardTest(
      query
    )
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all usersDashboardTest fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to create new userDashboardTest
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */
export const createUserDashboardTest = async (req, res, next) => {
  try {
    const doc = await userDashboardTestService.createUserDashboardTest(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'userDashboardTest created successfully'
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to get single userDashboardTest available
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */
export const getOneUserDashboardTest = async (req, res, next) => {
  try {
    const doc = await userDashboardTestService.getUserDashboardTest(
      req.params.id
    )
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      doc,
      'userDashboardTest fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to update single userDashboardTest
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */
export const updateUserDashboardTest = async (req, res, next) => {
  try {
    const doc = await userDashboardTestService.updateUserDashboardTest(
      req.params.id,
      req.body
    )
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'userDashboardTest updated successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to delete a userDashboardTest
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */
export const deleteUserDashboardTest = async (req, res, next) => {
  try {
    const doc = await userDashboardTestService.deleteUserDashboardTest(
      req.params.id
    )
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'userDashboardTest deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to login
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */
export const logInDashboardUser = async (req, res, next) => {
  try {
    const doc = await userDashboardTestService.getDashboardUserByMail(req.body)
    if (doc == null) {
      response = ctrlHelpers.responseFormat(
        HttpStatus.UNAUTHORIZED,
        false,
        'Login Equivocado'
      )
    }
    const passwordValidation = req.body.password.localeCompare(doc?.password)
    let response

    switch (passwordValidation) {
      case 0:
        response = ctrlHelpers.responseFormat(
          HttpStatus.OK,
          sign({ doc }, ENV.SECRET),
          'Logged in successfully'
        )
        break
      case 1:
        response = ctrlHelpers.responseFormat(
          HttpStatus.UNAUTHORIZED,
          false,
          'Log in equivocado'
        )
        break

      default:
        break
    }

    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}
