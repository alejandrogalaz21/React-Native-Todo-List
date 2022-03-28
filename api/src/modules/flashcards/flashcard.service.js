import Flashcard from './flashcard.model'

/**
 * @desc      get all flashcard document's.
 * @params    query.
 */
export const getAllFlashcards = async (query = {}) => {
  const data = await Flashcard.find(query).sort({ updatedAt: -1 })
  return data
}

/**
 * @desc      get all flashcard document's paginated.
 * @params    query, page, limit.
 */
export const getFlashcardsPagination = async (query = {}, page = 0, limit = 10) => {
  const options = {
    page,
    limit,
    sort: { updatedAt: -1 }
  }
  const data = await Flashcard.paginate(query, options)
  return data
}

/**
 * @desc      create new flashcard.
 * @params    body.
 */
export const createFlashcard = async body => {
  const data = await Flashcard.create(body)
  return data
}

/**
 * @desc      get single flashcard document.
 * @params    id.
 */
export const getFlashcard = async id => {
  const data = await Flashcard.findById(id)
  return data
}

/**
 * @desc      update single flashcard document.
 * @params    id, body.
 */
export const updateFlashcard = async (id, body) => {
  const data = await Flashcard.findByIdAndUpdate(id, body, {
    new: true
  })
  return data
}

/**
 * @desc      delete single flashcard document.
 * @params    id.
 */
export const deleteFlashcard = async id => {
  const data = await Flashcard.findByIdAndDelete(id)
  return data
}
