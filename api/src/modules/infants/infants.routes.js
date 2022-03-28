import { Router } from 'express'
import * as infantsController from './infants.controller'
import aclMiddleware from '../../middleware/aclMiddleware'
import authMiddleware from '../../middleware/auth.middleware'


const router = new Router()

router.get('/infants', authMiddleware, aclMiddleware, infantsController.getAllInfantsPagination)
router.get('/infants/all', authMiddleware, aclMiddleware, infantsController.getAllInfants)
router.post('/infants', authMiddleware, aclMiddleware, infantsController.createInfant)
router.get('/infants/:id', authMiddleware, aclMiddleware, infantsController.getOneInfant)
router.put('/infants/:id', authMiddleware, aclMiddleware, infantsController.updateInfant)
router.delete('/infants/:id', authMiddleware, aclMiddleware, infantsController.deleteInfant)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /infants/export/cvs
 ** @params    {rows}
 */
router.post('/infants/export/cvs', (req, res) => {
  const rows = req.body
  console.log('infants exort to cvs')
  console.log({ rows })
  return
})

export default router
