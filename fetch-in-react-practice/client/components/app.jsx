import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    fetch('/api/todos')
      .then(res => res.json())
      .then(data => this.setState({ todos: data }))
      .catch(err => console.error(err));
  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    })
      .then(res => res.json())
      .then(data => {
        const copy = [...this.state.todos];
        copy.push(data);
        this.setState({ todos: copy });
      })
      .catch(err => console.error(err));
  }

  toggleCompleted(todoId) {
    const hello = todoId;
    var index = this.state.todos.findIndex(find => { return find.todoId === hello; });
    var status = this.state.todos[index].isCompleted;
    var newObject = { isCompleted: !status };
    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newObject)
    })
      .then(res => res.json())
      .then(data => {
        const copy = [...this.state.todos];
        copy[index] = data;
        this.setState({ todos: copy });
      })
      .catch(err => console.error(err));

    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing ONE PROPERTY: the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     *   - create a shallow copy of the todos array from state
     *   - replace the old todo with the todo received from the server
     *   - replace the old todos in the state with the new one (you know the index).
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list repeatedly should "toggle" its isCompleted status back and forth.
     *
     * DO NOT try to calculate the index of the todo by subtracting 1 from the id.
     *
     * DO NOT MUTATE the original state array, nor any objects within it.
     * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
