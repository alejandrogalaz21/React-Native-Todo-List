export function single(doc) {
  return {
      active: doc.active,
      id: doc._id,
      folio: doc.folio,
      folioPrevious: doc.folioPrevious,
      center: doc.center,
      name: doc.name,
      lastName: doc.lastName,
      motherLastName: doc.motherLastName,
      service: doc.service,
      modality: doc.modality,
      cycle: doc.cycle,
      grade: doc.grade,
      familyFolio: doc.familyFolio,
      institution: doc.institution,
      genre: doc.genre,
      dateOfBirth: doc.dateOfBirth,
      curp: doc.curp,
      city: doc.city,
      state: doc.state,
      country: doc.country,
      isParent: doc.isParent,
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
    folio: doc.folio,
    folioPrevious: doc.folioPrevious,
    center: doc.center,
    name: doc.name,
    lastName: doc.lastName,
    motherLastName: doc.motherLastName,
    service: doc.service,
    modality: doc.modality,
    cycle: doc.cycle,
    grade: doc.grade,
    familyFolio: doc.familyFolio,
    institution: doc.institution,
    genre: doc.genre,
    dateOfBirth: doc.dateOfBirth,
    curp: doc.curp,
    city: doc.city,
    state: doc.state,
    country: doc.country,
    isParent: doc.isParent,
    historical: doc.historical,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
    active: doc.active
  }
}