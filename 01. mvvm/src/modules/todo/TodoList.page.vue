<script setup lang="ts">
import { useTodoViewModel } from '@/modules/todo/useTodo.viewModel'

const { formValues, todos, remainingTodos, addTodo, toggleTodo } = useTodoViewModel()
</script>

<template>
  <div>
    <h2>Minha Lista de Tarefas</h2>

    <div class="field">
      <label for="todo">Nova tarefa:</label>
      <input id="todo" v-model="formValues.todo" placeholder="Nova tarefa" @keyup.enter="addTodo" />
    </div>

    <ul>
      <li v-for="todo in todos" :key="todo.uuid">
        <label>
          <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo.uuid)" />
          <span :style="{ textDecoration: todo.done ? 'line-through' : 'none' }">
            {{ todo.text }}
          </span>
        </label>
      </li>
    </ul>

    <p>{{ remainingTodos }} tarefa(s) pendente(s)</p>
  </div>
</template>
