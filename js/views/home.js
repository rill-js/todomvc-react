import html from 'as-html'
import cx from 'classnames'

export default (app) => {
  app.get('/:filter?', ({ req, res, session })=> {
    res.set("Content-Type", "text/html")

    // Default filter to "all".
    const { params: { filter = "all" } } = req;
    // Don't render with an invalid filter.
    if (!["all", "active", "completed"].includes(filter)) return;

    const todos = session.get("todos") || [];
    const completed = todos.filter(todo => todo.completed);
    const active = todos.filter(todo => !todo.completed);
    const listTodos = (
      filter === "all" ? todos :
      filter === "active" ? active :
      filter === "completed" ? completed : null
    );

    res.body = html`
      <header class="header">
        <h1>todos</h1>
        <form action="/todos/create" method="POST">
          <input class="new-todo" name="text" placeholder="What needs to be done?" autofocus>
          <button style="display:none" type="submit"></button>
        </form>
      </header>
      !${todos.length !== 0 && (html`
        <section class="main">
          <a href="/todos/toggle-all">
            <input class="toggle-all" type="checkbox">
            <label for="toggle-all">Mark all as complete</label>
          </a>
          <ul class="todo-list">
            !${listTodos.map(todo => html`
              <li data-key="${todo.id}" class="${cx({ completed: todo.completed, editing: todo.editing })}">
                <div class="view">
                  <a href="/todos/toggle/${todo.id}">
                    <input class="toggle" type="checkbox" ${cx({ checked: todo.completed })}>
                  </a>
                  <a href="/todos/edit/${todo.id}"><label>${todo.text}</label></a>
                  <form action="/todos/remove/${todo.id}">
                    <button class="destroy" type="submit"></button>
                  </form>
                </div>

                !${todo.editing && html`
                  <form action="/todos/update/${todo.id}" method="POST">
                    <!-- This crazy z-index stuff is to make the "click away" exiting edit mode work without javascript. -->
                    <a style="z-index:998;position:fixed;top:0;bottom:0;left:0;right:0" href="/todos/close/${todo.id}"></a>
                    <input style="z-index:999" class="edit" name="text" value="${todo.text}">
                    <button style="display:none" type="submit"></button>
                  </form>
                `}
              </li>
            `)}
          </ul>
        </section>
        <footer class="footer">
          <span class="todo-count"><strong>${active.length}</strong> item left</span>
          <ul class="filters">
            <li>
              <a class="${cx({ selected: filter === 'all' })}" href="/">All</a>
            </li>
            <li>
              <a class="${cx({ selected: filter === 'active' })}" href="/active">Active</a>
            </li>
            <li>
              <a class="${cx({ selected: filter === 'completed' })}" href="/completed">Completed</a>
            </li>
          </ul>

          <form action="/todos/remove-completed">
            <button type="submit" class="clear-completed">Clear completed</button>
          </form>
        </footer>
      `)}
    `
  })
}
