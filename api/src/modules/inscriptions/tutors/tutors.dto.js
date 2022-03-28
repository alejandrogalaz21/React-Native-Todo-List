export function single(doc) {
  return {
      active: doc.active,
      id: doc._id,
      inscription: doc.inscription,
      typeTutor: doc.typeTutor,
      name: doc.name,
      lastName: doc.lastName,
      motherLastName: doc.motherLastName,
      relationship: doc.relationship,
      economical: doc.economical,
      phone: doc.phone,
      email: doc.email,
      dateOfBirth: doc.dateOfBirth,
      homePhone: doc.homePhone,
      workPhone: doc.workPhone,
      company: doc.company,
      qAddress: doc.qAddress,
      address: doc.address,
      ineTutor: doc.ineTutor,
      certificateTutor: doc.certificateTutor,
      qTutor1: doc.qTutor1,
      qTutor2: doc.qTutor2,
      qParent1: doc.qParent1,
      qParent2: doc.qParent2,
      civilStatus: doc.civilStatus,
      religion: doc.religion,
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
    typeTutor: doc.typeTutor,
    name: doc.name,
    lastName: doc.lastName,
    motherLastName: doc.motherLastName,
    relationship: doc.relationship,
    economical: doc.economical,
    phone: doc.phone,
    email: doc.email,
    dateOfBirth: doc.dateOfBirth,
    homePhone: doc.homePhone,
    workPhone: doc.workPhone,
    company: doc.company,
    qAddress: doc.qAddress,
    address: doc.address,
    ineTutor: doc.ineTutor,
    certificateTutor: doc.certificateTutor,
    qTutor1: doc.qTutor1,
    qTutor2: doc.qTutor2,
    qParent1: doc.qParent1,
    qParent2: doc.qParent2,
    civilStatus: doc.civilStatus,
    religion: doc.religion,
    historical: doc.historical,
  }
}