import HttpStatus from 'http-status-codes'
import * as ctrlHelpers from './../../utils/controllers.util'
import * as StorageService from './storage.service'
import { v1 } from 'uuid'
import { getEnv } from './../../keys'
import * as fileService from './../files/file.service'

const { AZURE_ACCOUNT_NAME, AZURE_CONTAINER_NAME } = getEnv()

/**
 * @desc   Controller method to upload file to azure blob storage
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */
export const uploadFileToAzure = async image => {
  try {
    // Obtenemos el nombre de archivo con un UUID
    const blobName = getBlobName(image[0].originalname)
    // Obtenemos el nombre de contenedor desde nuestra variable de entorno
    const container = AZURE_CONTAINER_NAME
    // Subimos la imagen al blob
    const uploadRes = await StorageService.uploadToBlobStorage(
      container,
      blobName,
      image[0].buffer,
      image[0].size,
      image[0].mimetype
    )
    console.log(uploadRes)
    // Si no hubo error regresamos la url para obtener el recurso, de lo contrario notificamos del error.
    return uploadRes.error
      ? uploadRes
      : {
          url: `https://${AZURE_ACCOUNT_NAME}.blob.core.windows.net/${container}/${blobName}`
        }
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc   Controller method to get file from azure blob storage
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */
export const getFileFromAzure = async (req, res, next) => {
  try {
    const fileSaved = await fileService.getFile(req.params.id)

    // Obtenemos el nombre de contenedor desde nuestra variable de entorno
    const container = AZURE_CONTAINER_NAME
    // Subimos la filen al blob
    const downloadBlockBlobResponse = await StorageService.getFromBlobStorage(
      container,
      fileSaved.filename
    )
    const img = await streamToString(downloadBlockBlobResponse.readableStreamBody)
    // const response = ctrlHelpers.responseFormat(HttpStatus.OK, fileSaved, 'File uploaded')
    return res.status(HttpStatus.OK).json({ img })
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc   Controller method to get a sas token for blob storage
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const getSasToken = async (req, res, next) => {
  try {
    const request = req.body

    // Here we can add validations to see if we generate the token or not

    const data = await StorageService.generateSasToken(
      request.container,
      request.blobName,
      null
    )

    const response = ctrlHelpers.responseFormat(HttpStatus.OK, data, 'Token generated')

    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc      Generates an unique file name for the file with a UUID prefix.
 * @params    originalName.
 */
const getBlobName = originalName => {
  return `${v1()}-${originalName}`
}

const streamToString = async readableStream => {
  return new Promise((resolve, reject) => {
    const chunks = []
    readableStream.on('data', data => {
      chunks.push(data.toString())
    })
    readableStream.on('end', () => {
      resolve(chunks.join(''))
    })
    readableStream.on('error', reject)
  })
}
