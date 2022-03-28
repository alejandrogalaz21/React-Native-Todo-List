import HttpStatus from 'http-status-codes'
import Inscription from './inscription.model'
import { blue } from '../../helpers/chalk.helper'
import { exportToXLSX } from '../../libs/exporting/excel'
import { dmy } from '../../helpers/dates'
import Historical from './../historicals/historical.model'
import * as ctrlHelpers from './../../helpers/controllers.util'
import * as inscriptionService from './inscription.service'

export async function create(req, res, next) {
  try {
    blue('inscriptions > controller > create')
    const payload = req.body
    const result = await Inscription.create(payload)
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export async function readMany(req, res, next) {
  try {
    blue('inscriptions > controller > readMany')
    const query = req.query || {}
    const result = await Inscription.find(query)
      .populate({ path: 'historical', populate: 'createdBy' })
      .populate('general address tutor ailment environment documentation authorization')
      .sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export const getAllInscriptionsPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await inscriptionService.getInscriptionsPagination(query, page, limit, req.user)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all inscriptions fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const getAllInscriptionsPaginationApproved = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await inscriptionService.getInscriptionsPaginationApproved(query, page, limit, req.user)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all inscriptions fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}


export async function readManyApproved(req, res, next) {
  try {
    blue('inscriptions > controller > readManyApproved')
    const query = { ...req.query, status: 1 } || {}
    const result = await Inscription.find(query)
      .populate({ path: 'historical', populate: 'createdBy' })
      .populate('general address tutor ailment environment documentation authorization')
      .sort({ updatedAt: -1 })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export async function exportMany(req, res, next) {
  try {
    const selection = req.body.selection || []
    const query = selection.length > 0 ? { _id: { $in: selection } } : {}

    const payload = await Inscription.find(query).sort({ updatedAt: -1 })

    const columns = [
      { title: 'Activo', value: row => (row.active ? 'Sí' : 'No') },
      { title: 'Creado', value: row => dmy(row.createdAt) },
      { title: 'Modificado', value: row => dmy(row.updatedAt) }
    ]

    const sheets = [{ title: 'Inscripciones', data: payload, columns }]

    const xlsx = exportToXLSX('Inscripciones', sheets)
    res.set('Content-disposition', 'attachment; filename=Inscripciones.xlsx')

    return res.status(200).type('xlsx').send(xlsx)
  } catch (error) {
    next(error)
  }
}

export async function readOne(req, res, next) {
  try {
    blue('inscriptions > controller > readOne')
    const { _id } = req.params
    const result = await Inscription.findById(_id).populate('general address tutor ailment environment documentation authorization').populate({ path: 'historical', populate: 'createdBy' })
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export async function update(req, res, next) {
  try {
    blue('inscriptions > controller > update')
    const record = await Inscription.findById(req.params._id).lean()
    const historical = await Historical.create({
      ...req.body.historical,
      module: 'inscription',
      title: record.name,
      createdBy: req.user._id,
      document: record._id
    })
    const result = await Inscription.findByIdAndUpdate(
      req.params._id,
      { ...req.body.payload, $push: { historical } },
      { new: true }
    )
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export async function remove(req, res, next) {
  try {
    blue('inscriptions > controller > remove')
    const { _id } = req.params
    const result = await Inscription.findByIdAndDelete(_id)
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

