


const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
//console.log(delay)
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
//console.log(fetchTodos)