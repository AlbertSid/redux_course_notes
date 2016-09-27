export const loadState = () => {
	try {
		const State = localStorage.getItem('State')
		if(State === null) {
			return undefined;
		}
		return JSON.parse(State)
	} catch(err) {
		return undefined;
	}
}

export const saveState = (State) => {
	try {
		const newState = JSON.stringify(State)
		localStorage.setItem('State', newState)
	} catch(err) {
		//errors
	}
}