import React from 'react';
import './App.css';
export const addTodo = (list, item) => [...list, item] /* JEST testing */

function App() {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");

  //Retrieve data from local storage//
  React.useEffect(() => {
    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);

    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, [])


  //Save data in local storage//
  React.useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);


  /* Submit Task Function */
  function handleSubmit(e) {
    e.preventDefault()

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    }
    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  /* Delete Task Function */
  function deleteTodo(id) {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  }

  /* Save Edited Task Function */
  function toggleCompleted(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
    setTodos(updatedTodos);
  }

  /* Edit Task Function */
  function editTodo(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    })
    setTodos(updatedTodos);
    setTodoEditing(null);
    setEditingText("");
  }

  return (
    <div id="todo-list">
      <h1>My To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" autoFocus onChange={(e) => setTodo(e.target.value)} value={todo} id="input" name="input" />
        <button type="submit">Add To List</button>
      </form>

      {todos.map((todo) => <div key={todo.id} className="todo">
        <input type="radio" onChange={() => toggleCompleted(todo.id)} checked={todo.completed} />
        {todoEditing === todo.id ?
          (<input id="todo-Edits" type="text" onChange={(e) => setEditingText(e.target.value)} value={editingText} />)
          :
          (<div className="todo-text">{todo.text}</div>)}

        <div>
          <button className="todo-actions" onClick={() => deleteTodo(todo.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
          </svg></button>

          {todoEditing === todo.id ?
            (<button onClick={() => editTodo(todo.id)}>Save</button>)
            :
            (<button className="todo-actions" onClick={() => setTodoEditing(todo.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
              <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
            </svg></button>)}
        </div>

      </div>)}
    </div>
  );
}

export default App;
