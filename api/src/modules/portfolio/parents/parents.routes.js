import { Router } from 'express'
import * as parentsController from './parents.controller'
import aclMiddleware from './../../../middleware/aclMiddleware'
import authMiddleware from './../../../middleware/auth.middleware'

const router = new Router()
router.get('/parents/infant/:infantId', authMiddleware, aclMiddleware, parentsController.getAllParentsPagination)
router.get('/parents/all', authMiddleware, aclMiddleware, parentsController.getAllParents)
router.post('/parents', authMiddleware, aclMiddleware, parentsController.createParent)
router.get('/parents/:id', authMiddleware, aclMiddleware, parentsController.getOneParent)
router.put('/parents/:id', authMiddleware, aclMiddleware, parentsController.updateParent)
router.delete('/parents/:id', authMiddleware, aclMiddleware, parentsController.deleteParent)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /parent/export/cvs
 ** @params    {rows}
 */
router.post('/parent/export/cvs', (req, res) => {
  const rows = req.body
  console.log('parent exort to cvs')
  console.log({ rows })
  return
})

export default router
