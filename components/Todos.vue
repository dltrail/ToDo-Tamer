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

  <ListContainer class="homeList">
      <Todo v-if="todos.length > 0"
      v-for="todo in completedTodos"
      :key="todo.id" :todo="todo" />
    <div v-else>
      <p>No todos available.</p>
    </div>
  </ListContainer>
</template>

<style>
.homeList{
  @apply mt-[48px]
}
</style>
