export function single(doc) {
  return {
    active: doc.active,
    id: doc._id,
    infant: doc.infant,
    bcgVaccine: {
      nextVaccineDate: doc.bcgVaccine.nextVaccineDate,
      vaccineDate: doc.bcgVaccine.vaccineDate,
      observations: doc.bcgVaccine.observations,
      status: doc.bcgVaccine.status
    },
    hepatitisBVaccine: {
      nextVaccineDate: doc.hepatitisBVaccine.nextVaccineDate,
      vaccineDate: doc.hepatitisBVaccine.vaccineDate,
      observations: doc.hepatitisBVaccine.observations,
      status: doc.hepatitisBVaccine.status
    },
    hepatitisBVaccine2: {
      nextVaccineDate: doc.hepatitisBVaccine2.nextVaccineDate,
      vaccineDate: doc.hepatitisBVaccine2.vaccineDate,
      observations: doc.hepatitisBVaccine2.observations,
      status: doc.hepatitisBVaccine2.status
    },
    hepatitisBVaccine3: {
      nextVaccineDate: doc.hepatitisBVaccine3.nextVaccineDate,
      vaccineDate: doc.hepatitisBVaccine3.vaccineDate,
      observations: doc.hepatitisBVaccine3.observations,
      status: doc.hepatitisBVaccine3.status
    },
    acellularPentavalentVaccine: {
      nextVaccineDate: doc.acellularPentavalentVaccine.nextVaccineDate,
      vaccineDate: doc.acellularPentavalentVaccine.vaccineDate,
      observations: doc.acellularPentavalentVaccine.observations,
      status: doc.acellularPentavalentVaccine.status
    },
    acellularPentavalentVaccine2: {
      nextVaccineDate: doc.acellularPentavalentVaccine2.nextVaccineDate,
      vaccineDate: doc.acellularPentavalentVaccine2.vaccineDate,
      observations: doc.acellularPentavalentVaccine2.observations,
      status: doc.acellularPentavalentVaccine2.status
    },
    acellularPentavalentVaccine3: {
      nextVaccineDate: doc.acellularPentavalentVaccine3.nextVaccineDate,
      vaccineDate: doc.acellularPentavalentVaccine3.vaccineDate,
      observations: doc.acellularPentavalentVaccine3.observations,
      status: doc.acellularPentavalentVaccine3.status
    },
    acellularPentavalentVaccine4: {
      nextVaccineDate: doc.acellularPentavalentVaccine4.nextVaccineDate,
      vaccineDate: doc.acellularPentavalentVaccine4.vaccineDate,
      observations: doc.acellularPentavalentVaccine4.observations,
      status: doc.acellularPentavalentVaccine4.status
    },
    dptVaccine: {
      nextVaccineDate: doc.dptVaccine.nextVaccineDate,
      vaccineDate: doc.dptVaccine.vaccineDate,
      observations: doc.dptVaccine.observations,
      status: doc.dptVaccine.status
    },
    rotavirusVaccine: {
      nextVaccineDate: doc.rotavirusVaccine.nextVaccineDate,
      vaccineDate: doc.rotavirusVaccine.vaccineDate,
      observations: doc.rotavirusVaccine.observations,
      status: doc.rotavirusVaccine.status
    },
    rotavirusVaccine2: {
      nextVaccineDate: doc.rotavirusVaccine2.nextVaccineDate,
      vaccineDate: doc.rotavirusVaccine2.vaccineDate,
      observations: doc.rotavirusVaccine2.observations,
      status: doc.rotavirusVaccine2.status
    },
    influenzaVaccine: {
      nextVaccineDate: doc.influenzaVaccine.nextVaccineDate,
      vaccineDate: doc.influenzaVaccine.vaccineDate,
      observations: doc.influenzaVaccine.observations,
      status: doc.influenzaVaccine.status
    },
    influenzaVaccine2: {
      nextVaccineDate: doc.influenzaVaccine2.nextVaccineDate,
      vaccineDate: doc.influenzaVaccine2.vaccineDate,
      observations: doc.influenzaVaccine2.observations,
      status: doc.influenzaVaccine2.status
    },
    influenzaVaccine3: {
      nextVaccineDate: doc.influenzaVaccine3.nextVaccineDate,
      vaccineDate: doc.influenzaVaccine3.vaccineDate,
      observations: doc.influenzaVaccine3.observations,
      status: doc.influenzaVaccine3.status
    },
    influenzaVaccine4: {
      nextVaccineDate: doc.influenzaVaccine4.nextVaccineDate,
      vaccineDate: doc.influenzaVaccine4.vaccineDate,
      observations: doc.influenzaVaccine4.observations,
      status: doc.influenzaVaccine4.status
    },
    influenzaVaccine5: {
      nextVaccineDate: doc.influenzaVaccine5.nextVaccineDate,
      vaccineDate: doc.influenzaVaccine5.vaccineDate,
      observations: doc.influenzaVaccine5.observations,
      status: doc.influenzaVaccine5.status
    },
    influenzaVaccine6: {
      nextVaccineDate: doc.influenzaVaccine6.nextVaccineDate,
      vaccineDate: doc.influenzaVaccine6.vaccineDate,
      observations: doc.influenzaVaccine6.observations,
      status: doc.influenzaVaccine6.status
    },
    srpVaccine: {
      nextVaccineDate: doc.srpVaccine.nextVaccineDate,
      vaccineDate: doc.srpVaccine.vaccineDate,
      observations: doc.srpVaccine.observations,
      status: doc.srpVaccine.status
    },
    srpVaccine2: {
      nextVaccineDate: doc.srpVaccine2.nextVaccineDate,
      vaccineDate: doc.srpVaccine2.ccineDate,
      observations: doc.srpVaccine2.observations,
      status: doc.srpVaccine2.status
    },
    pneumococcalVaccine: {
      nextVaccineDate: doc.srpVaccine2.nextVaccineDate,
      vaccineDate: doc.srpVaccine2.ccineDate,
      observations: doc.srpVaccine2.observations,
      status: doc.srpVaccine2.status
    },
    pneumococcalVaccine2: {
      nextVaccineDate: doc.srpVaccine2.nextVaccineDate,
      vaccineDate: doc.srpVaccine2.ccineDate,
      observations: doc.srpVaccine2.observations,
      status: doc.srpVaccine2.status
    },
    pneumococcalVaccine3: {
      nextVaccineDate: doc.srpVaccine2.nextVaccineDate,
      vaccineDate: doc.srpVaccine2.ccineDate,
      observations: doc.srpVaccine2.observations,
      status: doc.srpVaccine2.status
    },
    otherVaccine: doc.otherVaccine?.map(v => ({
      name: v.name,
      disease: v.disease,
      vaccineDate: v.vaccineDate,
      observations: v.observations
    })),
    vaccinationCard: doc.vaccinationCard,
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
    bcgVaccine: {
      nextVaccineDate: doc.bcgVaccine.nextVaccineDate,
      vaccineDate: doc.bcgVaccine.vaccineDate,
      observations: doc.bcgVaccine.observations,
      status: doc.bcgVaccine.status
    },
    hepatitisBVaccine: {
      nextVaccineDate: doc.hepatitisBVaccine.nextVaccineDate,
      vaccineDate: doc.hepatitisBVaccine.vaccineDate,
      observations: doc.hepatitisBVaccine.observations,
      status: doc.hepatitisBVaccine.status
    },
    hepatitisBVaccine2: {
      nextVaccineDate: doc.hepatitisBVaccine2.nextVaccineDate,
      vaccineDate: doc.hepatitisBVaccine2.vaccineDate,
      observations: doc.hepatitisBVaccine2.observations,
      status: doc.hepatitisBVaccine2.status
    },
    hepatitisBVaccine3: {
      nextVaccineDate: doc.hepatitisBVaccine3.nextVaccineDate,
      vaccineDate: doc.hepatitisBVaccine3.vaccineDate,
      observations: doc.hepatitisBVaccine3.observations,
      status: doc.hepatitisBVaccine3.status
    },
    acellularPentavalentVaccine: {
      nextVaccineDate: doc.acellularPentavalentVaccine.nextVaccineDate,
      vaccineDate: doc.acellularPentavalentVaccine.vaccineDate,
      observations: doc.acellularPentavalentVaccine.observations,
      status: doc.acellularPentavalentVaccine.status
    },
    acellularPentavalentVaccine2: {
      nextVaccineDate: doc.acellularPentavalentVaccine2.nextVaccineDate,
      vaccineDate: doc.acellularPentavalentVaccine2.vaccineDate,
      observations: doc.acellularPentavalentVaccine2.observations,
      status: doc.acellularPentavalentVaccine2.status
    },
    acellularPentavalentVaccine3: {
      nextVaccineDate: doc.acellularPentavalentVaccine3.nextVaccineDate,
      vaccineDate: doc.acellularPentavalentVaccine3.vaccineDate,
      observations: doc.acellularPentavalentVaccine3.observations,
      status: doc.acellularPentavalentVaccine3.status
    },
    acellularPentavalentVaccine4: {
      nextVaccineDate: doc.acellularPentavalentVaccine4.nextVaccineDate,
      vaccineDate: doc.acellularPentavalentVaccine4.vaccineDate,
      observations: doc.acellularPentavalentVaccine4.observations,
      status: doc.acellularPentavalentVaccine4.status
    },
    dptVaccine: {
      nextVaccineDate: doc.dptVaccine.nextVaccineDate,
      vaccineDate: doc.dptVaccine.vaccineDate,
      observations: doc.dptVaccine.observations,
      status: doc.dptVaccine.status
    },
    rotavirusVaccine: {
      nextVaccineDate: doc.rotavirusVaccine.nextVaccineDate,
      vaccineDate: doc.rotavirusVaccine.vaccineDate,
      observations: doc.rotavirusVaccine.observations,
      status: doc.rotavirusVaccine.status
    },
    rotavirusVaccine2: {
      nextVaccineDate: doc.rotavirusVaccine2.nextVaccineDate,
      vaccineDate: doc.rotavirusVaccine2.vaccineDate,
      observations: doc.rotavirusVaccine2.observations,
      status: doc.rotavirusVaccine2.status
    },
    influenzaVaccine: {
      nextVaccineDate: doc.influenzaVaccine.nextVaccineDate,
      vaccineDate: doc.influenzaVaccine.vaccineDate,
      observations: doc.influenzaVaccine.observations,
      status: doc.influenzaVaccine.status
    },
    influenzaVaccine2: {
      nextVaccineDate: doc.influenzaVaccine2.nextVaccineDate,
      vaccineDate: doc.influenzaVaccine2.vaccineDate,
      observations: doc.influenzaVaccine2.observations,
      status: doc.influenzaVaccine2.status
    },
    influenzaVaccine3: {
      nextVaccineDate: doc.influenzaVaccine3.nextVaccineDate,
      vaccineDate: doc.influenzaVaccine3.vaccineDate,
      observations: doc.influenzaVaccine3.observations,
      status: doc.influenzaVaccine3.status
    },
    influenzaVaccine4: {
      nextVaccineDate: doc.influenzaVaccine4.nextVaccineDate,
      vaccineDate: doc.influenzaVaccine4.vaccineDate,
      observations: doc.influenzaVaccine4.observations,
      status: doc.influenzaVaccine4.status
    },
    influenzaVaccine5: {
      nextVaccineDate: doc.influenzaVaccine5.nextVaccineDate,
      vaccineDate: doc.influenzaVaccine5.vaccineDate,
      observations: doc.influenzaVaccine5.observations,
      status: doc.influenzaVaccine5.status
    },
    influenzaVaccine6: {
      nextVaccineDate: doc.influenzaVaccine6.nextVaccineDate,
      vaccineDate: doc.influenzaVaccine6.vaccineDate,
      observations: doc.influenzaVaccine6.observations,
      status: doc.influenzaVaccine6.status
    },
    srpVaccine: {
      nextVaccineDate: doc.srpVaccine.nextVaccineDate,
      vaccineDate: doc.srpVaccine.vaccineDate,
      observations: doc.srpVaccine.observations,
      status: doc.srpVaccine.status
    },
    srpVaccine2: {
      nextVaccineDate: doc.srpVaccine2.nextVaccineDate,
      vaccineDate: doc.vasrpVaccine2.ccineDate,
      observations: doc.srpVaccine2.observations,
      status: doc.srpVaccine2.status
    },
    pneumococcalVaccine: {
      nextVaccineDate: doc.srpVaccine2.nextVaccineDate,
      vaccineDate: doc.srpVaccine2.ccineDate,
      observations: doc.srpVaccine2.observations,
      status: doc.srpVaccine2.status
    },
    pneumococcalVaccine2: {
      nextVaccineDate: doc.srpVaccine2.nextVaccineDate,
      vaccineDate: doc.srpVaccine2.ccineDate,
      observations: doc.srpVaccine2.observations,
      status: doc.srpVaccine2.status
    },
    pneumococcalVaccine3: {
      nextVaccineDate: doc.srpVaccine2.nextVaccineDate,
      vaccineDate: doc.srpVaccine2.ccineDate,
      observations: doc.srpVaccine2.observations,
      status: doc.srpVaccine2.status
    },
    otherVaccine: doc.otherVaccine?.map(v => ({
      name: v.name,
      disease: v.disease,
      vaccineDate: v.vaccineDate,
      observations: v.observations
    })),
    vaccinationCard: doc.vaccinationCard
  }
}
