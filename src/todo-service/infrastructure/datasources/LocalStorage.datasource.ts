import { TodoEntity } from "../..";
import { TodoCharacteristic } from "../../d/todo";
import { TodoDatasource } from "../../domain/datasource/todo.datasource";


export class LocalStorageDatasource implements TodoDatasource{

    private todos: TodoEntity[] = [];

    constructor(){}

    private createTodosAtLocalStorage(): void{
        localStorage.setItem('todos', this.todos.join('\n') );
    }

    
    private getTodosFromLocalStorage(): TodoEntity[]{

        localStorage.getItem('todos')?.split('\n');
        return this.todos;
    }

    async addTodo(todo: TodoEntity): Promise<void> {
        
    }
    async updateTodo(id: string): Promise<void> {
    }
    async deleteTodo(id: string): Promise<void> {
    }
    async getTodos(): Promise<TodoEntity[]> {
    }
    async getStrategy(characteristic: TodoCharacteristic): Promise<TodoEntity> {
    }

}