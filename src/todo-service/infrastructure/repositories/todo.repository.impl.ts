import { TodoEntity, TodoCharacteristic, TodoRepository, TodoDatasource } from '../..';

export class TodoRepositoryImpl implements TodoRepository {
    constructor(
        private readonly todoDatasource: TodoDatasource
    ) {}
    async addTodo(todo: TodoEntity): Promise<void> {
        this.todoDatasource.addTodo(todo);
    }
    async updateTodo(id: string): Promise<void> {
        this.todoDatasource.updateTodo(id);
    }
    async deleteTodo(id: string): Promise<void> {
        this.todoDatasource.deleteTodo(id);
    }
    async getTodos(): Promise<TodoEntity[]> {
        return this.todoDatasource.getAllTodos();
    }
    async getStrategy(characteristic: TodoCharacteristic): Promise<TodoEntity> {
        return this.todoDatasource.getStrategy(characteristic);
    }
}