export function single(doc) {
  return {
      active: doc.active,
      id: doc._id,
      inscription: doc.inscription,
      q1: doc.q1,
      justify1: doc.justify1,
      q2: doc.q2,
      justify2: doc.justify2,
      q3: doc.q3,
      q4: doc.q4,
      q5: doc.q5,
      q6: doc.q6,
      historical: doc.historical,
      n: doc.n,
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
    q1: doc.q1,
    justify1: doc.justify1,
    q2: doc.q2,
    justify2: doc.justify2,
    q3: doc.q3,
    q4: doc.q4,
    q5: doc.q5,
    q6: doc.q6,
    historical: doc.historical,
    n: doc.n,
  }
}