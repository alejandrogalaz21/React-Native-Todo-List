/* eslint-disable no-underscore-dangle */
// eslint-disable-next-line
export const single = doc => ({
  id: doc._id,
  name: `${doc.name} ${doc.lastName || ''}`,
  firstName: doc.name,
  lastName: doc.lastName || '',
  created_At: doc.createdAt,
  updated_At: doc.updatedAt,
  isActive: doc.active
})

export const multiple = resources =>
  resources.map(resource => single(resource._doc))

export const pagination = resource => {
  const {
    docs,
    totalDocs,
    limit,
    totalPages,
    page,
    pagingCounter,
    hasPrevPage,
    hasNextPage,
    prevPage,
    nextPage
  } = resource

  return {
    docs: docs.map(r => single(r)),
    totalDocs,
    limit,
    totalPages,
    page,
    pagingCounter,
    hasPrevPage,
    hasNextPage,
    prevPage,
    nextPage
  }
}
