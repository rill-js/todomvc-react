import rill from 'rill'
import uid from 'uid'

export default (app) => {
  // You can nest Rill instances no problem!
  app.at('/todos/*', rill()
    .get('/remove/:id', ({ req, res, session })=> {
      const todos = session.get('todos') || [];
      todos.splice(todos.findIndex(todo => todo.id === req.params.id), 1)
      session.set('todos', todos);
      res.redirect('back');
    })
    .get('/remove-completed', ({ req, res, session })=> {
      const todos = session.get('todos') || [];
      session.set('todos', todos.filter(todo => !todo.completed));
      res.redirect('back');
    })
    .get('/edit/:id', ({ req, res, session })=> {
      const todos = session.get('todos') || [];
      const todo = todos.find(todo => todo.id === req.params.id);
      if (!todo) return;
      todo.editing = true;
      session.set('todos', todos);
      res.redirect('back');
    })
    .get('/close/:id', ({ req, res, session })=> {
      const todos = session.get('todos') || [];
      const todo = todos.find(todo => todo.id === req.params.id);
      if (!todo) return;
      todo.editing = false;
      session.set('todos', todos);
      res.redirect('back');
    })
    .get('/toggle/:id', ({ req, res, session })=> {
      const todos = session.get('todos') || [];
      const todo = todos.find(todo => todo.id === req.params.id);
      if (!todo) return;
      todo.completed = !todo.completed;
      session.set('todos', todos);
      res.redirect('back');
    })
    .get('/toggle-all', ({ req, res, session })=> {
      const todos = session.get('todos') || [];
      todos.forEach(todo => todo.completed = !todo.completed)
      session.set('todos', todos);
      res.redirect('back');
    })
    .post('/update/:id', ({ req, res, session })=> {
      const todos = session.get('todos') || [];
      const todo = todos.find(todo => todo.id === req.params.id);
      if (!todo) return;
      todo.text = req.body.text;
      todo.editing = false;
      session.set('todos', todos);
      res.redirect('back');
    })
    .post('/create', ({ req, res, session })=> {
      const todos = session.get('todos') || [];
      todos.push({ id: uid(), text: req.body.text });
      session.set('todos', todos);
      res.redirect('back');
    })
  )
}
