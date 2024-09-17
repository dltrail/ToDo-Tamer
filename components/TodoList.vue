<script setup>
import { computed } from 'vue';
import { useTodoStore } from '~/stores/todoStore';
import { storeToRefs } from 'pinia';

const store = useTodoStore();
const { todos } = storeToRefs(store);

const completedTodos = computed(() =>
  todos.value.filter(todo => !todo.completed)
);
</script>

<template>
  <ListContainer v-if="todos.length > 0">
     <ul>
      <li v-for="todo in completedTodos" :key="todo.id" >
      <TodoItem 
      :todo="todo" />
      </li>
     </ul>
  </ListContainer>
  <EmptyList v-else>Create your first todo</EmptyList>
</template>

<style scoped>
ul {
  @apply xl:mx-20;
}
li {
  @apply mb-2;
}
</style>
