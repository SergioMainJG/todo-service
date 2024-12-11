import { TodoEntity, createTodoSection } from "../";

export const todosPagination = (todos: TodoEntity[]) => {
    const prev: HTMLButtonElement = document.querySelector('#prev')!;
    const next: HTMLButtonElement = document.querySelector('#next')!;
    const page: HTMLParagraphElement = document.querySelector('#actual-page')!;
    const todosContainer: HTMLElement = document.querySelector('#todos-container')!;

    const itemsPerPage = 3;
    const currentPage = Number(page.textContent!.trim());
    const totalPages = Math.ceil(todos.length / itemsPerPage);

    todosContainer.innerHTML = '';
    prev.disabled = currentPage === 1;
    next.disabled = currentPage === totalPages;
    if (todos.length === 0) return;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const todosToShow = todos.slice(startIndex, endIndex);
    todosToShow.forEach(todo => {
        todosContainer.appendChild(createTodoSection(todo));
    });
}