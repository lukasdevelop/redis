import express from 'express'

const routes = express.Router()

import UserController from './controllers/UserController'

routes.post('/', UserController.store)

export default routes