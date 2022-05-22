import { TasksData, TasksRepository } from "../tasks-repository";
import { prisma} from "../../prisma";

export class PrismaTasksRepository implements TasksRepository{
  async create({
    title,
    description,
  }: TasksData){


    await prisma.tasks.create({
      data:{
        title,
        description,
      }
    })

  }
}