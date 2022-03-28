import azureStorage from 'azure-storage'
import { BlobServiceClient } from '@azure/storage-blob'
import { getEnv } from './../../keys'

const { AZURE_CONECTION_STRING } = getEnv()
/**
 * @desc      upload file to Azure blob storage.
 * @params    containerName - Container for upload.
 * @params    blobName - Name of file to upload.
 * @params    stream - Strem of file to upload.
 * @params    streamLength - Length of body in bytes.
 * @params    fileMimeType - FileType.
 */
export const uploadToBlobStorage = async (
  containerName,
  blobName,
  stream,
  streamLength,
  fileMimeType
) => {
  try {
    // Generamos una conexion al blob storage con nuestra cadena de conexión
    const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_CONECTION_STRING)
    // Especificamos a que contenedor de nuestro storage nos conectaremos
    const containerClient = blobServiceClient.getContainerClient(containerName)
    // Indicamos el nombre de archivo que subiremos
    const blockBlobClient = containerClient.getBlockBlobClient(blobName)
    // Subimos el archivo, agregamos el encabezado de tipo de archivo (SVG, PNG, JPG...)
    const data = await blockBlobClient.upload(
      stream,
      streamLength,
      { blobHTTPHeaders: { blobContentType: fileMimeType } },
      err => {
        if (err) {
          throw new Error(err)
        }
      }
    )
    return data
  } catch (error) {
    const data = { error: 'Ocurrió un error al guardar la imagen.' }
    return data
  }
}

/**
 * @desc      upload file to Azure blob storage.
 * @params    containerName - Container name.
 */
 export const getFromBlobStorage = async (
  containerName,
  blobName
) => {
  try {
    // Generamos una conexion al blob storage con nuestra cadena de conexión
    const blobServiceClient = BlobServiceClient.fromConnectionString(AZURE_CONECTION_STRING)
    // Especificamos a que contenedor de nuestro storage nos conectaremos
    const containerClient = blobServiceClient.getContainerClient(containerName)
    // Indicamos el nombre de archivo que subiremos
    const blockBlobClient = containerClient.getBlockBlobClient(blobName)
    // Subimos el archivo, agregamos el encabezado de tipo de archivo (SVG, PNG, JPG...)
    const data = await blockBlobClient.download(0)
    return data
  } catch (error) {
    console.log("error")
    console.log(error)
    throw new Error(error)
  }
}
/**
 * @desc      generate Sas token for storage.
 * @params    context, container, blob -int
 */
export const generateSasToken = async (container, blobName, permissions) => {
  var blobService = azureStorage.createBlobService(AZURE_CONECTION_STRING)

  // Set start time to five minutes ago to avoid clock skew.
  var startDate = new Date()
  startDate.setMinutes(startDate.getMinutes() - 5)
  var expiryDate = new Date(startDate)
  expiryDate.setMinutes(startDate.getMinutes() + 12)

  permissions = permissions || azureStorage.BlobUtilities.SharedAccessPermissions.READ

  var sharedAccessPolicy = {
    AccessPolicy: {
      Permissions: permissions,
      Start: startDate,
      Expiry: expiryDate
    }
  }

  var sasToken = blobService.generateSharedAccessSignature(
    container,
    blobName,
    sharedAccessPolicy
  )

  return {
    token: sasToken,
    uri: blobService.getUrl(container, blobName, sasToken, true)
  }
}
