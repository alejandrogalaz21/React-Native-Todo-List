export function single(doc) {
  return {
      active: doc.active,
      id: doc._id,
      inscription: doc.inscription,
      cost: doc.cost,
      scholarship: doc.scholarship,
      percentage: doc.percentage,
      bankReference: doc.bankReference,
      group: doc.group,
      desc: doc.desc,
      historical: doc.historical,
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
    inscription: doc.inscription,
    cost: doc.cost,
    scholarship: doc.scholarship,
    percentage: doc.percentage,
    bankReference: doc.bankReference,
    group: doc.group,
    desc: doc.desc,
    historical: doc.historical,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
    active: doc.active
  }
}