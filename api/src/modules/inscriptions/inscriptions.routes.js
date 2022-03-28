import * as inscription from './inscriptions.controller'
import authMiddleware from '../../middleware/auth.middleware'
import { Router } from 'express'
import aclMiddleware from '../../middleware/aclMiddleware'

const router = new Router()

router.post('/inscriptions/', authMiddleware, aclMiddleware, inscription.create)

/**
 * @desc      get all the records paginated
 * @access    Public
 * @route     GET api/appointments
 * @params    query, page, limit
 */
router.get('/inscriptions/', authMiddleware, aclMiddleware, inscription.getAllInscriptionsPagination)
router.get('/inscriptions/approved', authMiddleware, aclMiddleware, inscription.getAllInscriptionsPaginationApproved)
router.post('/inscriptions/export', authMiddleware, aclMiddleware, inscription.exportMany)
router.get('/inscriptions/:_id', authMiddleware, aclMiddleware, inscription.readOne)
router.put('/inscriptions/:_id', authMiddleware, aclMiddleware, inscription.update)
router.delete('/inscriptions/:_id', authMiddleware, aclMiddleware, inscription.remove)

export default router
