import path from 'path'
import root from 'app-root-path'
import express, { Router } from 'express'
/* PLOP_INJECT_API_ROUTES_IMPORT */
import todosRoutes from './modules/todos/todos.routes'

const router = new Router()
const publicPath = path.join(root.toString(), 'public')
const uploadsPath = path.join(root.toString(), 'public', 'uploads')

router.use(express.static(publicPath))

router.use('/api', [
  /* PLOP_INJECT_API_ROUTES */
  todosRoutes
])

router.get('/*', (_, res) => res.sendFile(path.join(publicPath, 'index.html')))

export default router
