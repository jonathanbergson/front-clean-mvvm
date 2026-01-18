import { useTodoStore } from '@/modules/todo/useTodo.store.js'
import { storeToRefs } from 'pinia'

export function useTodoViewModel() {
  const store = useTodoStore()
  const { remainingTodos } = storeToRefs(store)

  function addTodo() {
    if (store.formValues.todo.trim()) {
      store.addTodo(store.formValues.todo.trim())
      store.formValues.todo = ''
    }
  }

  function toggleTodo(uuid) {
    store.toggleTodo(uuid)
  }

  return {
    // states
    formValues: store.formValues,
    todos: store.todos,

    // getters
    remainingTodos,

    // methods
    addTodo,
    toggleTodo,
  }
}
