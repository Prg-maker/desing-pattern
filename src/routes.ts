import {Router} from 'express'
import {CreateTaskController} from './controllers/create-task-controller'

const router = Router()


router.post('/' , new CreateTaskController().handle)


export {
  router
}