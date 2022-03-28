import { Contact } from './contact.model'

/**
 ** @desc      get all contact document's.
 ** @params    query.
 */
export const getAllContacts = async (query = {}) => {
  try {
    const data = await Contact.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single contact document.
 ** @params    id.
 */
export const getContact = async id => {
  try {
    const data = await Contact.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
