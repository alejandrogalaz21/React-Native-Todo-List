export function single(doc) {
  return {
      active: doc.active,
      id: doc._id,
      infant: doc.infant,
      name: doc.name,
      lastName: doc.lastName,
      fullName: doc.fullName,
      address: doc.address,
      homePhone: doc.homePhone,
      cellPhone: doc.cellPhone,
      workPhone: doc.workPhone,
      createdAt: doc.createdAt,
      updatedAt: doc.updatedAt
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
    infant: doc.infant,
    name: doc.name,
    lastName: doc.lastName,
    fullName: doc.fullName,
    address: doc.address,
    homePhone: doc.homePhone,
    cellPhone: doc.cellPhone,
    workPhone: doc.workPhone,
    active: doc.active,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt
  }
}