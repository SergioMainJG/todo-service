import { TodoEntity } from "../domain/entities/todo.entity";

export type StatusOptions = 'Undone' | 'Progress' | 'Done';
export type TodoCharacteristic = 'title' | 'description' | 'tags' | 'status' | 'initDate' | 'finishDate';
