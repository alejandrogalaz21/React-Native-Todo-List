// LEGACY CONTROLLER

import appRoot from 'app-root-path'
import file from './file'
import moment from 'moment'
import path from 'path'
import fs from 'fs'

const uploads = path.join(`${appRoot}`, 'api', 'public', 'uploads')

// @params     parameters here.
// @desc       desription method.
export const index = (req, res) => {
  file
    .find({})
    .populate('createdBy')
    .populate('updatedBy')
    .exec()
    .then(doc => res.status(200).json(doc))
    .catch(error => {
      return res.status(500).json({ error })
    })
}

// @params     query string id.
// @desc       desription method.
export const show = (req, res) => {
  file
    .findById(req.params.id)
    .populate('createdBy')
    .populate('updatedBy')
    .populate('deleted_by')
    .exec()
    .then(doc => res.status(200).json(doc))
    .catch(error => {
      return res.status(500).json({ error })
    })
}

// @params     parameters here.
// @desc       desription method.
export const create = (req, res) => {
  try {
    const mime = req.files.filepond.mimetype
    if (Object.keys(req.files).length === 0) return res.status(400).send('No permitido')
    if (req.files.size <= 4) return res.status(400).send('No permitido')
    if (
      mime === 'image/gif' ||
      mime === 'image/jpeg' ||
      mime === 'image/png' ||
      mime === 'image/svg+xml' ||
      mime === 'video/mp4' ||
      mime === 'application/pdf'
    ) {
      const fileRequest = req.files.filepond
      const { name: filename, mimetype } = req.files.filepond

      // Remove the parentheses and spaces with underscores
      const underscoredFilename = filename.replace(/|\(|\)/g, '_')

      const timestamp = moment().format('YYYY-MM-DD-hh-mm-ss')

      // Format the filename
      //  timestamp(YYYY-MM-DD-hh-mm-ss)_<filename, replacing spaces or parentheses for underscores>
      const formattedFilename = `${timestamp}_${underscoredFilename}`

      fileRequest.mv(path.join(uploads, formattedFilename), error => {
        if (error) return res.status(500).json({ message: 'No permitido' })
      })
      const fileData = {
        filename: formattedFilename,
        mimetype,
        path: `/uploads/${formattedFilename}`
        // uploadedBy: req.user._id
      }
      file
        .create(fileData)
        .then(doc => res.status(200).json(doc))
        .catch(error => {
          return res.status(500).json({ error })
        })
    } else {
      return res.status(500).json({ message: 'No permitido' })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error })
  }
}

// @params     parameters here.
// @desc       desription method.
export const update = (req, res) => {
  file
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .exec()
    .then(doc => res.status(200).json(doc))
    .catch(error => {
      return res.status(500).json({ error })
    })
}

// @params     parameters here.
// @desc       desription method.
export const destroy = (req, res) => {
  file
    .findByIdAndRemove(req.params.id, req.body)
    .exec()
    .then(doc => {
      try {
        fs.unlinkSync(`${uploads}${doc.filename}`)
        res.status(200).json({ message: 'file deleted successfully' })
      } catch (error) {
        return res.status(500).json({ error })
      }
    })
    .catch(error => {
      return res.status(500).json({ error })
    })
}

// @params     none.
// @desc       count all the records.
export const count = (req, res) => {
  file
    .count({})
    .exec()
    .then(doc => res.status(200).json({ count: doc }))
    .catch(error => {
      return res.status(500).json({ error })
    })
}
