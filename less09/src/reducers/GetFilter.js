
const GetFilter = ( todos, filterType )=>{
  switch(filterType){
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
      return todos;
  }
}

export default GetFilter