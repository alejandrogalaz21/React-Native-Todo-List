import { Router } from 'express'
import * as contactsController from './contacts.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/contacts
 ** @params    queryString, page, limit
 */
router.get('/contacts/all', authMiddleware, contactsController.getAllContacts)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/contacts/id
 ** @params    id
 */
router.get('/contacts/:id', authMiddleware, contactsController.getOneContact)

export default router
