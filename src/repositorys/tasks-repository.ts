export interface TasksData {
  title:string;
  description:string;
  createdAt: Date;
}

export interface TasksRepository{
  create:(data:TasksData) => Promise<void>
}