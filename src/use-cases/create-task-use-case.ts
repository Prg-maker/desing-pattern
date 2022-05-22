import {TasksRepository} from '../repositorys/tasks-repository'

type CreateTaskUseCaseRequest = {
  title:string;
  description:string;
}


export class CreateTaskUseCase{


  constructor(
    private taskRepository: TasksRepository
  ){}

  async execute(request: CreateTaskUseCaseRequest){
    const {
      title,
      description
    } = request



    if(!title){
      throw new Error('the title was not passed')
    }
    if(!description){
      throw new Error('the description was not passed')
    }

    this.taskRepository.create({
      title,
      description
    })

    

  }
}