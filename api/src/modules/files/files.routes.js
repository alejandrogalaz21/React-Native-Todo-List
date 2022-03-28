import { Router } from 'express'
import * as file from './files.controller'

const router = new Router()

// @access    Private
// @route     GET api/files
// @desc      get all the records.
// @params    none.
router.get('/files', file.index)

// @access    Private
// @route     GET api/files/count
// @desc      return the count of all records.
// @params    none.
router.get('/files/count', file.count)

// @access    Private
// @route     GET api/files/id
// @desc      get single record.
// @params    id.
router.get('/files/:id', file.show)

// @access    Private
// @route     POST api/files
// @desc      create a record.
// @params    Object.
router.post('/files', file.create)

// @access    Private
// @route     PUT api/files/id
// @desc      update a record.
// @params    id, Object.
router.put('/files/:id', file.update)

// @access    Private
// @route     DELETE api/files/id
// @desc      delete a record.
// @params    id, Object.
router.delete('/files/:id', file.destroy)

export const files = router
