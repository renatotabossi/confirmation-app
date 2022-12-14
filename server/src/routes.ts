import { Router } from 'express'

import UserController from './controllers/UserController'

const routes = Router()

routes.get('/')
routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.delete('/users', UserController.delete)
routes.put('/users', UserController.update)
routes.post('/login', UserController.login)

export default routes
