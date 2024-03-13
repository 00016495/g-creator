import { Router } from 'express'
import { ValidationMiddleware } from '../middleware/validation.middleware.js'
import Controller from '../controller/controller.js'
import { GROUPS_SCHEMA } from '../schema/creator.schema.js'

const router = Router()

export default router
    .get('/main', Controller.MAIN_PAGE)
    .post('/groups', ValidationMiddleware(GROUPS_SCHEMA), Controller.CREATE_GROUPS)
    .put('/groups/:id', Controller.UPDATE_GROUP)
    .delete('/groups/:id', Controller.DELETE_GROUP)