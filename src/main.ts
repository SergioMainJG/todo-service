import { LocalStorageDatasource, StatusOptions, TodoBuilder, TodoCharacteristic, TodoDatasource, TodoEntity, TodoRepository, TodoRepositoryImpl, createTodoSection, todosPagination } from "./todo-service";

function main() {
    const todoBuilder = new TodoBuilder();
    const localStorageDatasource = LocalStorageDatasource.getInstance();
    const todoRepositoryImpl = new TodoRepositoryImpl(localStorageDatasource);

    const prev: HTMLButtonElement = document.querySelector('#prev')!;
    const next: HTMLButtonElement = document.querySelector('#next')!;
    const page: HTMLParagraphElement = document.querySelector('#actual-page')!;

    const todoList: TodoEntity[] = [
        todoBuilder
            .setTitle('Test Todo')
            .setInitDate(new Date())
            .setFinishDate(new Date('2025-01-01'))
            .setDescription('Test Description')
            .setTags(['test', 'todo'])
            .setStatus('Undone')
            .build(),
        todoBuilder
            .setTitle('Test Todo')
            .setInitDate(new Date())
            .setFinishDate(new Date('2025-01-01'))
            .setDescription('Test Description')
            .setTags(['test', 'todo'])
            .setStatus('Undone')
            .build(),
        todoBuilder
            .setTitle('Test Todo')
            .setInitDate(new Date())
            .setFinishDate(new Date('2025-01-01'))
            .setDescription('Test Description')
            .setTags(['test', 'todo'])
            .setStatus('Undone')
            .build(),
        todoBuilder
            .setTitle('Test Todo')
            .setInitDate(new Date())
            .setFinishDate(new Date('2025-01-01'))
            .setDescription('Test Description')
            .setTags(['test', 'todo'])
            .setStatus('Undone')
            .build(),
    ];

    prev.addEventListener('click', () => {
        const currentPage = Number(page.textContent!.trim());
        page.textContent = `${currentPage - 1}`;
        todosPagination(todoList);
    });

    next.addEventListener('click', () => {
        const currentPage = Number(page.textContent!.trim());
        page.textContent = `${currentPage + 1}`;
        todosPagination(todoList);
    });

    todosPagination(todoList)
}
main();