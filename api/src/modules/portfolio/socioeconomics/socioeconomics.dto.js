export function single(doc) {
  return {
      active: doc.active,
      id: doc._id,
      infant: doc.infant,
      bedroom: doc.bedroom,
      person: doc.person.map(p => ({
        gender: p.gender,
        age: p.age,
        relationship: p.relationship,
        levelEstudy: p.levelEstudy,
        school: p.school,
        service: p.service,
        independentWork: p.independentWork,
        salariedWork: p.salariedWork,
        pensioner: p.pensioner,
        afore: p.afore,
        lacksMoney: p.lacksMoney,
        totalIncome: p.totalIncome,
        totalFamilyIncome: p.totalFamilyIncome
      })),
      tubingWater: doc.tubingWater,
      sewerSystem: doc.sewerSystem,
      electricity: doc.electricity,
      cook: doc.cook,
      flat: doc.flat,
      roof: doc.roof,
      wall: doc.wall,
      bathroom: doc.bathroom,
      safeColony: doc.safeColony,
      houseInCare: doc.houseInCare,
      childrenInCare: doc.childrenInCare,
      neighbors: doc.neighbors,
      flood: doc.flood,
      breeding: doc.breeding,
      internet: doc.internet,
      computer: doc.computer,
      cellPhone: doc.cellPhone,
      videoGameConsole: doc.videoGameConsole,
      houseFloors: doc.houseFloors,
      car: doc.car,
      airConditioning: doc.airConditioning,
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
    bedroom: doc.bedroom,
    person: doc.person.map(p => ({
      gender: p.gender,
      age: p.age,
      relationship: p.relationship,
      levelEstudy: p.levelEstudy,
      school: p.school,
      service: p.service,
      independentWork: p.independentWork,
      salariedWork: p.salariedWork,
      pensioner: p.pensioner,
      afore: p.afore,
      lacksMoney: p.lacksMoney,
      totalIncome: p.totalIncome,
      totalFamilyIncome: p.totalFamilyIncome
    })),
    tubingWater: doc.tubingWater,
    sewerSystem: doc.sewerSystem,
    electricity: doc.electricity,
    cook: doc.cook,
    flat: doc.flat,
    roof: doc.roof,
    wall: doc.wall,
    bathroom: doc.bathroom,
    safeColony: doc.safeColony,
    houseInCare: doc.houseInCare,
    childrenInCare: doc.childrenInCare,
    neighbors: doc.neighbors,
    flood: doc.flood,
    breeding: doc.breeding,
    internet: doc.internet,
    computer: doc.computer,
    cellPhone: doc.cellPhone,
    videoGameConsole: doc.videoGameConsole,
    houseFloors: doc.houseFloors,
    car: doc.car,
    airConditioning: doc.airConditioning,
  }
}