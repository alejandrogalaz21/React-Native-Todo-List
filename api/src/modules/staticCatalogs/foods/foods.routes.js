import { Router } from 'express'
import * as foodsController from './foods.controller'
// * import validators
// * import middleware

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/foods
 ** @params    queryString, page, limit
 */
router.get('/foods/all', foodsController.getAllFoods)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/foods/id
 ** @params    id
 */
router.get('/foods/:id', foodsController.getOneFood)

export default router
