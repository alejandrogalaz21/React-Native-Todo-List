import File from './file'


/**
 * @desc      create new file.
 * @params    filename.
 * @params    mimetype.
 * @params    path.
 */
 export const createFile = async (filename, mimetype, path) => {
    try {
      const data = await File.create({ filename, mimetype, path })
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
  
/**
 * @desc      get single file document.
 * @params    id.
 */
 export const getFile = async id => {
    try {
      const data = await File.findById(id)
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
  