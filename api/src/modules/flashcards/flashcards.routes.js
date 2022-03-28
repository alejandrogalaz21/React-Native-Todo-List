import { Router } from 'express'
import * as flashcardsController from './flashcards.controller'
// * import validators
// * import middleware 


const router = new Router()

//* C.R.U.D ROUTES *//

/**
 * @desc      get all the records paginated
 * @access    Public
 * @route     GET api/flashcards
 * @params    query, page, limit
 */
router.get('/flashcards', flashcardsController.getAllFlashcardsPagination)

/**
 * @desc      get all the records
 * @access    Public
 * @route     GET api/flashcards
 * @params    queryString, page, limit
 */
router.get('/flashcards/all', flashcardsController.getAllFlashcards)

/**
 * @access    Private
 * @route     POST api/flashcards
 * @desc      create a record
 * @params    {payload}
 */
router.post('/flashcards', flashcardsController.createFlashcard)

/**
 * @desc      get single record
 * @access    Private
 * @route     GET api/flashcards/id
 * @params    id
 */
router.get('/flashcards/:id', flashcardsController.getOneFlashcard)

/**
 * @desc      update a record
 * @access    Private
 * @route     PUT api/flashcards/id
 * @params    id, {payload}.
 */
router.put('/flashcards/:id', flashcardsController.updateFlashcard)

/**
 * @desc      delete a record
 * @access    Private
 * @route     DELETE api/flashcards/id
 * @params    id
 */
router.delete('/flashcards/:id', flashcardsController.deleteFlashcard)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 * @desc      export to cvs the selected rows
 * @access    Private
 * @route     POST /flashcards/export/cvs
 * @params    {rows}
 */
router.post('/flashcards/export/cvs', (req, res) => {
  const rows = req.body
  console.log('flashcards exort to cvs')
  console.log({ rows })
  return
})

export default router
