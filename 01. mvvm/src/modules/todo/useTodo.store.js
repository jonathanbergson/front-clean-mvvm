import { defineStore } from 'pinia'
import { v4 as uuidV4 } from 'uuid'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
    formValues: {
      todo: null,
    },
  }),

  getters: {
    remainingTodos(state) {
      return state.todos.filter((todo) => !todo.done).length
    },
  },

  actions: {
    addTodo(text) {
      const uuid = uuidV4()
      this.todos.push({ uuid, text, done: false })
    },
    toggleTodo(uuid) {
      const todo = this.todos.find((todo) => todo.uuid === uuid)
      if (todo) todo.done = !todo.done
    },
  },
})
