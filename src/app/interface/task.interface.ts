export interface ITask {
  idtask?: number;
  task: string;
  statusTask?: 'DOING' | 'COMPLETED' | 'LATE';
}
