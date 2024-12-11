import { TodoEntity } from "../..";
import { TodoCharacteristic } from '../../d/todo';

export abstract class TodoDatasource{
    abstract addTodo(todo:TodoEntity):Promise<boolean>
    abstract updateTodo(id:number,  todo: TodoEntity):Promise<boolean>
    abstract deleteTodo(id:number):Promise<boolean>
    abstract getAllTodos(): Promise<TodoEntity[]>
    abstract getTodosByProp( characteristic: TodoCharacteristic, prop: string ):Promise<TodoEntity[]>
}