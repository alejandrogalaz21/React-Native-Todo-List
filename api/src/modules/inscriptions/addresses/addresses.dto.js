export function single(doc) {
  return {
    active: doc.active,
    id: doc._id,
    inscription: doc.inscription,
    phone: doc.phone,
    street: doc.street,
    interiorNumber: doc.interiorNumber,
    outdoorNumber: doc.outdoorNumber,
    suburb: doc.suburb,
    municipality: doc.municipality,
    state: doc.state,
    country: doc.country,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
    cp: doc.cp
  }
}

export function multiple(docs) {
  return docs.map(doc => single(doc))
}

export function pagination(resource) {
  return {
    docs: resource.docs.map(doc => singlePagination(doc)),
    totalDocs: resource.totalDocs,
    limit: resource.limit,
    totalPages: resource.totalPages,
    page: resource.page,
    pagingCounter: resource.pagingCounter,
    hasPrevPage: resource.hasPrevPage,
    hasNextPage: resource.hasNextPage,
    prevPage: resource.prevPage,
    nextPage: resource.nextPage
  }
}

export function singlePagination(doc) {
  return {
    id: doc._id,
    inscription: doc.inscription,
    phone: doc.phone,
    street: doc.street,
    interiorNumber: doc.interiorNumber,
    outdoorNumber: doc.outdoorNumber,
    suburb: doc.suburb,
    municipality: doc.municipality,
    state: doc.state,
    country: doc.country,
    cp: doc.cp
  }
}
