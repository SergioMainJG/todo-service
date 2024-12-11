import { TodoEntity } from "../..";
import { TodoCharacteristic } from "../../d/todo";
import { TodoDatasource } from "../../domain/datasource/todo.datasource";
import { Formatter } from '../../../common/formatter';


export class LocalStorageDatasource implements TodoDatasource {

    private todos: TodoEntity[] = [];
    private static instance: LocalStorageDatasource;

    private constructor() {
        this.createTodosAtLocalStorage();
    }

    static getInstance(): LocalStorageDatasource {
        if (!this.instance) {
            this.instance = new LocalStorageDatasource();
        }
        return this.instance;
    }

    private createTodosAtLocalStorage(): void {
        localStorage.setItem('todos', this.todos.join('\n'));
    }

    private getTodosFromLocalStorage(): TodoEntity[] {

        localStorage.getItem('todos')?.split('\n').forEach((val) => {
            this.todos.push(TodoEntity.fromStringToTodoEntity(val))
        });
        this.todos.sort((a, b) => a.getId - b.getId);
        return [...this.todos];
    }

    async addTodo(todo: TodoEntity): Promise<boolean> {
        this.todos.push(todo);
        return !!(this.todos.find((todo) => todo.getId === todo.getId))
    }
    async updateTodo(id: number, todo: TodoEntity): Promise<boolean> {
        const { title, description, initDate, finishDate, status, tags } = todo;
        const todoToUpdate = this.todos.find((todo) => todo.getId === id);
        if (!todoToUpdate) return false;
        todoToUpdate.title = title;
        todoToUpdate.description = description;
        todoToUpdate.initDate = new Date(initDate);
        todoToUpdate.finishDate = new Date(finishDate);
        todoToUpdate.status = status;
        todoToUpdate.tags = tags;
        return true;
    }
    async deleteTodo(id: number): Promise<boolean> {
        const todoToDelete = this.todos.find((todo) => todo.getId === id);
        if (!todoToDelete) return false;
        this.todos = this.todos.filter((todo) => todo.getId !== id);
        return true;
    }

    async getAllTodos(): Promise<TodoEntity[]> {
        return this.getTodosFromLocalStorage();
    }
    async getTodosByProp(characteristic: TodoCharacteristic, prop: string): Promise<TodoEntity[]> {
        let todos: TodoEntity[] = []

        if (characteristic === 'title') todos = this.todos.filter((todo) => todo.title === prop)
        if (characteristic === 'description') todos = this.todos.filter((todo) => todo.description === prop)
        if (characteristic === 'initDate') {
            todos = this.todos.filter((todo) => todo.initDate === Formatter.FormatDate(new Date(prop)))
        }
        if (characteristic === 'finishDate') {
            todos = this.todos.filter((todo) => todo.finishDate === Formatter.FormatDate(new Date(prop)))
        }
        if (characteristic === 'status') todos = this.todos.filter((todo) => todo.status === prop)

        if (characteristic === 'tags') todos = this.todos.filter((todo) => todo.tags.find(tag => tag === prop))

        return todos;
    }

}