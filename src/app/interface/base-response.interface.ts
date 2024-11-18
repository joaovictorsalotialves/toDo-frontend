import { TasksList } from "../types/tasksList";
import { ITask } from "./task.interface";

export interface IBaseResponse {
  sucess: boolean,
  id?: number,
  message?: string,
  error?: string,
  values?: TasksList | ITask;
}
