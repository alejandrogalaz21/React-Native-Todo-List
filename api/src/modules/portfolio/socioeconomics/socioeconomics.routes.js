import { Router } from 'express'
import * as socioeconomicsController from './socioeconomics.controller'
import aclMiddleware from './../../../middleware/aclMiddleware'
import authMiddleware from './../../../middleware/auth.middleware'


const router = new Router()

//* C.R.U.D ROUTES *//
router.get('/socioeconomics', authMiddleware, aclMiddleware, socioeconomicsController.getAllSocioeconomicsPagination)
router.get('/socioeconomics/all', authMiddleware, aclMiddleware, socioeconomicsController.getAllSocioeconomics)
router.post('/socioeconomics', authMiddleware, aclMiddleware, socioeconomicsController.createSocioeconomic)
router.get('/socioeconomics/:id', authMiddleware, aclMiddleware, socioeconomicsController.getOneSocioeconomic)
router.put('/socioeconomics/:id', authMiddleware, aclMiddleware, socioeconomicsController.updateSocioeconomic)
router.delete('/socioeconomics/:id', authMiddleware, aclMiddleware, socioeconomicsController.deleteSocioeconomic)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /socioeconomics/export/cvs
 ** @params    {rows}
 */
router.post('/socioeconomics/export/cvs', (req, res) => {
  const rows = req.body
  console.log('socioeconomics exort to cvs')
  console.log({ rows })
  return
})

export default router
