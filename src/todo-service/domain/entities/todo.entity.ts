import { StatusOptions } from "../..";
import { Formatter } from "../../../common/formatter";

export class TodoEntity {
    private static id: number = 0;
    private readonly id: number;

    private _initDate: string;
    private _finishDate: string;

    constructor(
        private _title: string,
        private _description: string,
        initDate: Date,
        finishDate: Date,
        private _tags: string[],
        private _status: StatusOptions
    ) {
        this._initDate = Formatter.FormatDate(initDate);
        this._finishDate = Formatter.FormatDate(finishDate);
        this.id = ++TodoEntity.id;
    }

    get title(): string {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
    }
    get initDate(): string {
        return this._initDate;
    }
    set initDate(initDate: Date) {
        this._initDate = Formatter.FormatDate(initDate);
    }
    get finishDate(): string {
        return this._finishDate;
    }
    set finishDate(finishDate: Date) {
        this._finishDate = Formatter.FormatDate(finishDate);
    }
    get description(): string {
        return this._description;
    }
    set description(description: string) {
        this._description = description;
    }
    get tags() {
        return this._tags;
    }
    set tags(tags: string[]) {
        this._tags = tags;
    }
    get status(): StatusOptions {
        return this._status;
    }
    set status(status: StatusOptions) {
        this._status = status;
    }
    get getId(): number {
        return this.id;
    }

    fromStringToTodoEntity(todo: string): TodoEntity {
        const todoEntity = JSON.parse(todo);
        return new TodoEntity(
            todoEntity._title,
            todoEntity._description,
            todoEntity._initDate,
            todoEntity._finishDate,
            todoEntity._tags,
            todoEntity._status
        );
    }
}