import {TasksRepository , TaskId} from '../repositorys/tasks-repository'

interface DeleteProps{
  id:string
}

export class DeleteTaskUseCase{

  constructor(
    private tasksRepository: TasksRepository
  ){}
  async execute({id}:TaskId){
    
    if(!id){
      throw new Error('the id was not passed')
    }
  }
}