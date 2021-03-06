export interface TasksData {
  title:string;
  description:string;
}

export  interface TaskId{
  id:string
}  

export interface TasksRepository{
  create:(data:TasksData) => Promise<void>,
  delete:(id:TaskId)=> Promise<void>
}