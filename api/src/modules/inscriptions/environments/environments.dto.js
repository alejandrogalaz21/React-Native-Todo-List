export function single(doc) {
  return {
      active: doc.active,
      id: doc._id,
      inscription: doc.inscription,
      q1: doc.q1,
      q2: doc.q2,
      q3: doc.q3,
      activity: doc.activity,
      relationship3: doc.relationship3,
      q4: doc.q4,
      relationship4: doc.relationship4,
      q5: doc.q5,
      relationship5: doc.relationship5,
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
    q1: doc.q1,
    q2: doc.q2,
    q3: doc.q3,
    activity: doc.activity,
    relationship3: doc.relationship3,
    q4: doc.q4,
    relationship4: doc.relationship4,
    q5: doc.q5,
    relationship5: doc.relationship5,
    historical: doc.historical,
  }
}