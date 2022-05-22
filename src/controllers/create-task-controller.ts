import { Request, Response } from "express";
import { PrismaTasksRepository } from "../repositorys/prisma/prisma-tasks-repository";
import { CreateTaskUseCase } from "../use-cases/create-task-use-case";

export class CreateTaskController{
  async handle(req: Request , res:Response){
    const {
      title,
      description
    } = req.body

    try{
      const prismaTaskRepository = new PrismaTasksRepository()

      const createTaskUseCase = new CreateTaskUseCase(prismaTaskRepository)
  
      await createTaskUseCase.execute({
        title,
        description
      })
  
      return res.status(201).send()
    }catch(err){
      return res.status(400).json({
        err:"the task was not created"
      })
    }

   
  }
}