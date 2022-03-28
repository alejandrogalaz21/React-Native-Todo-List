import path from 'path'
import root from 'app-root-path'
import express, { Router } from 'express'

/* PLOP_INJECT_API_ROUTES_IMPORT */
import auth from './modules/auth/auth.routes'
import oauth from './modules/oauth/oauth.routes'
import modules from './modules/modules/modules.routes'
import classrooms from './modules/classrooms/classrooms.routes'
import positions from './modules/positions/positions.routes'
import services from './modules/services/services.routes'
import cycles from './modules/cycles/cycles.routes'
import users from './modules/users/users.routes'
import configuration from './modules/configuration/configurations.routes'
import { files } from './modules/files/files.routes'
import historical from './modules/historicals/historicals.routes'
import dropouts from './modules/dropouts/dropouts.routes'
import centers from './modules/centers/centers.routes'
import payments from './modules/payments/payments.routes'
import modalities from './modules/modalities/modalities.routes'
import costs from './modules/costs/costs.routes'
import canalizations from './modules/canalizations/canalizations.routes'
import canalizationLocations from './modules/canalizationLocations/canalizationLocations.routes'
import scholarships from './modules/scholarships/scholarships.routes'
import percentages from './modules/percentages/percentages.routes'
import plannings from './modules/plannings/plannings.routes'
import groupAssignments from './modules/groupAssignments/groupAssignments.routes'
import authorizations from './modules/authorizations/authorizations.routes'
import infants from './modules/infants/infants.routes'
import collection from './modules/collection/collection.routes'
import storage from './modules/storage/storage.routes'
import debt from './modules/debt/debt.routes'
import appointments from './modules/appointments/appointments.routes'
import calendars from './modules/calendars/calendars.routes'
import notifications from './modules/notifications/notifications.routes'
import access from './modules/access/access.routes'
import appointmentReasons from './modules/appointmentReasons/appointmentReasons.routes'
import developmentalEvaluations from './modules/developmentalEvaluations/developmentalEvaluations.routes'
import evaluationPerson from './modules/evaluationPersons/evaluationPersons.routes'
import permissions from './modules/permissions/permissions.routes'

// portfolio
import nutritions from './modules/portfolio/nutritions/nutritions.routes'
import socioeconomics from './modules/portfolio/socioeconomics/socioeconomics.routes'
import healths from './modules/portfolio/healths/healths.routes'
import parents from './modules/portfolio/parents/parents.routes'
import partnerDocumentations from './modules/portfolio/partnerDocumentations/partnerDocumentations.routes'
import weights from './modules/portfolio/weights/weights.routes'
import partnerAilments from './modules/portfolio/partnerAilments/partnerAilments.routes'
import accidents from './modules/portfolio/accidents/accidents.routes'
import familyEnvironments from './modules/portfolio/familyEnvironments/familyEnvironments.routes'
import riskFactors from './modules/portfolio/riskFactors/riskFactors.routes'
import vaccinations from './modules/portfolio/vaccinations/vaccinations.routes'

// inscriptions
import inscriptions from './modules/inscriptions/inscriptions.routes'
import generals from './modules/inscriptions/generals/generals.routes'
import addresses from './modules/inscriptions/addresses/addresses.routes'
import tutors from './modules/inscriptions/tutors/tutors.routes'
import ailments from './modules/inscriptions/ailments/ailments.routes'
import environments from './modules/inscriptions/environments/environments.routes'
import documentations from './modules/inscriptions/documentations/documentations.routes'

// CATALOG OPTIONS ROUTES
import manageOptions from './modules/options/options.manage.routes'
import staticsOptions from './modules/options/options.statics.routes'

// STATIC CATALOGS
import asqResults from './modules/staticCatalogs/asqResults/asqResults.routes'
import carefuls from './modules/staticCatalogs/carefuls/carefuls.routes'
import civilStatuses from './modules/staticCatalogs/civilStatuses/civilStatuses.routes'
import courages from './modules/staticCatalogs/courages/courages.routes'
import doctors from './modules/staticCatalogs/doctors/doctors.routes'
import dreams from './modules/staticCatalogs/dreams/dreams.routes'
import economicals from './modules/staticCatalogs/economicals/economicals.routes'
import evaluations from './modules/staticCatalogs/evaluations/evaluations.routes'
import feelings from './modules/staticCatalogs/feelings/feelings.routes'
import foods from './modules/staticCatalogs/foods/foods.routes'
import frustrations from './modules/staticCatalogs/frustrations/frustrations.routes'
import idiResults from './modules/staticCatalogs/idiResults/idiResults.routes'
import ifdResults from './modules/staticCatalogs/ifdResults/ifdResults.routes'
import interests from './modules/staticCatalogs/interests/interests.routes'
import interpersonals from './modules/staticCatalogs/interpersonals/interpersonals.routes'
import interviews from './modules/staticCatalogs/interviews/interviews.routes'
import lesions from './modules/staticCatalogs/lesions/lesions.routes'
import levelEstudies from './modules/staticCatalogs/levelEstudies/levelEstudies.routes'
import mchatResults from './modules/staticCatalogs/mchatResults/mchatResults.routes'
import participations from './modules/staticCatalogs/participations/participations.routes'
import prevalences from './modules/staticCatalogs/prevalences/prevalences.routes'
import relationships from './modules/staticCatalogs/relationships/relationships.routes'
import religions from './modules/staticCatalogs/religions/religions.routes'
import rols from './modules/staticCatalogs/rols/rols.routes'
import statusEvaluations from './modules/staticCatalogs/statusEvaluations/statusEvaluations.routes'
import statusRelationships from './modules/staticCatalogs/statusRelationships/statusRelationships.routes'
import academicLevels from './modules/staticCatalogs/academicLevels/academicLevels.routes'
import grades from './modules/staticCatalogs/grades/grades.routes'
import situations from './modules/staticCatalogs/situations/situations.routes'
import contacts from './modules/staticCatalogs/contacts/contacts.routes'

import todos from './modules/todos/todos.routes.js'

const publicPath = path.join(root.toString(), 'public')
const uploadsPatth = path.join(root.toString(), 'public', 'uploads')
const router = new Router()

router.use(express.static(publicPath))
router.use('/uploads', express.static(uploadsPatth))
router.use('/api', [
  /* PLOP_INJECT_API_ROUTES */
  auth,
  oauth,
  modules,
  classrooms,
  positions,
  services,
  cycles,
  inscriptions,
  users,
  configuration,
  historical,
  dropouts,
  centers,
  payments,
  modalities,
  costs,
  asqResults,
  canalizations,
  canalizationLocations,
  carefuls,
  civilStatuses,
  courages,
  doctors,
  dreams,
  economicals,
  evaluations,
  feelings,
  foods,
  frustrations,
  idiResults,
  ifdResults,
  interests,
  interpersonals,
  interviews,
  lesions,
  levelEstudies,
  mchatResults,
  participations,
  prevalences,
  relationships,
  religions,
  rols,
  statusEvaluations,
  statusRelationships,
  academicLevels,
  scholarships,
  percentages,
  grades,
  situations,
  contacts,
  manageOptions,
  staticsOptions,
  plannings,
  groupAssignments,
  generals,
  addresses,
  tutors,
  ailments,
  environments,
  documentations,
  authorizations,
  infants,
  nutritions,
  socioeconomics,
  healths,
  parents,
  partnerDocumentations,
  weights,
  partnerAilments,
  accidents,
  familyEnvironments,
  collection,
  storage,
  files,
  debt,
  appointments,
  calendars,
  notifications,
  access,
  appointmentReasons,
  developmentalEvaluations,
  evaluationPerson,
  permissions,
  riskFactors,
  vaccinations,
  todos
])

router.get('/*', (_, res) => res.sendFile(path.join(publicPath, 'index.html')))

export default router
