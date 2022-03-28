import { Router } from 'express'
import * as vaccinationsController from './vaccinations.controller'
import multer from 'multer'
// * import validators
// * import middleware

const router = new Router()
const inMemoryStorage = multer.memoryStorage()
const uploadStrategy = multer({ storage: inMemoryStorage }).fields([
  { name: 'vaccinationCard', maxCount: 1 }
])
//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/vaccinations
 ** @params    query, page, limit
 */
router.get('/vaccinations', vaccinationsController.getAllVaccinationsPagination)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/vaccinations
 ** @params    queryString, page, limit
 */
router.get('/vaccinations/all', vaccinationsController.getAllVaccinations)

/**
 ** @access    Private
 ** @route     POST api/vaccinations
 ** @desc      create a record
 ** @params    {payload}
 */
router.post('/vaccinations', uploadStrategy, vaccinationsController.createVaccination)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/vaccinations/id
 ** @params    id
 */
router.get('/vaccinations/:id', vaccinationsController.getOneVaccination)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/vaccinations/id
 ** @params    id, {payload}.
 */
router.put('/vaccinations/:id', vaccinationsController.updateVaccination)

/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/vaccinations/id
 ** @params    id
 */
router.delete('/vaccinations/:id', vaccinationsController.deleteVaccination)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /vaccinations/export/cvs
 ** @params    {rows}
 */
router.post('/vaccinations/export/cvs', (req, res) => {
  const rows = req.body
  console.log('vaccinations exort to cvs')
  console.log({ rows })
  return
})

export default router
