import {TasksRepository} from '../repositorys/tasks-repository'

export class DeleteTaskUseCase{

  constructor(
    private tasksRepository: TasksRepository
  ){}
  async execute(id:string){
    
    if(!id){
      throw new Error('the id was not passed')
    }
  }
}