import { addTodo} from './App'


/* JEST testing */
describe('addTodo', () => {
  it('adds a new todo to the BOTTOM of the list', () => {
    const todos = [
      { id: new Date().getTime(), text: 'todoone', completed: false },
      { id: new Date().getTime(), text: 'todotwo', completed: false }
    ]

    const newTodo = { id: new Date().getTime(), text: 'todothree', completed: false }
    const expected = [
      { id: new Date().getTime(), text: 'todoone', completed: false },
      { id: new Date().getTime(), text: 'todotwo', completed: false },
      { id: new Date().getTime(), text: 'todothree', completed: false }

    ]
    const result = addTodo(todos, newTodo)
    expect(result).toEqual(expected)
  })
}) 

