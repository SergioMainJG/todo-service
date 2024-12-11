import { StatusOptions } from "../..";
import { TodoEntity } from '../entities/todo.entity';

export class TodoBuilder {

    public title: string = '';
    public initDate: Date = new Date();
    public finishDate: Date = new Date();
    public description: string = '';
    public tags: string[] = [];
    public status: StatusOptions = 'Undone';
    constructor() {
        this.reset();
    }
    reset() {
        this.title = '';
        this.initDate = new Date();
        this.finishDate = new Date();
        this.description = '';
        this.tags = [];
        this.status = 'Undone';
    }
    setTitle(title: string) {
        // console.log( title.replace(/\s/g, '-') )
        this.title = title.replace(/\s/g, '-');
        return this;
    }
    setInitDate(initDate: Date) {
        this.initDate = initDate;
        return this;
    }
    setFinishDate(finishDate: Date) {
        this.finishDate = finishDate;
        return this;
    }
    setDescription(description: string) {
        this.description = description;
        return this;
    }
    setTags(tags: string[]) {
        this.tags = tags;
        return this;
    }
    setStatus(status: StatusOptions){
        this.status = status;
        return this;
    }
    build() {
        const todo = new TodoEntity(
            this.title,
            this.description,
            this.initDate,
            this.finishDate,
            this.tags,
            this.status
        )
        this.reset();
        return todo;
    }
}