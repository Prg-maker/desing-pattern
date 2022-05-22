export interface TasksData {
  title:string;
  description:string;
}

export interface TasksRepository{
  create:(data:TasksData) => Promise<void>,
}