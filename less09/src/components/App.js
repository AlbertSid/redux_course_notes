import React from 'react'

import Footer from './Footer'
import AddTodo from './../containers/AddTodo'
import VisibleTodoList from './../containers/VisibleTodoList'


//  AddTodo + VisibleTodoList + Footer -> App
const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App