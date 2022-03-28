export function single(doc) {
  return {
      active: doc.active,
      id: doc._id,
      infant: doc.infant,
      nutrition: doc.nutrition,
      socioeconomic: doc.socioeconomic,
      health: doc.health,
      parent: doc.parent,
      documentation: doc.documentation,
      vaccination: doc.vaccination,
      weight: doc.weight,
      ailment: doc.ailment,
      accident: doc.accident,
      environment: doc.environment,
      workplan: doc.workplan,
      riskFactor: doc.riskFactor,
      canalization: doc.canalization,
      graduate: doc.graduate,
      reentry: doc.reentry,
      dropout: doc.dropout,
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
    nutrition: doc.nutrition,
    socioeconomic: doc.socioeconomic,
    health: doc.health,
    parent: doc.parent,
    documentation: doc.documentation,
    vaccination: doc.vaccination,
    weight: doc.weight,
    ailment: doc.ailment,
    accident: doc.accident,
    environment: doc.environment,
    workplan: doc.workplan,
    riskFactor: doc.riskFactor,
    canalization: doc.canalization,
    graduate: doc.graduate,
    reentry: doc.reentry,
    dropout: doc.dropout,
    createdAt: doc.createdAt,
    updatedAt: doc.updatedAt,
    active: doc.active
  }
}