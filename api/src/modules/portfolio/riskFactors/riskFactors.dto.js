export function single(doc) {
  return {
      active: doc.active,
      id: doc._id,
      beforeWeeks: doc.beforeWeeks,
      complications: doc.complications,
      caesarean: doc.caesarean,
      intensiveStay: doc.intensiveStay,
      seriousInfections: doc.seriousInfections,
      multiplePregnancy: doc.multiplePregnancy,
      congenitalAbnormalities: doc.congenitalAbnormalities,
      weightLessThan: doc.weightLessThan,
      diseasesAfterBirth: doc.diseasesAfterBirth,
      lackPrenatalCare: doc.lackPrenatalCare,
      substanceUse: doc.substanceUse,
      diseasesAfterBirthOther: doc.diseasesAfterBirthOther,
      nutritionProblems: doc.nutritionProblems,
      hearingProblems: doc.hearingProblems,
      visualProblems: doc.visualProblems,
      mentalProblems: doc.mentalProblems,
      momAge: doc.momAge,
      motherSchooling: doc.motherSchooling,
      adoption: doc.adoption,
      limitedAbility: doc.limitedAbility,
      sonDoubts: doc.sonDoubts,
      sonDoubtsPerson: doc.sonDoubtsPerson,
      speech: doc.speech,
      understanding: doc.understanding,
      handsUse: doc.handsUse,
      legsArmsUse: doc.legsArmsUse,
      relationships: doc.relationships,
      autodidact: doc.autodidact,
      schoolSkills: doc.schoolSkills,
      therapyNeed: doc.therapyNeed,
      typeOfTherapy: doc.typeOfTherapy,
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
    beforeWeeks: doc.beforeWeeks,
    complications: doc.complications,
    caesarean: doc.caesarean,
    intensiveStay: doc.intensiveStay,
    seriousInfections: doc.seriousInfections,
    multiplePregnancy: doc.multiplePregnancy,
    congenitalAbnormalities: doc.congenitalAbnormalities,
    weightLessThan: doc.weightLessThan,
    diseasesAfterBirth: doc.diseasesAfterBirth,
    lackPrenatalCare: doc.lackPrenatalCare,
    substanceUse: doc.substanceUse,
    diseasesAfterBirthOther: doc.diseasesAfterBirthOther,
    nutritionProblems: doc.nutritionProblems,
    hearingProblems: doc.hearingProblems,
    visualProblems: doc.visualProblems,
    mentalProblems: doc.mentalProblems,
    momAge: doc.momAge,
    motherSchooling: doc.motherSchooling,
    adoption: doc.adoption,
    limitedAbility: doc.limitedAbility,
    sonDoubts: doc.sonDoubts,
    sonDoubtsPerson: doc.sonDoubtsPerson,
    speech: doc.speech,
    understanding: doc.understanding,
    handsUse: doc.handsUse,
    legsArmsUse: doc.legsArmsUse,
    relationships: doc.relationships,
    autodidact: doc.autodidact,
    schoolSkills: doc.schoolSkills,
    therapyNeed: doc.therapyNeed,
    typeOfTherapy: doc.typeOfTherapy,
  }
}