import { TodoEntity } from "../..";
import { TodoCharacteristic } from '../../d/todo';

export abstract class TodoRepository{
    abstract addTodo(todo:TodoEntity):Promise<void>
    abstract updateTodo(id:string):Promise<void>
    abstract deleteTodo(id:string):Promise<void>
    abstract getTodos(): Promise<TodoEntity[]>
    abstract getStrategy( characteristic: TodoCharacteristic ):Promise<TodoEntity>
}