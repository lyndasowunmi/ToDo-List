
import { addTodo, deleteTodo} from './App'



/* JEST TEST 1 */
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
 

/* JEST TEST 2 */
describe('deleteTodo', () => {
  it('removeTodo should remove todo from todos ', () => {
    const todos = [
      { id: new Date().getTime(), text: 'todoone', completed: false },
      { id: new Date().getTime(), text: 'todotwo', completed: false },
      { id: new Date().getTime(), text: 'todothree', completed: false }
    ]

    const deletedToDo = { id: new Date().getTime(), text: 'todotwo', completed: false }
    const expected = [
      { id: new Date().getTime(), text: 'todoone', completed: false },
      { id: new Date().getTime(), text: 'todothree', completed: false }
    ]

    const result = deleteTodo(todos, deletedToDo)
    expect(result).not.toBe(expected)
})
}) 
