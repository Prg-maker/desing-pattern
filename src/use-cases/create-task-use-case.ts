import {TasksRepository} from '../repositorys/tasks-repository'


export class CreateTaskUseCaseRequest{


  constructor(
    private taskRepository: TasksRepository
  ){}
}