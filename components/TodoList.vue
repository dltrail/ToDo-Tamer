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
  <ListContainer>
     <ul v-if="todos.length > 0">
      <li v-for="todo in completedTodos" :key="todo.id" ><TodoItem 
      
      :todo="todo" /></li>
     </ul>
    <div v-else>
      <p>No todos available</p>
    </div>
  </ListContainer>
</template>

<style>
li {
  @apply mb-2;
}
</style>
