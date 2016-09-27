


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) => delay(500).then((todos) => {
	switch(filter) {
		case 'all':
			return todos;
		case 'completed':
			return todos.filter(
				t => t.completed
			);
		case 'active':
			return todos.filter(
				t => !t.completed
			);
		default:
			throw new Error(`Unknow filter: ${filter}`)
	}
})

export const addTodo = (text) =>
  delay(500).then(() => {
    const todo = {
      id: v4(),
      text,
      completed: false,
    };
    fakeDatabase.todos.push(todo);
    return todo;
  });

  export const toggleTodo = (id) =>
  delay(500).then(() => {
    const todo = fakeDatabase.todos.find(t => t.id === id);
    todo.completed = !todo.completed;
    return todo;
  });
