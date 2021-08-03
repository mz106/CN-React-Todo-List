
import React from 'react';

const TodoItem = ( { task, handleDelete, index }) => {
  return (
    <div>
      <h2>{task}</h2>
      <button onClick={() => handleDelete(index)}>delete</button>
    </div>
  )
}

class App extends React.Component {

  state = {
    todos: [],
    userInput: ''
  }

  handleDelete = (index) => {
    console.log('clicked')
    let newArr = [...this.state.todos];
    newArr.splice(index, 1);
    this.setState({ todos : newArr })
  }

  handleChange = (event) => {
    this.setState({ userInput: event.target.value })
  }

  handleAdd = (event) => {
    event.preventDefault();
    let newArr = [...this.state.todos];
    newArr.push(this.state.userInput);
    this.setState( { todos: newArr})
    this.setState({ userInput: ''})
    console.log(this.state.todos)
  }
    
  render() {
    return (
      <div>
        <div>
          <h1>Michael's todo list!</h1>
          <form onSubmit={this.handleAdd}>
            <input onChange={this.handleChange} value={this.state.userInput}/>
            <button type="submit">add</button>
          </form>
        </div>
        <div>
          {this.state.todos.map((task, index) => {
            return <TodoItem task={task} key={index} index={index} handleDelete={this.handleDelete}/>
          })}
        </div>
      </div>
    );
  }
}

export default App;
