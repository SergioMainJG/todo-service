
type StatusOptions = 'Undone' | 'Progress' | 'Done';
export class TodoEntity {
    private static id: number = 0;
    private readonly id: number;
    constructor(
        private _title: string,
        private _initDate: Date,
        private _finishDate: Date,
        private _description: string,
        private _tags: string[],
        private _status: StatusOptions
    ){
        this.id = ++TodoEntity.id;
    }

    get title(): string {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
    }
    get initDate(): Date {
        return this._initDate;
    }
    set initDate(initDate: Date) {
        this._initDate = initDate;
    }
    get finishDate(): Date {
        return this._finishDate;
    }
    set finishDate(finishDate: Date) {
        this._finishDate = finishDate;
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
}