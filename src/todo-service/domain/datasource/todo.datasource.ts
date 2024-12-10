import { TodoEntity } from "../..";
import { TodoCharacteristic } from '../../d/todo';

export abstract class TodoDatasource{
    abstract createTodo(todo:TodoEntity):Promise<TodoEntity>
    abstract updateTodo(id:string):Promise<TodoEntity>
    abstract deleteTodo(id:string):Promise<TodoEntity>
    abstract getTodos(): Promise<TodoEntity[]>
    abstract getStrategy( characteristic: TodoCharacteristic ):Promise<TodoEntity>
}