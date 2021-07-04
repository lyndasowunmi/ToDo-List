import { addTodo } from './App'


/* JEST testing */
describe('addTodo', () => {
  it('add a new todo to the BOTTOM of the list', () => {
    const todos = [
      { id: 1, name: 'one', completed: false },
      { id: 2, name: 'two', completed: false }
    ]

    const newTodo = { id: 3, name: 'three', completed: false }
    const expected = [

      { id: 1, name: 'one', completed: false },
      { id: 2, name: 'two', completed: false },
      { id: 3, name: 'three', completed: false }

    ]
    const result = addTodo(todos, newTodo)
    expect(result).toEqual(expected)
  })
})