<script setup>
import { useTodoStore } from "~/stores/todoStore";
import { storeToRefs } from "pinia";

const store = useTodoStore();
const { todos } = storeToRefs(store);
const completedTodos = computed(() =>
  store.todos.filter((todo) => todo.completed !== true)
);
</script>

<template>
  <div class="todoList">
    <div
      v-if="todos.length > 0"
      v-for="todo in completedTodos"
      :key="todo.id"
      class="item"
    >
      <Todo :todo="todo" />
    </div>

    <div v-else>
      <p>No todos available.</p>
    </div>
  </div>
</template>

<style></style>
