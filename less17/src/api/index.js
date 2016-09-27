import {
	v4
} from 'node-uuid'

const fakeDatabase = {
	todos: [{
		id: v4(),
		text: 'hey',
		completed: false
	}, {
		id: v4(),
		text: 'go',
		completed: true
	}, {
		id: v4(),
		text: 'zhou',
		completed: false
	}]

}

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
//console.log(delay)
export const fetchTodos = (filter) => delay(500).then(() => {
	switch(filter) {
		case 'all':
			return fakeDatabase.todos;
		case 'completed':
			return fakeDatabase.todos.filter(
				t => t.completed
			);
		case 'active':
			return fakeDatabase.todos.filter(
				t => !t.completed
			);
		default:
			throw new Error(`Unknow filter: ${filter}`)
	}
})
//console.log(fetchTodos)