import { Router } from 'express'
import multer from 'multer'
import * as storageController from './storage.controller'

// * import validators
// * import middleware

const router = new Router()

//* C.R.U.D ROUTES *//

//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//
const inMemoryStorage = multer.memoryStorage()
const uploadStrategy = multer({ storage: inMemoryStorage }).single('file')

/**
 * @access    Private
 * @route     POST api/storage/file
 * @desc      uploads file
 * @params    {payload}
 */
 router.post('/storage/file', uploadStrategy, storageController.uploadFileToAzure)


 /**
  * @access    Private
  * @route     POST api/storage/file
  * @desc      uploads file
  * @params    {payload}
  */
  router.get('/storage/file/:id', uploadStrategy, storageController.getFileFromAzure)

/**
 * @access    Private
 * @route     POST api/storage/file
 * @desc      uploads file
 * @params    {payload}
 */
router.post('/storage-get-token', uploadStrategy, storageController.getSasToken)

export default router
