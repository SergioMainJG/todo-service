import { TodoEntity } from '..';

export const createTodoSection = ({
    id,
    title,
    initDate,
    finishDate,
    status,
    description,
    tags,
}: TodoEntity): HTMLElement => {
    const todoSection: HTMLElement = document.createElement('section');
    todoSection.classList.add('todos-pages');
    const unicID = `${title}-${id}`;
    todoSection.innerHTML = `
    <header id="${unicID}-header" class="todo-header">
      <h4 id="${unicID}-id" >ID: ${id} </h4>
      <h3 id="${unicID}-title" class="todo-title">${title}</h3>
      <h4 id="${unicID}-initDate" class="todo-init-date">Since: ${initDate}</h4>
      <h4 id="${unicID}-finishDate" class="todo-finish-date">To: ${finishDate}</h4>
      <h5 id="${unicID}-status" >Status: ${status}</h5>
    </header>
    <main class="todo-content">
      <p class="todo-desc" id="${unicID}-description">
        ${description}
      </p>
    </main>
    <footer class="todo-characteristics">
      <section class="tags-container">
        <h5 class="todo-tags-title">Tags:</h5>
        <ul class="todo-tags-list" id="${unicID}-tags">
          ${tags.map((tag, i) => `<li class="todo-tag" id="${unicID}-tag-${i}">${tag}</li>`).join('')}
        </ul>
      </section>
      <section class="todo-actions-container">
        <button type="button" id="${unicID}-delete" class="button-delete">
          Delete
        </button>
        <button type="button" id="${unicID}-modify" class="button-modify">
          Modify
        </button>
        <button type="button" id="${unicID}-view" class="button-view">
          View Better
        </button>
        <label
          class="update-progress-label"
          id="update-progress-label"
          for="update-progress"
          >Set Progress:</label
        >
        <select
          class="update-progress-select"
          aria-labelledby="update-progress-label"
          aria-label="update-progress"
          name="update-progress"
          id="${unicID}-update-progress"
        >
          <option class="done-option" value="done">
            Done
          </option>
          <option class="in-progress-option" value="progress">
            In Progress
          </option>
          <option class="undone-option" value="undone" selected>
            Undone
          </option>
        </select>
      </section>
    </footer>`;

    return todoSection;
}